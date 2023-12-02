import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TProduct } from '../../types';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'related-products',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
})
export class RelatedProductsComponent {
  @Input({ required: true }) productId = '';
  relatedProducts: TProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnChanges() {
    this.relatedProducts = this.productsService.getRelatedProducts();
  }
}
