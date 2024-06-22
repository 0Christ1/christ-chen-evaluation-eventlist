class Controller {
  #view;
  #model;
  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initApp();
  }

  // fetch events to display
  // setup events: add, update, delete

  initApp() {
    this.fetchEvents();
    this.setUpEvents();
    this.addNewEvent();
  }

  fetchEvents() {
    eventAPI.fetchEventsAPI().then((events) => {
      this.#model.setEvents(events);
      events.forEach((event) => {
        this.#view.renderEventElement(event);
      });
    });
  }

  setUpEvents() {
    this.editEvent();
    this.delEvent();
  }

  addNewEvent() {
    this.#view.addNewEventBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.#view.initEventForm();
    });

    // add new event
    const eventList = this.#view.eventList;
    eventList.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-btn')) {
        e.preventDefault();
        const eventRow = e.target.closest('tr');
        const newEvent = {
          eventName: eventRow.querySelector('.nameInput').value,
          startDate: eventRow.querySelector('.startInput').value,
          endDate: eventRow.querySelector('.endInput').value,
        };
        eventAPI.postEventAPI(newEvent).then((_newEvent) => {
          this.#model.addEvent(_newEvent);
          this.#view.renderEventElement(_newEvent);
        });
        eventRow.remove();
      }
    });

    // cancel adding new event
    eventList.addEventListener('click', (e) => {
      if (e.target.classList.contains('cancel-btn')) {
        const eventRow = e.target.closest('tr');
        e.preventDefault();
        eventRow.remove();
      }
    });
  }

  editEvent() {
    this.#view.eventList.addEventListener('click', (e) => {
      if (e.target.classList.contains('edit-btn')) {
        const eventRow = e.target.closest('tr');
        const eventId = eventRow.id;
        const event = this.#model
          .getEvents()
          .find((event) => event.id == eventId);
        if (!event) {
          console.error(`Event with ID ${eventId} not found.`);
          return;
        }

        eventRow.innerHTML = '';
        this.#view.updateEventForm(eventRow, event);
      }
    });

    this.#view.eventList.addEventListener('click', (e) => {
      if (e.target.classList.contains('save-btn')) {
        e.preventDefault();
        const eventRow = e.target.closest('tr');
        const eventId = eventRow.id;
        const updatedEvent = {
          eventName: eventRow.querySelector('.nameInput').value,
          startDate: eventRow.querySelector('.startInput').value,
          endDate: eventRow.querySelector('.endInput').value,
        };
        eventAPI.putEventAPI(eventId, updatedEvent).then((updatedEvent) => {
          this.#model.updateEvent(updatedEvent);
          this.#view.renderEventElement(updatedEvent);
          eventRow.remove();
        });
      } else if (e.target.classList.contains('cancel-update-btn')) {
        e.preventDefault();
        const eventItem = e.target.closest('.event-item');
        const eventId = eventItem.id;
        const event = this.#model
          .getEvents()
          .find((event) => event.id == eventId);
        this.#view.renderEventElement(event);
        eventItem.remove();
      }
    });
  }

  delEvent() {
    this.#view.eventList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const eventItem = e.target.closest('.event-item');
        const eventId = eventItem.id;
        eventAPI.deleteEventAPI(eventId).then(() => {
          this.#view.removeEventElement(eventId);
          this.#model.removeEvent(eventId);
        });
      }
    });
  }
}
