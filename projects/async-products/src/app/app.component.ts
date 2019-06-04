import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Observables - Async Products</h1>
    <ul>
      <li *ngFor="let product of products$ | async">{{product.title}} - {{product.price | currency}}</li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  products$:Observable<Product[]>;

  constructor(private productService:ProductService){
    this.products$ = productService.getProducts();
  }

  ngOnInit(){
    
  }


}
