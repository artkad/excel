export class Emmiter {
  constructor() {
    this.listeners = {};
  }
  // dispatch, fire, trigger
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
    return true;
  }

  // on, listen
  // formulf.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event]= this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] =
        this.listeners[event].filter((listener) => listener !== fn);
    };
  }
}
