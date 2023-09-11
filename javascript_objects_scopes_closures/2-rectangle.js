class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // If w or h is not a positive integer or is equal to 0, create an empty object
        // You can also set width and height to undefined or any other default value as needed
        Object.defineProperty(this, 'width', { value: undefined, writable: true });
        Object.defineProperty(this, 'height', { value: undefined, writable: true });
      }
    }
  }
  
  module.exports = Rectangle;
  