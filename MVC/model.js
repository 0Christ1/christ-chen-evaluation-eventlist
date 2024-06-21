class Model {
  #events;
  constructor() {
    this.#events = [];
  }

  getEvents() {
    return [...this.#events];
  }

  setEvents(events) {
    this.#events = events;
  }

  addEvent(newEvent) {
    this.#events.push(newEvent);
  }

  removeEvent(id) {
    this.#events = this.#events.filter((event) => {
      event.id !== id;
    });
  }
}
