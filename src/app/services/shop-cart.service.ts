import { Injectable, WritableSignal, signal, untracked } from "@angular/core";
import { v4 as uuid } from 'uuid';
import { TShopCart, TShopCartItem } from "../types";
import { ProductsService } from "./products.service";

const CART_STORAGE_KEY = '__cart__';

const defaultCart = {
  id: uuid(),
  items: [],
  totalUnits: 0
};

const calculateShopCartTotalUnits = (cartItems: TShopCartItem[] = []) =>
  cartItems.reduce((agg, item) => {
    return agg + item.units;
  }, 0);

const readCartFromStorage = () =>
  JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) || JSON.stringify(defaultCart));

const writeCartToStorage = (cart: TShopCart) =>
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));



@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  constructor(private productsService: ProductsService) {}

  cart: WritableSignal<TShopCart> = signal(defaultCart);

  getCart() {
    return this.cart;
  }

  async loadShopCart() {
    this.cart.set(readCartFromStorage());
  }

  async addProductToCart(productId: string, size: string) {
    const cartItems = untracked(this.cart).items;
    const existingProduct = cartItems.find(item => item.productId === productId && item.size === size);
    let updatedItems = cartItems;

    if (existingProduct) {
      updatedItems.forEach(item => {
        if (item.productId === productId) {
          item.units++;
        }
      });
    } else {
      const product = await this.productsService.getProductById(productId);
      updatedItems.push({
        id: uuid(),
        productId,
        product,
        size,
        units: 1
      });
    }
    this.cart.update(cart => ({
      ...cart,
      items: updatedItems,
      totalUnits: calculateShopCartTotalUnits(updatedItems),
    }));

    writeCartToStorage(untracked(this.cart));
  }

  async removeItemCart(itemId: string) {
    const updatedItems = untracked(this.cart).items.filter(item => item.id !== itemId);
    this.cart.update(cart => ({
      ...cart,
      items: updatedItems,
      totalUnits: calculateShopCartTotalUnits(updatedItems),
    }));
    writeCartToStorage(untracked(this.cart));
  }
}
