// The Decorator Pattern is a structural design pattern that allows you to dynamically add new behavior to objects
//  without modifying their structure.

//A decorator wraps an object.
// It retains the original interface but adds or overrides behavior.
// It's perfect when you need multiple combinations of responsibilities without deep inheritance.

// Base Component
class Button {
  render() {
    return "<button>Click me</button>";
  }
}

// Decorator: adds a tooltip
function withTooltip(button, text) {
  const originalRender = button.render.bind(button);
  button.render = function () {
    return `<div class="tooltip" data-text="${text}">${originalRender()}</div>`;
  };
  return button;
}

// Decorator: adds a loading spinner
function withLoading(button) {
  const originalRender = button.render.bind(button);
  button.render = function () {
    return `<div class="loading">${originalRender()}<span class="spinner"></span></div>`;
  };
  return button;
}

let myButton = new Button();

myButton = withTooltip(myButton, "Click to submit!");
myButton = withLoading(myButton);

console.log(myButton.render());
