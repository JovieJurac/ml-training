/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */

interface item {
  name: string;
  price: number;
}

class ProductManager {
  private cart: item[];

  constructor(products: item[] = []) {
    this.cart = products;
  }

  addProducts(product: item): void {
    try {
      if (this.cart.length > 9) {
        throw " Maximum of 10 items only.";
      } else {
        this.cart.push(product);
      }
    } catch (error) {
      return console.log(error);
    }
  }

  deleteProducts(product: item): void {
    for (let i  = 0; i < this.cart.length; i++) {
      if (this.cart[i].name == product.name) {
        this.cart.splice(i, 1);
        return;
      }
    }
  }

  displayTotal(): void {
    let total = 0;
    this.cart.forEach((product) => {
      total += product.price;
    });
    return console.log(`The total amount on your cart is ${total} in pesos.`);
  }

  displayQty(): void {
    return console.log(
      `With the total quantity of, ${this.cart.length} items.`
    );
  }

  displayCart(): item[] {
    return this.cart;
  }
}

const cart = new ProductManager([
  { name: "Banana", price: 8.0 },
  { name: "Apple", price: 10.0 },
  { name: "Mango", price: 30.0 },
]);

console.log(cart.displayCart());
cart.addProducts({ name: "Orange", price: 15.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Pomelon", price: 74.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Grapes", price: 54.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Guava", price: 13.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Cherry", price: 46.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Coconut", price: 23.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Tomato", price: 4.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Strawberry", price: 55.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Watermelon", price: 65.0 });
console.log(cart.displayCart());
cart.addProducts({ name: "Kiwi", price: 25.0 });
console.log(cart.displayCart());
cart.deleteProducts({name: "Mango", price: 30.0});
console.log(cart.displayCart());
cart.displayTotal();
cart.displayQty();
