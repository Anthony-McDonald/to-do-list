import editIcon from './assets/edit.svg';
import deleteIcon from './assets/delete.svg'
import showNoteForm from './addNote';

export default class noteItem {
    constructor(itemNumber, title, description) {
      this.itemNumber = itemNumber;
      this.title = title;
      this.description = description;
    }

    getTitle() {
    return this.title;
    }
  
    getDescription() {
    return this.description;
    }

    getItemNumber() {
      return this.itemNumber;
    }

    setTitle(title) {
        this.title = title;
      }
  
      setDescription(description) {
        this.description = description;
      }

    setItemNumber(itemNumber) {
      this.itemNumber = itemNumber;
    }

    returnDiv(contentDiv) {
      let jsonObject = JSON.parse(localStorage.getItem(this.getItemNumber()))
      const div = document.createElement('div');

      div.id = 'noteItem';

      const top = document.createElement('div');
      top.id = 'top';
      const bottom = document.createElement('div');
      bottom.id = 'bottom';
    

      //titleDiv
      const titleDiv = document.createElement('div');
      titleDiv.id = 'titleDiv';
      titleDiv.innerText = this.getTitle();

      //detailsDiv
      const detailsDiv = document.createElement('div');
      detailsDiv.id = 'noteDetailsDiv';
      detailsDiv.innerText = this.getDescription();

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

//  jsonObject.itemNumber, jsonObject.title, jsonObject.description, jsonObject.dueDate,jsonObject.priority,jsonObject.attachedNotes, jsonObject.page);
 
     // Create an input element for Task Name
     let TN = document.createElement("input");
     TN.id = 'TN';
     TN.setAttribute("type", "text");
     TN.setAttribute("value", jsonObject.title);
     TN.setAttribute("name", "TaskName");
     TN.setAttribute("placeholder", "Task Name");
     TN.setAttribute("maxlength", "15");
  
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



      editSVG.addEventListener('click', () => {
        div.parentElement.parentElement.parentElement.appendChild(editBox);
        
      })

      editBoxClose.addEventListener('click', () => {
        editBox.remove()
      })


      s.addEventListener('click', () => {
        if (boxesFilled(TN, details)) {
          div.remove();
          editBox.remove();

          localStorage.setItem(this.getItemNumber(), JSON.stringify(new noteItem(this.itemNumber, TN.value, details.value)));
          editBoxClose.click()
          let jsonObject = JSON.parse(localStorage.getItem(this.itemNumber));
          console.log(jsonObject);
          let nextEntry = new noteItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description);
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


      // Append the submit button to the formWrapper
      formWrapper.appendChild(s); 
      



  
  editBoxBottom.appendChild(formWrapper);

      //deleteDiv
      const deleteDiv = document.createElement('div');
      deleteDiv.id = 'deleteDiv';

      const deleteSVG = new Image();
      deleteSVG.src = deleteIcon;
      deleteSVG.classList.add('svgToDo');
      deleteSVG.classList.add('deleteSVG');

      deleteSVG.addEventListener('click', () => {
        localStorage.removeItem(this.getItemNumber());
        div.remove();
      });
      top.appendChild(titleDiv);

      top.appendChild(editDiv);
      top.appendChild(deleteDiv);
      top.appendChild(editSVG);
      top.appendChild(deleteSVG);
      bottom.appendChild(detailsDiv);

  
      div.appendChild(top);
      div.appendChild(bottom);

      return div;
  }
}

