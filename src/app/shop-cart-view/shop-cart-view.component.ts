import { Component, computed, effect } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { TShopCart, TShopCartItem } from '../types';
import { ShopCartService } from '../services/shop-cart.service';
import { ButtonComponent } from '../_shared/button/button.component';

@Component({
  selector: 'product-detail-view',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './shop-cart-view.component.html',
  styleUrl: './shop-cart-view.component.css'
})
export class ShopCartViewComponent {
  cart: TShopCart = {
    id: '',
    items: [],
    totalUnits: 0
  };
  totalAmount = 0 ;

  constructor(
    // private activatedRouter: ActivatedRoute,
    private shopCartService: ShopCartService
  ) {
    effect(() => {
      const cartSignal = shopCartService.getCart();
      this.cart = cartSignal();

      this.totalAmount = computed(() => this.cart.items.reduce((agg, item) => {
        return agg + (item.product.price * item.units);
      }, 0))();
    });
  }

  onItemremove(itemId: string) {
    this.shopCartService.removeItemCart(itemId);
  }
}

// export const productResolver = (route: ActivatedRouteSnapshot) => {
//   const shopCartService = inject(ShopCartService);
//   const productsService = inject(ProductsService);
//   const cart = untracked(shopCartService.getCart());
//   const productsLoaders = cart.items.map(item =>)
// }
