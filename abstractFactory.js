// The Abstract Factory Pattern is a creational design pattern that provides an interface for creating families of related
//  or dependent objects without specifying their concrete classes. This pattern is useful when you need to create 
// various related objects that share a common theme.

// Abstract Factory
class CarFactory {
  createCar() {
      throw new Error('This method should be overridden');
  }
  createEngine() {
      throw new Error('This method should be overridden');
  }
}

// Concrete Factory for Sedan
class SedanFactory extends CarFactory {
  createCar() {
      return new Sedan();
  }
  createEngine() {
      return new SedanEngine();
  }
}

// Concrete Factory for SUV
class SuvFactory extends CarFactory {
  createCar() {
      return new Suv();
  }
  createEngine() {
      return new SuvEngine();
  }
}

// Car and Engine classes
class Sedan {
  info() {
      return 'This is a sedan car';
  }
}

class SedanEngine {
  info() {
      return 'This is a sedan engine';
  }
}

class Suv {
  info() {
      return 'This is an SUV car';
  }
}

class SuvEngine {
  info() {
      return 'This is an SUV engine';
  }
}

// Usage
const sedanFactory = new SedanFactory();
const suvFactory = new SuvFactory();

const sedan = sedanFactory.createCar();
const sedanEngine = sedanFactory.createEngine();
console.log(sedan.info()); // Output: This is a sedan car
console.log(sedanEngine.info()); // Output: This is a sedan engine

const suv = suvFactory.createCar();
const suvEngine = suvFactory.createEngine();
console.log(suv.info()); // Output: This is an SUV car
console.log(suvEngine.info()); // Output: This is an SUV engine