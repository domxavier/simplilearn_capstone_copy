import { Cart } from './../models/cart';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-shipping',
  templateUrl: './checkout-shipping.component.html',
  styleUrls: ['./checkout-shipping.component.css']
})
export class CheckoutShippingComponent implements OnInit {

  constructor(private cartService : CartService) { }

  ngOnInit(): void { 
    let checkout_cart = JSON.parse(localStorage.getItem('checkout_cart'));

    let finalCart = new Cart();
    finalCart.id = JSON.parse(localStorage.getItem('auth_meta')).userId;
    finalCart.product = JSON.parse(checkout_cart).product;
    console.log(finalCart);

    let idd = JSON.parse(localStorage.getItem('auth_meta')).userId;
    console.log(idd);

    // this.cartService.addCart(finalCart).subscribe(
    //   data => console.log(data)
    // )

  }

}
