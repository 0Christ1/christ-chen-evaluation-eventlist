class Controller {
  #view;
  #model;
  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initApp();
  }

  // fetch events to display
  // setup events: add, edit, delete

  initApp() {
    this.fetchEvents();
    this.setUpEvents();
  }

  setUpEvents() {
    this.addEvent();
    this.editEvent();
    this.delEvent();
  }

  fetchEvents() {
    eventAPI.fetchEventsAPI().then((events) => {
      this.#model.setEvent(events);
    });
  }
}
