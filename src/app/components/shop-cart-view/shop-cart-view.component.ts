import { Component, computed, effect } from '@angular/core';
import { TShopCart, TShopCartItem } from '../../types';
import { ShopCartService } from '../../services/shop-cart.service';
import { ButtonComponent } from '../_shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-detail-view',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
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

  onItemRemove(itemId: string) {
    this.shopCartService.removeItemCart(itemId);
  }
}
