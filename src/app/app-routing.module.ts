import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CommunityComponent } from './community/community.component';
import { IndexComponent } from './index/index.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CountyComponent} from './county/county.component';
import {DetailsComponent} from './details/details.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'shop', component: ShopComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'community', component: CommunityComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'county', component: CountyComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'shoppingCart/:id', component: ShoppingCartComponent},
  {path: 'product', component: ProductComponent},
];


@NgModule({
  exports: [ RouterModule ],
  // 这个方法之所以叫 forRoot()，是因为你要在应用的顶级配置这个路由器。
  // forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
