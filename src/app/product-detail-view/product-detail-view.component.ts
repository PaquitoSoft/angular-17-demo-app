import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TProduct } from '../types';
import { ProductsService } from '../services/products.service';
import { SelectInputComponent } from '../_shared/select-input/select-input.component';
import { ButtonComponent } from '../_shared/button/button.component';
import { CollapsiblePanelComponent } from '../_shared/collapsible-panel/collapsible-panel.component';
import { DividerComponent } from '../_shared/divider/divider.component';
import { ProductGalleryComponent } from './porduct-gallery/product-gallery.component';
import { RelatedProductsComponent } from './related-products/related-products.component';

@Component({
  selector: 'product-detail-view',
  standalone: true,
  imports: [
    CommonModule,
    ProductGalleryComponent,
    SelectInputComponent,
    ButtonComponent,
    CollapsiblePanelComponent,
    DividerComponent,
    RelatedProductsComponent,
  ],
  templateUrl: './product-detail-view.component.html',
  styleUrl: './product-detail-view.component.css'
})
export class ProductDetailViewComponent {
  product!: TProduct;
  route: ActivatedRoute = inject(ActivatedRoute);
  sizesSelectorOptions = [
    { value: 'xs', name: 'XS' },
    { value: 's', name: 'S' },
    { value: 'm', name: 'M' },
    { value: 'l', name: 'L' },
    { value: 'xl', name: 'XL' },
  ]

  constructor(productsService: ProductsService) {
    const productCode = this.route.snapshot.paramMap.get('code')!;
    this.product = productsService.getProductByCode(productCode);
  }
}
