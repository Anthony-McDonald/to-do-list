export default function showNoteForm() {
    console.log('task form being shown');

    const divToShow = document.createElement('div');
    divToShow.id = 'addTaskForm';

    const divTitle = document.createElement('div');

    divTitle.id = 'addTaskTitleBar';

    divTitle.textContent = 'Please fill out the information below'

    const closeAddNote = document.createElement('div');
    closeAddNote.id = 'closeAddTaskWindow';
    closeAddNote.textContent = 'X';
    divTitle.appendChild(closeAddNote);

    closeAddNote.addEventListener('click', function() {
        divToShow.remove();
    })


    const divContent = document.createElement('div');
    divContent.id = 'addTaskContent';

   // form

   const formWrapper = document.createElement('form');

   formWrapper.id = 'formID';
   
       // Create an input element for Note Name
       let TN = document.createElement("input");
       TN.id = 'TN';
       TN.setAttribute("type", "text");
       TN.setAttribute("name", "NoteName");
       TN.setAttribute("placeholder", "Note Name");
       TN.setAttribute("maxlength", "15");

    
        // Create an input element for details
        let details = document.createElement("input");
        details.id = 'details';
        details.setAttribute("type", "text");
        details.setAttribute("name", "details");
        details.setAttribute("placeholder", "Details");


        let br = document.createElement("br"); 

        // create a submit button
        let s = document.createElement("input");
        s.id = 's';
                // SUBMIT HERE IS WHAT CAUSES THE PAGE RELOAD, CAN DEAL WITH THAT LATE
        s.setAttribute("type", "submit");
        s.setAttribute("value", "Submit");
        
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
        



    
    divContent.appendChild(formWrapper);

    divToShow.appendChild(divTitle);
    divToShow.appendChild(divContent);


    return divToShow;
}