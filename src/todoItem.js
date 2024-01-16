import editIcon from './assets/edit.svg';
import deleteIcon from './assets/delete.svg'

export default class todoItem {
    constructor(itemNumber, title, description, dueDate, priority, attachedNotes, checked, page) {
      this.itemNumber = itemNumber;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.attachedNotes = attachedNotes;
      this.checked = checked;
      this.page = page;
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

    getItemNumber() {
      return this.itemNumber;
    }

    getPage() {
      return this.page;
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

    setPage(page) {
      this.page = page;
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
      const checkBox = document.createElement('input');
      checkBox.id = 'checkbox';
      checkBox.type = 'checkbox';
      let jsonObject = JSON.parse(localStorage.getItem(this.getItemNumber()));
      
      if (this.getChecked() == true) {
        checkBox.checked = true;
      }
      checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
          console.log("setting checked to true in the object for itemid " + this.getItemNumber())
          this.setChecked(true);
          jsonObject.checked = true;
          console.log(jsonObject.checked);

        } else {
          console.log("setting it to false");
          this.setChecked(false);
          jsonObject.checked = false;
          console.log(jsonObject.checked);
        }
        localStorage.setItem(this.getItemNumber(), JSON.stringify(new todoItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description, jsonObject.dueDate,jsonObject.priority,jsonObject.attachedNotes, jsonObject.checked,jsonObject.page)));
      });

      checkedDiv.appendChild(checkBox);
      checkedDiv.id = 'checkedDiv';

      //titleDiv
      const titleDiv = document.createElement('div');
      titleDiv.id = 'titleDiv';
      titleDiv.innerText = this.getTitle();

      //detailsDiv
      const detailsDiv = document.createElement('div');
      detailsDiv.id = 'detailsDiv';
      detailsDiv.innerText = 'DETAILS';


      //dateDiv
      const dateDiv = document.createElement('div');
      dateDiv.id = 'dateDiv';
      dateDiv.innerText = this.getDueDate();

      //editDiv
      const editDiv = document.createElement('div');
      editDiv.id = 'editDiv';

      const editSVG = new Image();
      editSVG.src = editIcon;
      editSVG.classList.add('svgToDo');
      editSVG.classList.add('editSVG');

      //deleteDiv
      const deleteDiv = document.createElement('div');
      deleteDiv.id = 'deleteDiv';

      const deleteSVG = new Image();
      deleteSVG.src = deleteIcon;
      deleteSVG.classList.add('svgToDo');
      deleteSVG.classList.add('deleteSVG');

      console.log(this.getItemNumber())


      // deleteSVG.addEventListener('click', function() {
      //   console.log(this.getItemNumber())
      //   div.remove();
      // });
      deleteSVG.addEventListener('click', () => {
        localStorage.removeItem(this.getItemNumber());
        div.remove();
      });
      //appends

      left.appendChild(priorityDiv);
      left.appendChild(checkedDiv);
      left.appendChild(titleDiv);

      right.appendChild(detailsDiv);
      right.appendChild(dateDiv);
      right.appendChild(editDiv);
      right.appendChild(deleteDiv);
      right.appendChild(editSVG);
      right.appendChild(deleteSVG);

  
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