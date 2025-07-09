// The Prototype Pattern in JavaScript is a design pattern used to create objects
//  based on a template of an existing object through cloning.

const bookPrototype = {
  init(title, genre) {
    this.title = title;
    this.genre = genre;
  },
  getDetails() {
    return `${this.title}, ${this.genre}`;
  },
};

// Create a new object based on the prototype
const myBook = Object.create(bookPrototype);
myBook.init("Harry Potter", "fantasy");
console.log(myBook.getDetails()); // Output: Harry Potter, fantasy

// Create another object based on the same prototype
const anotherBook = Object.create(bookPrototype);
anotherBook.init("Agatha Christie", "detective");
console.log(anotherBook.getDetails()); // Output: Agatha Christie, detective

class Book {
  constructor(title, genre) {
    (this.title = title), (this.genre = genre);
  }

  getDetails() {
    console.log(`${this.title}, ${this.genre}`);
  }
}

const firstBook = new Book("Hamlet", "drama");
const firstBookDetails = firstBook.getDetails();
