import { Injectable } from "@angular/core";
import { products } from "../data";
import { TProduct } from "../types";

const RELATED_PRODUCTS_COUNT = 5;

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts() {
    return products;
  }

  async getProductById(productId: string) {
    return products.find(product => product.id === productId)!;
  }

  async getProductByCode(productCode: string) {
    return products.find(product => product.code === productCode)!;
  }

  async getRelatedProducts() {
    const index = getRandomNumber(0, products.length - RELATED_PRODUCTS_COUNT);
    return products.slice(index, index + RELATED_PRODUCTS_COUNT);
  }
}
