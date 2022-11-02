// database.config.ts
import Dexie from "dexie";


import { CartItem } from "./types";

const database = new Dexie("shopping-cart");
database.version(1).stores({
  cartItem: '++id, name, quantity, image, price',
});

export const cartItemTable = database.table('cartItem');

export default database;


// class ShoppingCartDatabase extends Dexie {
//   cartItem!: Dexie.Table<CartItem, number>

//   constructor() {
//     super("shopping-cart")
//     this.version(1).stores({
//       cartItem: '++id, name, quantity, image, price',
//     });
//   }

//   loadCartItem() {}
// }

// export default ShoppingCartDatabase