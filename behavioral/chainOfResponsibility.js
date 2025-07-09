// The Chain of Responsibility pattern is a behavioral design pattern that allows
// a request to be passed along a chain of handlers. Each handler decides either
// to process the request or to pass it on.
// Each handler has a reference to the next handler
// Request travels through the chain until one of the handlers handles it

class Logger {
  constructor(level) {
    this.level = level;
    this.next = null;
  }

  setNext(logger) {
    this.next = logger;
    return logger;
  }

  log(message, level) {
    if (this.level === level) {
      this.write(message);
    } else if (this.next) {
      this.next.log(message, level);
    } else {
      console.log("No handler for:", message);
    }
  }

  write(message) {
    throw new Error("Method 'write()' must be implemented.");
  }
}

class InfoLogger extends Logger {
  write(message) {
    console.log(`INFO: ${message}`);
  }
}

class DebugLogger extends Logger {
  write(message) {
    console.log(`DEBUG: ${message}`);
  }
}

class ErrorLogger extends Logger {
  write(message) {
    console.log(`ERROR: ${message}`);
  }
}

const info = new InfoLogger("info");
const debug = new DebugLogger("debug");
const error = new ErrorLogger("error");

info.setNext(debug).setNext(error);

info.log("This is an info message", "info"); // handled by InfoLogger
info.log("This is a debug message", "debug"); // passed to DebugLogger
info.log("Something went wrong", "error"); // passed to ErrorLogger
