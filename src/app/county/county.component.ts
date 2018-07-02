import { Component, OnInit } from '@angular/core';
import {County} from '../../dataFormat/county';
import {CountyService} from '../county.service';
import {Product} from '../../dataFormat/product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.css']
})
export class CountyComponent implements OnInit {

  current: number;
  total: number;
  counties: County[];
  hotProducts: Product[];
  hasBought: boolean;
  special: boolean;
  sort: string;


  constructor(private countyService: CountyService,
              private productService: ProductService) {
    this.current = 1;
    this.total = 100;
    this.special = false;
    this.hasBought = false;
    this.sort = 'default';
  }

  getCounties(): void {
    this.countyService.getCounties()
      .subscribe(counties => {
        this.counties = counties;
      });
  }
  getHotProducts(): void {
    this.productService.getHotProducts()
      .subscribe(hotProducts => {
        this.hotProducts = hotProducts;
      });
  }

  ngOnInit() {
    this.getCounties();
    this.getHotProducts();
  }

}
