export default class todoItem {
    constructor(title, description, dueDate, priority, attachedNotes, checked) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.attachedNotes = attachedNotes;
      this.checked = checked;
    }

    getTitle() {
      return this.title;
    }

    getDescription() {
      return this.description;
    }

    getDueDate() {
      return this.dueDate;
    }
    
    getPriority() {
      return this.priority;
    }

    getNotes() {
      return this.attachedNotes;
    }

    getChecked() {
      return this.checked;
    }

    setTitle(title) {
      this.title = title;
    }

    setDescription(description) {
      this.description = description;
    }

    setDueDate(dueDate) {
      this.dueDate = dueDate;
    }

    setPriority(priority) {
      this.priority = priority;
    }

    setNotes(notes) {
      this.attachedNotes = notes;
    }

    setChecked(checked) {
      this.checked = checked;
    }

    returnDiv() {
      const div = document.createElement('div');

      div.id = 'toDoItem';

      const left = document.createElement('div');
      left.id = 'left';
      const right = document.createElement('div');
      right.id = 'right';

      //prioDiv
      const priorityDiv = document.createElement('div');
      priorityDiv.id = 'priorityDiv'
      priorityDiv.classList.add(priorityColourReturner(this.getPriority()));
    

      //checkedDiv
      const checkedDiv = document.createElement('div');
      checkedDiv.id = 'checkedDiv';

      //titleDiv
      const titleDiv = document.createElement('div');
      titleDiv.id = 'titleDiv';
      titleDiv.innerText = this.getTitle();

      //noteDiv
      const noteDiv = document.createElement('div');
      noteDiv.id = 'noteDiv';

      //dateDiv
      const dateDiv = document.createElement('div');
      dateDiv.id = 'dateDiv';

      //editDiv
      const editDiv = document.createElement('div');
      editDiv.id = 'editDiv';

      //deleteDiv
      const deleteDiv = document.createElement('div');
      deleteDiv.id = 'deleteDiv';

      left.appendChild(priorityDiv);
      left.appendChild(checkedDiv);
      left.appendChild(titleDiv);

      right.appendChild(noteDiv);
      right.appendChild(dateDiv);
      right.appendChild(editDiv);
      right.appendChild(deleteDiv);

  
      div.appendChild(left);
      div.appendChild(right);

      return div;
  }

  }

  function priorityColourReturner(priority) {
    if (priority == 'high') {
      return 'priorityHigh'
    } else if (priority == 'medium') {
      return 'priorityMedium'
    } else if (priority == 'low') {
      return 'priorityLow';
    }
  }