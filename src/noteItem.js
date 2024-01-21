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

