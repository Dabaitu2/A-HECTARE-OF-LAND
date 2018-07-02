import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../product.service';
import {CountyService} from '../county.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  cart: any;
  shopsName: any[] = [];
  products: any[] = [];

  constructor(private cartService: CartService,
              private productService: ProductService,
              private countyService: CountyService,
              private route: ActivatedRoute
  ) {}

  getCart(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cartService.getCart(id)
      .subscribe(Cart => {
        this.cart = Cart;
        this.getDetails();
        this.getProducts();
      });
  }
  getDetails(): void {
    const shopsId = this.cart.shopsId;
    for (let i = 0; i < shopsId.length; i++) {
      this.countyService.getCounty(shopsId[i])
        .subscribe(County => {
          this.shopsName.push({
            name: County.name,
            id: shopsId[i]
          });
        });
    }
  }
  getProducts(): void {
    const ProductsId = this.cart.productsId;
    for (let i = 0; i < ProductsId.length; i++) {
      this.cartService.getCartProduct(ProductsId[i])
        .subscribe(Product => {
          this.products.push(Product);
        });
    }
  }

  ngOnInit() {
    this.getCart();
  }

}
