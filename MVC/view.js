// view.js
class View {
  constructor() {
    this.eventList = document.querySelector('.event-list');
    this.addNewEventBtn = document.querySelector('.add-event-btn');
  }

  initEventForm() {
    const eventForm = document.createElement('form');
    eventForm.id = 'form';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('nameInput');
    nameInput.placeholder = 'Enter Event Name';
    nameInput.required = true;

    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.classList.add('startInput');
    startDateInput.required = true;

    const endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.classList.add('endInput');
    endDateInput.required = true;

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.type = 'submit';
    addBtn.textContent = 'Add';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel';

    const eventRow = document.createElement('tr');
    eventRow.classList.add('event-item');

    const name = document.createElement('td');
    name.appendChild(nameInput);

    const start = document.createElement('td');
    start.appendChild(startDateInput);

    const end = document.createElement('td');
    end.appendChild(endDateInput);

    const actions = document.createElement('td');
    actions.appendChild(addBtn);
    actions.appendChild(cancelBtn);

    eventRow.appendChild(name);
    eventRow.appendChild(start);
    eventRow.appendChild(end);
    eventRow.appendChild(actions);
    eventRow.appendChild(eventForm);
    this.eventList.appendChild(eventRow);
  }

  renderEventElement(event) {
    const { eventName, startDate, endDate, id } = event;
    const eventRow = document.createElement('tr');
    eventRow.classList.add('event-item');
    eventRow.id = id;

    const name = document.createElement('td');
    name.textContent = eventName;
    name.classList.add('event-name');

    const start = document.createElement('td');
    start.textContent = startDate;
    start.classList.add('start-date');

    const end = document.createElement('td');
    end.textContent = endDate;
    end.classList.add('end-date');

    const actions = document.createElement('td');
    actions.classList.add('actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.textContent = 'Delete';

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    eventRow.appendChild(name);
    eventRow.appendChild(start);
    eventRow.appendChild(end);
    eventRow.appendChild(actions);
    this.eventList.appendChild(eventRow);
  }

  updateEventForm(eventRow, event) {
    const { eventName, startDate, endDate } = event;

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('nameInput');
    nameInput.value = eventName;
    nameInput.required = true;

    const startInput = document.createElement('input');
    startInput.type = 'date';
    startInput.classList.add('startInput');
    startInput.value = startDate;
    startInput.required = true;

    const endInput = document.createElement('input');
    endInput.type = 'date';
    endInput.classList.add('endInput');
    endInput.value = endDate;
    endInput.required = true;

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save';
    saveBtn.type = 'submit';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-update-btn');
    cancelBtn.textContent = 'Cancel';

    const nameCell = document.createElement('td');
    nameCell.appendChild(nameInput);

    const startCell = document.createElement('td');
    startCell.appendChild(startInput);

    const endCell = document.createElement('td');
    endCell.appendChild(endInput);

    const actionsCell = document.createElement('td');
    actionsCell.appendChild(saveBtn);
    actionsCell.appendChild(cancelBtn);

    eventRow.appendChild(nameCell);
    eventRow.appendChild(startCell);
    eventRow.appendChild(endCell);
    eventRow.appendChild(actionsCell);
  }

  removeEventElement(eventId) {
    const eventItem = document.getElementById(eventId);
    if (eventItem) {
      eventItem.remove();
    }
  }
}
