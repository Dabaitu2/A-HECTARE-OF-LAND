import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const counties = [
      {
        id: 1,
        name: '沂蒙果树合作社',
        province: '山东',
        city: '济南',
        mainSell: ['蓝莓', '葡萄', '樱桃', '石榴'],
        sellingNum: 666,
        productsNum: 20,
      },
      {
        id: 2,
        name: '北京鲜花合作社',
        province: '北京',
        city: '北京',
        mainSell: ['桂花', '桃花', '迎春花', '翠花'],
        sellingNum: 555,
        productsNum: 18,
      },
      {
        id: 3,
        name: '洛阳绿草合作社',
        province: '河南',
        city: '洛阳',
        mainSell: ['方金草', '小小草', '稻草', '塑料草'],
        sellingNum: 315,
        productsNum: 34,
      },
      {
        id: 4,
        name: '成都西瓜合作社',
        province: '四川',
        city: '成都',
        mainSell: ['冬瓜', '西瓜', '南瓜', '北瓜'],
        sellingNum: 235,
        productsNum: 14,
      },
    ];
    const hotProducts = [
      {
        id: 1,
        name: '蓝莓',
        desc: '蓝莓1加仑盆栽3年苗 庭院阳台家庭种植果树 包邮',
        lowest: 48.00,
        highest: 58.00,
        sellingNum: 455,
        commentsNum: 256,
        type: ['南美一号', '夏普蓝', '奥尼尔'],
        specifications: ['30cm(含)-40cm(不含)'] ,
        inStore: 255,
        popular: 384,
      },
      {
        id: 2,
        name: '青草',
        desc: '青草1箩筐成年3年苗 牧场草场学校操场草皮 不包邮',
        lowest: 16.00,
        highest: 66.00,
        sellingNum: 545,
        commentsNum: 116,
        type: ['方金草', '华贵绿', '坚韧草'],
        specifications: ['10cm(含)-30cm(不含)'] ,
        inStore: 155,
        popular: 784,
      },
      {
        id: 3,
        name: '西瓜',
        desc: '西瓜1整个成熟翻沙瓤 夏季解暑清凉解渴水果 包邮',
        lowest: 18.00,
        highest: 28.00,
        sellingNum: 145,
        commentsNum: 567,
        type: ['香甜西瓜', '香脆西瓜', '脆甜西瓜'],
        specifications: ['15cm(含)-40cm(不含)'] ,
        inStore: 256,
        popular: 824,
      },
      {
        id: 4,
        name: '蓝莓',
        desc: '蓝莓1加仑盆栽3年苗 庭院阳台家庭种植果树 包邮',
        lowest: 48.00,
        highest: 58.00,
        sellingNum: 455,
        commentsNum: 256,
        type: ['南美一号', '夏普蓝', '奥尼尔'],
        specifications: ['30cm(含)-40cm(不含)'] ,
        inStore: 255,
        popular: 384,
      },
    ];
    const Product = [
      {
        id: 1,
        name: '蓝莓',
        desc: '蓝莓1加仑盆栽3年苗 庭院阳台家庭种植果树 包邮',
        lowest: 48.00,
        highest: 58.00,
        sellingNum: 455,
        commentsNum: 256,
        type: ['南美一号', '夏普蓝', '奥尼尔'],
        specifications: ['30cm(含)-40cm(不含)'] ,
        inStore: 255,
        popular: 384,
        shopid: 1
      },
      {
        id: 2,
        name: '青草',
        desc: '青草1箩筐成年3年苗 牧场草场学校操场草皮 不包邮',
        lowest: 16.00,
        highest: 66.00,
        sellingNum: 545,
        commentsNum: 116,
        type: ['方金草', '华贵绿', '坚韧草'],
        specifications: ['10cm(含)-30cm(不含)'] ,
        inStore: 155,
        popular: 784,
        shopid: 2
      },
      {
        id: 3,
        name: '西瓜',
        desc: '西瓜1整个成熟翻沙瓤 夏季解暑清凉解渴水果 包邮',
        lowest: 18.00,
        highest: 28.00,
        sellingNum: 145,
        commentsNum: 567,
        type: ['香甜西瓜', '香脆西瓜', '脆甜西瓜'],
        specifications: ['15cm(含)-40cm(不含)'] ,
        inStore: 256,
        popular: 824,
        shopid: 3
      },
      {
        id: 4,
        name: '蓝莓',
        desc: '蓝莓1加仑盆栽3年苗 庭院阳台家庭种植果树 包邮',
        lowest: 48.00,
        highest: 58.00,
        sellingNum: 455,
        commentsNum: 256,
        type: ['南美一号', '夏普蓝', '奥尼尔'],
        specifications: ['30cm(含)-40cm(不含)'] ,
        inStore: 255,
        popular: 384,
        shopid: 4
      },
    ];
    const Cart = [
      {
        id: 1,
        userId: 1,
        inCart: 3,
        shopsId: [1, 2],
        productsId: [1, 2, 2]
      },
      {
        id: 2,
        userId: 2,
        inCart: 3,
        shopsId: [1, 3],
        productsId: [2, 2, 3]
      },
    ];
    const CartProduct = [
      {
        id: 1,
        userId: 1,
        name: '蓝莓',
        desc: '蓝莓1加仑盆栽3年苗 庭院阳台家庭种植果树 包邮',
        lowest: 48.00,
        highest: 58.00,
        sellingNum: 455,
        commentsNum: 256,
        type: '南美一号',
        specifications: '30cm(含)-40cm(不含)',
        inStore: 255,
        num: 1,
        shopid: 1,
        price: 48,
      },
      {
        id: 2,
        userId: 1,
        name: '青草',
        desc: '青草1箩筐成年3年苗 牧场草场学校操场草皮 不包邮',
        lowest: 16.00,
        highest: 66.00,
        sellingNum: 545,
        commentsNum: 116,
        type: '方金草',
        specifications: '10cm(含)-30cm(不含)',
        inStore: 155,
        shopid: 2,
        price: 18,
        num: 1
      },
      {
        id: 3,
        userId: 1,
        name: '蓝莓',
        desc: '蓝莓1加仑盆栽3年苗 庭院阳台家庭种植果树 包邮',
        lowest: 48.00,
        highest: 58.00,
        sellingNum: 455,
        commentsNum: 256,
        type: '南美一号',
        specifications: '30cm(含)-40cm(不含)',
        inStore: 255,
        num: 1,
        shopid: 1,
        price: 48,
      },
    ];
    return { counties, hotProducts, Product, Cart, CartProduct };
  }
}