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

  updateEvent(updatedEvent) {
    const index = this.#events.findIndex(
      (event) => event.id === updatedEvent.id
    );
    if (index !== -1) {
      this.#events[index] = updatedEvent;
    }
  }
}
