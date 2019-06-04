import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, switchMap, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <h1>Weather App - Observables switchmap</h1>
  <input type="text" placeholder="enter city" [formControl]="searchInput">
  <h2>{{weather}}</h2>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {

  private baseWeatherURL:string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix:string = "&units=metric&appid=f78fb4c7fe94d411d8a24639b4f69366";

  searchInput:FormControl = new FormControl ();
  weather:string;

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {

    this.searchInput.valueChanges.pipe(
      debounceTime(400),
      switchMap(city => this.getWeather(city)) // When a previous call exists, the previous is canceled
    ).subscribe(
      res => this.weather = `
      Current Temperature: ${res.main.temp}Cº, 
      Humidity: ${res.main.humidity}%.
    `,
    err => console.log('error for this city:' + err)
    );    
  }

  getWeather(city:string):Observable<any>{
    return this.http.get(this.baseWeatherURL+city+this.urlSuffix)
    .pipe(
      catchError(err => {
        if(err.status === 404){
          console.log(`City: ${city} not found`);
          return EMPTY;
        }
      })
    )
  }
}
