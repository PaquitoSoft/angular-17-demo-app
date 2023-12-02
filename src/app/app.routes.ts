import { Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProductDetailViewComponent, productResolver } from './product-detail-view/product-detail-view.component';
import { ShopCartViewComponent } from './shop-cart-view/shop-cart-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'product/:code',
    component: ProductDetailViewComponent,
    resolve: {
      product: productResolver
    }
  },
  {
    path: 'cart',
    component: ShopCartViewComponent,
  }
];
