import { Injectable } from "@angular/core";
import { products } from "../data";
import { TProduct } from "../types";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts() {
    return products;
  }

  getProductByCode(productCode: string): TProduct {
    return products.find(product => product.code === productCode)!;
  }

}
