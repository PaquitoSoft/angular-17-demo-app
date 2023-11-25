import { Component, Input } from '@angular/core';
import { TProduct } from '../../types';

@Component({
  selector: 'related-products',
  standalone: true,
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
})
export class RelatedProductsComponent {
  @Input({ required: true }) productId = '';
  relatedProducts: TProduct[] = [];
}
