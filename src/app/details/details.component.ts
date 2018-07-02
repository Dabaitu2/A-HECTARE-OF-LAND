import { Component, OnInit } from '@angular/core';
import { CountyService } from '../county.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any;
  buyNum: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(Product => {
        this.product = Product;
      });
  }

  ngOnInit() {
    this.getProduct();
    this.buyNum = 1;
  }

}
