// view.js
class View {
  constructor() {
    this.eventList = document.querySelector('.event-list');
    this.addNewEventBtn = document.querySelector('.add-event-btn');
    this.initEventForm();
  }

  initEventForm() {
    this.eventForm = document.createElement('form');
    this.eventForm.classList.add('event-form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'eventName';
    nameInput.placeholder = 'Enter Event Name';
    nameInput.required = true;

    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.name = 'startDate';
    startDateInput.required = true;

    const endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.name = 'endDate';
    endDateInput.required = true;

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.type = 'submit';
    addBtn.textContent = 'Add Event';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    this.eventForm.appendChild(nameInput);
    this.eventForm.appendChild(startDateInput);
    this.eventForm.appendChild(endDateInput);
    this.eventForm.appendChild(addBtn);
    this.eventForm.appendChild(cancelBtn);

    this.eventRow = document.createElement('tr');
    this.eventRow.setAttribute('id', id);
    this.eventRow.classList.add('event-item');
    const eventCell = document.createElement('td');
    eventCell.colSpan = 4;
    eventCell.appendChild(this.eventForm);
    eventRow.appendChild(eventCell);
    this.eventList.appendChild(eventRow);
  }

  renderEventElement(events) {
    events.forEach((event) => {
      const { id, name, start, end } = event;
      const eventRow = document.createElement('tr');
      eventRow.classList.add('event-item');
      eventRow.setAttribute('id', id);

      const eventName = document.createElement('td');
      eventName.classList.add('event');
      eventName.textContent = name;

      const eventStartDate = document.createElement('td');
      eventStartDate.classList.add('start-date');
      eventStartDate.textContent = start;

      const eventEndDate = document.createElement('td');
      eventEndDate.classList.add('end-date');
      eventEndDate.textContent = end;

      const actions = document.createElement('td');

      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'E';
      editBtn.addEventListener('click', () => {
        this.showEditForm(event);
      });

      const delBtn = document.createElement('button');
      delBtn.classList.add('delete-btn');
      delBtn.textContent = 'D';
      delBtn.addEventListener('click', () => {
        this.handleDeleteEvent(id);
      });

      actions.appendChild(editBtn);
      actions.appendChild(delBtn);
      eventRow.appendChild(eventName);
      eventRow.appendChild(eventStartDate);
      eventRow.appendChild(eventEndDate);
      eventRow.appendChild(actions);
      this.eventList.appendChild(eventRow);
    });
  }

  removeEventElement(eventId) {
    const eventItem = document.getElementById(eventId);
    if (eventItem) {
      eventItem.remove();
    }
  }

  bindAddEvent(handler) {
    this.eventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newEvent = {
        name: this.eventForm.eventName.value,
        start: this.eventForm.startDate.value,
        end: this.eventForm.endDate.value,
      };
      handler(newEvent);
      this.eventForm.reset();
      this.eventForm.style.display = 'none';
    });

    const cancelBtn = this.eventForm.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.eventForm.reset();
      this.eventForm.style.display = 'none';
    });
  }
}
