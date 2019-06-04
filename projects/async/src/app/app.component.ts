import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <h1>Async Pipe - Observables</h1>
  <p>Numbers Obs: {{numbers$ | async}}</p>
  <p>Numbers: {{numbers}}</p>
    
  `,
  styles: []
})
export class AppComponent {
  numbers:number;

  constructor(){
    interval(1000).pipe(take(10)).subscribe(num => this.numbers = num);
  }
  
  // Observable
  numbers$:Observable<number> = interval(500).pipe(take(20));

}
