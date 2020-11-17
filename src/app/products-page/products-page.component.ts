import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: Product[];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      e => console.log(e),
      () => {
        console.log(this.products)
      }
    )
  }

}
