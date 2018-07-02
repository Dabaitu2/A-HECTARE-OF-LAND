
export class RawProduct {
  id: number;
  name: string;
  desc: string;
  lowest: number;
  highest: number;
}

export class Product extends RawProduct {
  constructor() {
    super();
  }
  sellingNum: number;
  commentsNum: number;
  type: string[];
  specifications: string[];
  inStore: number;
  popular: number;
  shopid: number;
}
