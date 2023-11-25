import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TProduct } from '../../types';

@Component({
  selector: 'products-grid',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.css',
})
export class ProductsGridComponent {
  @Input() products: TProduct[] = [];
}
