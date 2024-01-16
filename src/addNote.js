import noteItem from "./noteItem";

export default function showNoteForm(contentDiv, page) {
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
        s.setAttribute("type", "button");
        s.setAttribute("value", "Submit");

        s.addEventListener("click", submitHandler);
        function submitHandler() {
            if (boxesFilled(TN, details)) {

                // localStorage.setItem("itemID", localStorage.getItem("itemID") + "testing");
                if (localStorage.getItem("tItemID") == null) {
                    console.log("no item with ID itemID, creating");
                    localStorage.setItem("tItemID", "0" );
                } else {
                    console.log("item present, incrementing");
                    localStorage.setItem("tItemID", parseInt(localStorage.getItem("tItemID")) + 1);
                    // localStorage.removeItem("tItemID");

                }
                let lastEntry = localStorage.getItem("tItemID");
                console.log("page is equal to " + page);
                localStorage.setItem(localStorage.getItem("tItemID"), JSON.stringify(new noteItem(localStorage.getItem("tItemID"), TN.value, details.value)));
                closeAddNote.click()
                let jsonObject = JSON.parse(localStorage.getItem(lastEntry))
                console.log(jsonObject);
                let nextEntry = new noteItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description);
                console.log(nextEntry);
                contentDiv.appendChild(nextEntry.returnDiv());

                


            } else {
                alert("please fill all boxes before submitting");
            }
        }

        function boxesFilled(titleName, details) {
            if (titleName.value.length == 0 || details.value.length == 0) {
                return false;
            }
            return true;
        }
        
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