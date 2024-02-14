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

    returnDiv(contentDiv) {
      let jsonObject = JSON.parse(localStorage.getItem(this.getItemNumber()))

      const exampleToDo = new todoItem(1,'brush teeth', 'with toothpaste', '15/06/2024', 'medium', "",false, "home");
      const exampleToDo1 = new todoItem(2,'brush teeth', 'with toothpaste', '15/06/2024', 'medium', "",false, "today");
      const exampleToDo2 = new todoItem(3,'brush teeth', 'with toothpaste', '15/06/2024', 'medium', "",false, "week");
  

      if (jsonObject == null) {
        localStorage.setItem('0', JSON.stringify(exampleToDo));
        localStorage.setItem('1', JSON.stringify(exampleToDo1));
        localStorage.setItem('2', JSON.stringify(exampleToDo2));
      }
      const div = document.createElement('div');

      div.id = 'todoFormat';

      const top = document.createElement('div');
      top.id = 'topFormat'


      const left = document.createElement('div');
      left.id = 'left';
      const right = document.createElement('div');
      right.id = 'right';

      const bottom = document.createElement('div');
      bottom.id = 'bottomFormat';

      const bottomLeft = document.createElement('div');
      bottomLeft.innerText = 'DETAILS: '

      const bottomRight = document.createElement('div');
      

      // bottomRight.innerText = jsonObject.description;
      bottomLeft.id = 'descriptionTitle';
      bottom.appendChild(bottomLeft);
      bottom.appendChild(bottomRight);
      let desc = document.createElement('h4');
      desc.innerText = jsonObject.description;
      desc.id = 'desc';
      bottomLeft.appendChild(desc) 
      let closeDiv = document.createElement('div');
      closeDiv.innerText = "X";
      closeDiv.id = 'closeAddTaskWindow';
      bottomRight.appendChild(closeDiv);
      bottom.classList.add('hideDesc');

      closeDiv.addEventListener('click', () => {
        bottom.classList.add('hideDesc');


      })


      // bottomLeft.innerText = jsonObject.description;


      //prioDiv
      const priorityDiv = document.createElement('div');
      priorityDiv.id = 'priorityDiv'
      priorityDiv.classList.add(priorityColourReturner(this.getPriority()));
    

      //checkedDiv
      const checkedDiv = document.createElement('div');
      const checkBox = document.createElement('input');
      checkBox.id = 'checkbox';
      checkBox.type = 'checkbox';
      
      if (this.getChecked() == true) {
        checkBox.checked = true;
      }
      checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
          this.setChecked(true);
          jsonObject.checked = true;

        } else {
          this.setChecked(false);
          jsonObject.checked = false;
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

      detailsDiv.addEventListener('click', () => {
        bottom.classList.remove('hideDesc');
      })


      //dateDiv
      const dateDiv = document.createElement('div');
      dateDiv.id = 'dateDiv';
      dateDiv.innerHTML = this.getDueDate();

      //editDiv
      const editDiv = document.createElement('div');
      editDiv.id = 'editDiv';


      const editSVG = new Image();
      editSVG.src = editIcon;
      editSVG.classList.add('svgToDo');
      editSVG.classList.add('editSVG');

      //EDIT BOX DECLARATION
      // ------------------------------------
      let editBox = document.createElement('div');
      editBox.classList.add('editBox');

      let editBoxTop = document.createElement('div');
      editBoxTop.id = 'editBoxTop';

      let editBoxTitle = document.createElement('div');
      editBoxTitle.innerText = 'Editing...'
      let editBoxClose = document.createElement('div');
      editBoxClose.id = 'closeAddTaskWindow';
      editBoxClose.innerText = 'X';

      editBoxTop.appendChild(editBoxTitle);
      editBoxTop.appendChild(editBoxClose);


      let editBoxBottom = document.createElement('div');
      editBoxBottom.id = 'addTaskContent';

      editBox.appendChild(editBoxTop);
      editBox.appendChild(editBoxBottom);


      // Copied form start

 // form

 const formWrapper = document.createElement('form');

 formWrapper.id = 'formID';

 const priorityDropdown = document.createElement('select');
 priorityDropdown.id = 'priority'; 

 const option1 = document.createElement('option');
 option1.textContent = 'Low'
 option1.value = 'low';
 const option2 = document.createElement('option');
 option2.textContent = 'Medium';
 option2.value = 'medium';
 const option3 = document.createElement('option');
 option3.textContent = 'High';
 option3.value = 'high';

//  jsonObject.itemNumber, jsonObject.title, jsonObject.description, jsonObject.dueDate,jsonObject.priority,jsonObject.attachedNotes, jsonObject.page);
 
     // Create an input element for Task Name
     let TN = document.createElement("input");
     TN.id = 'TN';
     TN.setAttribute("type", "text");
     TN.setAttribute("value", jsonObject.title);
     TN.setAttribute("name", "TaskName");
     TN.setAttribute("placeholder", "Task Name");
     TN.setAttribute("maxlength", "15");
  
      // Create an input element for date of completion
      let DOC = document.createElement("input");
      DOC.id = 'DOC';
      DOC.setAttribute("type", "date");
      DOC.setAttribute('value', jsonObject.dueDate);
      DOC.setAttribute("name", "doc");
      DOC.setAttribute("placeholder", "DOC");
  
      // Create an input element for details
      let details = document.createElement("input");
      details.id = 'details';
      details.setAttribute("type", "text");
      details.setAttribute("value", jsonObject.description)
      details.setAttribute("name", "details");
      details.setAttribute("placeholder", "Details");

      


      let br = document.createElement("br"); 

      // create a submit button
      let s = document.createElement("input");
      s.id = 's';
              // SUBMIT HERE IS WHAT CAUSES THE PAGE RELOAD, CAN DEAL WITH THAT LATE
      s.setAttribute("type", "button");
      s.setAttribute("value", "Submit");


      s.addEventListener('click', () => {
        if (boxesFilled(TN, DOC, details)) {
          div.remove();
          editBox.remove();

          localStorage.setItem(this.getItemNumber(), JSON.stringify(new todoItem(this.itemNumber, TN.value, details.value, DOC.value, priorityDropdown.value, "", false, this.getPage() )));
          closeDiv.click()
          let jsonObject = JSON.parse(localStorage.getItem(this.itemNumber));
          let nextEntry = new todoItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description, jsonObject.dueDate,jsonObject.priority,jsonObject.attachedNotes, jsonObject.page);
          contentDiv.appendChild(nextEntry.returnDiv(contentDiv));
      } else {
          alert("please fill all boxes before submitting");
      }

function boxesFilled(titleName, details) {
if (titleName.value.length == 0 || details.value.length == 0) {
  return false;
}
return true;
} 
      })





          
      
      
      // Append the full name input to the form
      formWrapper.appendChild(TN); 
      
      // Inserting a line break
      formWrapper.appendChild(br.cloneNode()); 
      // Inserting a line break
      formWrapper.appendChild(br.cloneNode()); 

      // Append the details to the formWrapper
      formWrapper.appendChild(details); 
      formWrapper.appendChild(br.cloneNode());

      // Inserting a line break
      formWrapper.appendChild(br.cloneNode()); 

      const dateExplainer = document.createElement('div');
      dateExplainer.classList.add('whitetext');
      dateExplainer.textContent = 'Choose the date of completion:'

      formWrapper.appendChild(dateExplainer);
      
      // Append the DOB to the formWrapper
      formWrapper.appendChild(DOC); 
      formWrapper.appendChild(br.cloneNode()); 
       
      
      


      priorityDropdown.appendChild(option1);
      priorityDropdown.appendChild(option2);
      priorityDropdown.appendChild(option3);

      formWrapper.appendChild(priorityDropdown);

      // Append the submit button to the formWrapper
      formWrapper.appendChild(s); 
      



  
  editBoxBottom.appendChild(formWrapper);

  // editDiv.appendChild(divTitle);
  // editDiv.appendChild(divContent)

      // Copied form finished

      //-------------------------------------

      editSVG.addEventListener('click', () => {
        div.parentElement.parentElement.parentElement.parentElement.appendChild(editBox);
        
        
      })

      editBoxClose.addEventListener('click', function() {
        editBox.remove();
    })

      //deleteDiv
      const deleteDiv = document.createElement('div');
      deleteDiv.id = 'deleteDiv';

      const deleteSVG = new Image();
      deleteSVG.src = deleteIcon;
      deleteSVG.classList.add('svgToDo');
      deleteSVG.classList.add('deleteSVG');



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

  
      top.appendChild(left);
      top.appendChild(right)
      // div.appendChild(left);
      // div.appendChild(right);
      div.appendChild(top);
      div.appendChild(bottom);

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