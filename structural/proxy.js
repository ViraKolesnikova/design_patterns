// Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object.
// A proxy controls access to the original object, allowing you to perform something either before or after the
// request gets through to the original object.

// Example of caching results of product fetch
class ProductService {
  getProductDetails(productId) {
    console.log("Fetching from API...");
    return { id: productId, name: "Cool Gadget", price: 99.99 };
  }
}

class ProductServiceProxy {
  constructor() {
    this.service = new ProductService();
    this.cache = {};
  }

  getProductDetails(productId) {
    if (this.cache[productId]) {
      console.log("Returning from cache...");
      return this.cache[productId];
    }

    const result = this.service.getProductDetails(productId);
    this.cache[productId] = result;
    return result;
  }
}

const proxy = new ProductServiceProxy();

console.log(proxy.getProductDetails(101));
// Output: Fetching from API...

console.log(proxy.getProductDetails(101));
// Output: Returning from cache...
