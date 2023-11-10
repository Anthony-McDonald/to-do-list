export default class todoItem {
    constructor(title, description, dueDate, priority, attachedNotes, checked) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.attachedNotes = attachedNotes;
      this.checked = checked;
    }
  }