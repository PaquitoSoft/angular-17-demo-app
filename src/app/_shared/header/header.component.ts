import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MiniShopCartLogoComponent } from './mini-shop-cart-logo';
import { ShopCartService } from '../../services/shop-cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MiniShopCartLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cartItemsCount = 0;

  constructor(shopCartService: ShopCartService) {
    effect(() => {
      const cartSignal = shopCartService.getCart();
      this.cartItemsCount = cartSignal().totalUnits;
    });
  }

}
