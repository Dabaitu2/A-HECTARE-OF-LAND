import {Product, RawProduct} from './product';

export class Cart {
  id: number;
  userId: number;
  inCart: number;
  shopsId: number[];
  productsId: number[];
}

export class CartProduct extends RawProduct {
  constructor() {
    super();
  }
  type: string;
  price: number;
  specifications: string;
  inStore: number;
  num: number;
  userId: number;
}
