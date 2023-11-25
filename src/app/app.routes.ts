import { Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProductDetailViewComponent } from './product-detail-view/product-detail-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'product/:code',
    component: ProductDetailViewComponent
  }
];
