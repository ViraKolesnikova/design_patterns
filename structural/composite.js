// Composite is a structural design pattern that lets you compose objects into tree structures and
// then work with these structures as if they were individual objects. It also allows clients to treat individual objects
//  and groups of objects the same way.

// Component - common interface
class UIComponent {
  render() {
    throw new Error("render() must be implemented");
  }
}

// Leaf
class Button extends UIComponent {
  constructor(label) {
    super();
    this.label = label;
  }

  render() {
    console.log(`Rendering button: ${this.label}`);
  }
}

// Composite
class Panel extends UIComponent {
  constructor() {
    super();
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  render() {
    console.log("Rendering panel...");
    this.children.forEach((child) => child.render());
  }
}

// Usage
const button1 = new Button("Save");
const button2 = new Button("Cancel");

const panel = new Panel();
panel.add(button1);
panel.add(button2);

panel.render(); // This renders both buttons
