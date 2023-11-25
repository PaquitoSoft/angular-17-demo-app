import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MiniShopCartLogoComponent } from './mini-shop-cart-logo';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MiniShopCartLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
