import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private productsUrl = 'http://localhost:5000/api/products';

  constructor(private http : HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  
  findProduct(id : String) : Observable<Product> {
    return this.http.get<Product>(`http://localhost:5000/api/productbyid/${id}`);
  }

}
