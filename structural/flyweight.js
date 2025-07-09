// The Flyweight Design Pattern is used to minimize memory usage by sharing as much data
//  as possible with similar objects. It's particularly useful when dealing with a large
// number of similar objects.

// Flyweight Object
class TreeType {
  constructor(name, color, texture) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  draw(x, y) {
    console.log(`Drawing ${this.name} tree at (${x}, ${y})`);
  }
}

// Flyweight Factory
class TreeFactory {
  constructor() {
    this.treeTypes = {};
  }

  getTreeType(name, color, texture) {
    const key = `${name}_${color}_${texture}`;
    if (!this.treeTypes[key]) {
      this.treeTypes[key] = new TreeType(name, color, texture);
    }
    return this.treeTypes[key];
  }
}

// Tree Instances with External State
class Tree {
  constructor(x, y, treeType) {
    this.x = x;
    this.y = y;
    this.treeType = treeType;
  }

  draw() {
    this.treeType.draw(this.x, this.y);
  }
}

const factory = new TreeFactory();
const trees = [];

for (let i = 0; i < 5; i++) {
  const type = factory.getTreeType("Oak", "green", "rough");
  trees.push(new Tree(i, i * 2, type));
}

trees.forEach((tree) => tree.draw());

console.log(trees);
