import { Component, OnInit } from '@angular/core';
import { Product } from './domain/product';
import { ProductService } from './service/productservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onboarding';
  products!: Product[];

  selectedProducts!: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }

}




