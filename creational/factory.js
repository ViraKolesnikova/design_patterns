// The Factory Pattern in JavaScript is a design pattern that uses factory methods to create objects
//  without specifying the exact class of the object that will be created. 
// This pattern is useful for creating different objects based on some conditions.

class ProductFactory {
  createProduct(type) {
      let product;

      if (type === 'laptop') {
        product = new Laptop();
      } else if (type === 'smartWatch') {
        product = new SmartWatch();
      }

      product.type = type;

      product.online = function() {
          console.log(`${this.type} ${product.inches} inches is online`);
      };

      return product;
  }
}

// Define product types
class Laptop {
  constructor() {
      this.inches = 16;
  }
}

class SmartWatch {
  constructor() {
      this.inches = 1.56;
  }
}

// Usage
const factory = new ProductFactory();

const myLaptop = factory.createProduct('laptop');
myLaptop.online(); // Output: laptop 16 inches is online

const smartWatch = factory.createProduct('smartWatch');
smartWatch.online(); // Output: smartWatch 1.56 inches is online
