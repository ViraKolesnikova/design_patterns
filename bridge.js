// Bridge is a structural design pattern that lets you split a large class or a set of closely
// related classes into two separate hierarchies—abstraction and implementation—which can be developed
// independently of each other.

// Abstraction: Order
// Refined Abstraction: OnlineOrder, InStoreOrder
// Implementor: PaymentMethod
// Concrete Implementors: PayPalPayment, CreditCardPayment

// Implementor
class PaymentMethod {
  pay(amount) {
    throw new Error("pay() must be implemented");
  }
}

// Concrete Implementors
class PayPalPayment extends PaymentMethod {
  pay(amount) {
    console.log(`Paying $${amount} via PayPal.`);
  }
}

class CreditCardPayment extends PaymentMethod {
  pay(amount) {
    console.log(`Paying $${amount} with Credit Card.`);
  }
}

// Abstraction
class Order {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  checkout(amount) {
    throw new Error("checkout() must be implemented");
  }
}

// Refined Abstractions
class OnlineOrder extends Order {
  checkout(amount) {
    console.log("Processing online order...");
    this.paymentMethod.pay(amount);
  }
}

class InStoreOrder extends Order {
  checkout(amount) {
    console.log("Processing in-store order...");
    this.paymentMethod.pay(amount);
  }
}

// Usage
const paypal = new PayPalPayment();
const creditCard = new CreditCardPayment();

const onlineOrder = new OnlineOrder(paypal);
onlineOrder.checkout(49.99); // Output: Processing online order... Paying $49.99 via PayPal.

const storeOrder = new InStoreOrder(creditCard);
storeOrder.checkout(89.99); // Output: Processing in-store order... Paying $89.99 with Credit Card.
