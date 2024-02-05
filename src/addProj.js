import projRow from "./projRow"

export default function todayMain() {

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
       TN.setAttribute("placeholder", "Project Name");
       TN.setAttribute("maxlength", "15");

 


        let br = document.createElement("br"); 

        // create a submit button
        let s = document.createElement("input");
        s.id = 's';
                // SUBMIT HERE IS WHAT CAUSES THE PAGE RELOAD, CAN DEAL WITH THAT LATE
        s.setAttribute("type", "button");
        s.setAttribute("value", "Submit");

        s.addEventListener("click", submitHandler);
        function submitHandler() {
            if (boxesFilled(TN)) {

                // localStorage.setItem("itemID", localStorage.getItem("itemID") + "testing");
                if (localStorage.getItem("projID") == null) {
                    localStorage.setItem("projID", "0" );
                } else {
                    localStorage.setItem("projID", parseInt(localStorage.getItem("projID")) + 1);
                    // localStorage.removeItem("projID");

                }
                let lastEntry = localStorage.getItem("projID");
                localStorage.setItem(localStorage.getItem("projID") + "P", JSON.stringify(new projRow(localStorage.getItem("projID"), TN.value)));
                closeAddNote.click()
                location.reload();



            } else {
                alert("please fill all boxes before submitting");
            }
        }

        function boxesFilled(titleName) {
            if (titleName.value.length == 0) {
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


        // Inserting a line break
        formWrapper.appendChild(br.cloneNode()); 
        // Append the submit button to the formWrapper
        formWrapper.appendChild(s); 
        



    
    divContent.appendChild(formWrapper);

    divToShow.appendChild(divTitle);
    divToShow.appendChild(divContent);



    return divToShow;
}