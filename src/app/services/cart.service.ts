import { Observable } from 'rxjs';
import { Cart } from './../models/cart';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private checkoutUrl = 'http://localhost:5000/api/checkout';

  constructor(private http : HttpClient) { }

  addCart(aCart : Cart) : Observable<any> {
    console.log("CART SERVICE---------------------");
    console.log(aCart);
    return this.http.post<any>(this.checkoutUrl, aCart, httpOptions);
  }


}
