class Events {
  constructor() {
    this.event = {}
  }

  on(eventName, callback) {
    if (this.event[eventName]) {
      this.event[eventName].push(callback);
    } else {
      this.event[eventName] = [callback];
    }
  }

  trigger(eventName) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(event => {
        event();
      });
    }
  }

  off(eventName) {
    delete this.event[eventName];
  }
}
