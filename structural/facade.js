// Facade is a structural design pattern that provides a simplified interface to a library, a framework,
//  or any other complex set of classes.
// Facade goal is to simplify complex subsystem interactions by providing a unified interface — the facade —
//  that hides the complexity.

// Subsystems
class Inventory {
  checkItem(itemId) {
    console.log(`Checking availability for item #${itemId}`);
    return true; // Assume always in stock
  }
}

class Payment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount}`);
    return true; // Assume payment is successful
  }
}

class Shipping {
  shipItem(itemId) {
    console.log(`Shipping item #${itemId}`);
  }
}

class Receipt {
  generate(itemId, amount) {
    console.log(`Receipt: Item #${itemId}, Amount: $${amount}`);
  }
}

// Facade
class ShopFacade {
  constructor() {
    this.inventory = new Inventory();
    this.payment = new Payment();
    this.shipping = new Shipping();
    this.receipt = new Receipt();
  }

  checkout(itemId, amount) {
    if (this.inventory.checkItem(itemId)) {
      if (this.payment.processPayment(amount)) {
        this.shipping.shipItem(itemId);
        this.receipt.generate(itemId, amount);
        console.log("Checkout complete!");
      }
    }
  }
}

// Usage

const shop = new ShopFacade();
shop.checkout(123, 49.99);
