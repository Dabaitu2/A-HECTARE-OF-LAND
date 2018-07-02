import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  hotProducts: any[];
  activeNum = 0;

  constructor(private productService: ProductService) { }

  getHotProducts(): void {
    this.productService.getHotProducts()
      .subscribe(hotProducts => {
        this.hotProducts = hotProducts;
      });
  }

  ngOnInit() {
    this.getHotProducts();
  }

}
