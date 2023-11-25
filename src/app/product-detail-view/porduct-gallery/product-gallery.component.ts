import { Component, Input } from '@angular/core';
import { TProduct } from '../../types';

@Component({
  selector: 'product-gallery',
  standalone: true,
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css',
})
export class ProductGalleryComponent {
  @Input() product!: TProduct;
  selectedImage = '';

  ngOnInit() {
    this.selectedImage = this.product.detailImages[0];
  }

  updateSelectedImage(newImageUrl: string) {
    this.selectedImage = newImageUrl;
  }

  isSelectedImage(imageUrl: string) {
    // console.log({
    //   selectedImage: this.selectedImage,
    //   imageUrl,
    //   isSelected: this.selectedImage === imageUrl,
    // });
    return this.selectedImage === imageUrl;
  }
}
