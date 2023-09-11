class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        
        Object.defineProperty(this, 'width', { value: undefined, writable: true });
        Object.defineProperty(this, 'height', { value: undefined, writable: true });
      }
    }
  }
  
  module.exports = Rectangle;
  