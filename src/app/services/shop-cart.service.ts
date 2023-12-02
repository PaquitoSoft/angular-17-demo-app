import { Injectable, WritableSignal, signal, untracked } from "@angular/core";
import { v4 as uuid } from 'uuid';
import { TShopCart, TShopCartItem } from "../types";

const calculateShopCartTotalUnits = (cartItems: TShopCartItem[] = []) =>
  cartItems.reduce((agg, item) => {
    return agg + item.units;
  }, 0);

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  cart: WritableSignal<TShopCart> = signal({
    id: uuid(),
    items: [],
    totalUnits: 0
  });

  getCart() {
    return this.cart;
  }

  addProductToCart(productId: string, size: string) {
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
      updatedItems.push({
        id: uuid(),
        productId,
        size,
        units: 1
      });
    }
    this.cart.update(cart => ({
      ...cart,
      items: updatedItems,
      totalUnits: calculateShopCartTotalUnits(updatedItems),
    }));

    console.log('Updated cart:', untracked(this.cart));
  }

  removeItemCart(itemId: string) {
    const updatedItems = untracked(this.cart).items.filter(item => item.id !== itemId);
    this.cart.update(cart => ({
      ...cart,
      items: updatedItems,
      totalUnits: calculateShopCartTotalUnits(updatedItems),
    }));
  }

}
