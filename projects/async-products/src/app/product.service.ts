import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product{
  id:number;
  title:string;
  price:number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    {id:0, title:'produto 1', price: 25.99},
    {id:1, title:'produto 2', price: 35.99},
    {id:2, title:'produto 3', price: 45.99},
  ]

  constructor() { }


  getProducts():Observable<Product[]>{
    return of(this.products);
  }
}