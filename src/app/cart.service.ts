import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cart, CartProduct} from '../dataFormat/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CartUrl = 'api/Cart';
  private CartProductUrl = 'api/CartProduct';
  constructor(private http: HttpClient) { }

  getCart(id: number): Observable<Cart> {
    const url = `${this.CartUrl}/${id}`;
    return this.http.get<Cart>(url);
  }
  getCartProduct(id: number): Observable<CartProduct> {
    const url = `${this.CartProductUrl}/${id}`;
    return this.http.get<CartProduct>(url);
  }
}
