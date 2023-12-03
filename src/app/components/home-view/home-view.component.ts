import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { TProduct } from '../../types';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, ProductsGridComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  products: TProduct[] = [];

  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
  }
}
