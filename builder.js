// The Builder Pattern is a creational design pattern that allows you to construct complex objects step by step.
// It provides a way to build an object by piecing together its parts rather than calling a large constructor
// with many parameters.

// This is especially helpful when an object requires many configurations or optional values.
//Separates construction of an object from its representation.
// Often uses method chaining to set properties.

class UserBuilder {
  constructor(name) {
    this.user = {};
    this.user.name = name;
  }

  setEmail(email) {
    this.user.email = email;
    return this; // enable chaining
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const user = new UserBuilder("Alice")
  .setEmail("alice@example.com")
  .setAge(30)
  .setAddress("123 Main St")
  .build();

console.log(user);

// UI Card Builder Example
class CardBuilder {
  constructor() {
    this.card = document.createElement("div");
    this.card.className = "ui-card";
  }

  setTitle(title) {
    const titleElem = document.createElement("h2");
    titleElem.textContent = title;
    this.card.appendChild(titleElem);
    return this;
  }

  setImage(src, alt = "") {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    this.card.appendChild(img);
    return this;
  }

  setDescription(text) {
    const desc = document.createElement("p");
    desc.textContent = text;
    this.card.appendChild(desc);
    return this;
  }

  setLink(url, label = "Read more") {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = label;
    link.className = "ui-card-link";
    this.card.appendChild(link);
    return this;
  }

  build() {
    return this.card;
  }
}

const card = new CardBuilder()
  .setTitle("New Product")
  .setImage(
    "https://edge.curalate.com/sites/default/experiences/square-grid/assets/imagePlaceholder.png",
    "Product image"
  )
  .setDescription("This is a short description of the product.")
  .setLink("#", "Learn more")
  .build();

document.body.appendChild(card);
