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
    this.#view.addNewEventBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.#view.showForm();
    });
    this.addEvent();
    this.updateEvent();
    this.saveEvent();
    this.deleteEvent(id);
  }

  fetchEvents() {
    eventAPI.fetchEventsAPI().then((events) => {
      this.#model.setEvents(events);
      events.forEach((event) => {
        this.#view.renderEventElement(event);
      });
    });
  }

  addEvent() {
    eventAPI.postEventsAPI().then(() => {});
  }

  deleteEvent(id) {
    eventAPI.deleteEventsAPI(id).then(() => {});
  }
}
