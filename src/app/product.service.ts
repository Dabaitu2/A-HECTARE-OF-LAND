import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../dataFormat/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private HotProductsUrl = 'api/hotProducts';
  private productUrl = 'api/Product';

  constructor(private http: HttpClient) { }

  getHotProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.HotProductsUrl);
  }
  getProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Product>(url);
  }
}
