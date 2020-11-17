import { CartService } from './../services/cart.service';
import { Cart } from './../models/cart';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from './../models/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;
  products : [];
  nonEmptyCart : boolean = true;
  emptycart : boolean = false;

  constructor(
    private aroute : ActivatedRoute,
    private productService : ProductService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.aroute.params.subscribe( params => {
      let id = params['id'];
      if(id) {
        var returnedproduct;
        this.productService.findProduct(id).subscribe(
          data => returnedproduct = data,
          e => console.log(e),
          () => {
            var item : Item = {
              product : returnedproduct,
              quantity : 1
            }
            // CRUD in localstorage done here
            if (localStorage.getItem('cart') == null) {
              let cart: any = [];
              cart.push(JSON.stringify(item));		// convert json to string
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              let cart: any = JSON.parse(localStorage.getItem('cart'));		// convert string to json
              let index: number = -1;
              for (var i = 0; i < cart.length; i++) {
                let item: Item = JSON.parse(cart[i]);
                if (item.product._id == id) {
                  index = i;
                  break;
                }
              }
              if (index == -1) {
                cart.push(JSON.stringify(item));
                localStorage.setItem('cart', JSON.stringify(cart));
              } else {
                let item: Item = JSON.parse(cart[index]);
                item.quantity += 1;
                cart[index] = JSON.stringify(item);
                localStorage.setItem("cart", JSON.stringify(cart));
              }
            }
            // Checking if everything is getting stored in localStorage
            //console.log(JSON.parse(localStorage.getItem('cart')));
            this.loadCart();
            console.log(this.items);
          }
        )
      } else {
        this.loadCart();
      }
    })
  }

  loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
    }
    if(this.total == 0) {
      this.nonEmptyCart = false;
      this.emptycart = true;
    }
    else { 
      this.nonEmptyCart = true;
      this.emptycart = false;
    }
  }
  
  remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product._id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
  }
  
  cartInfo:any;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		this.cartInfo= cart;
		//console.log(cart);	// call POST method to store Cart Details in DB (to service and then to express module)
    let prods = [];
    let i = 0;
    for (let item of this.items) {
      //console.log(item.product._id, item.quantity);
      prods.push(item.product._id, item.quantity);
    }
    var final_Cart = new Cart();
    final_Cart.id = "something";
    final_Cart.product = prods;
    // console.log("The CART ITEMS");
    // console.log(final_Cart);

    // let cart: any = [];
    // cart.push(JSON.stringify(item));		// convert json to string
    // localStorage.setItem('cart', JSON.stringify(cart));

    let checkout_cart : any = [];
    checkout_cart.push(JSON.stringify(final_Cart));
    localStorage.setItem('checkout_cart', JSON.stringify(checkout_cart));
    this.router.navigate(['/checkout']);
  }

}
