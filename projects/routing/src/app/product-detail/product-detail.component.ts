import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <h3>Product detail for Product Id: {{productId}}</h3>
  `,
  styles: ['h3{background:cyan}']
})
export class ProductDetailComponent implements OnInit {
  productId:string;

  constructor(private route:ActivatedRoute) {
    //route.params is an Observable
    // and can be used to subscribe and update when changes happen
    this.route.params
      .subscribe(param => this.productId = param.id);
  }

  ngOnInit() {
  }

}
