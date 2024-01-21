import todoItem from "./todoItem";

export default function showTaskForm(contentDiv, page) {

    const divToShow = document.createElement('div');
    divToShow.id = 'addTaskForm';

    const divTitle = document.createElement('div');

    divTitle.id = 'addTaskTitleBar';

    divTitle.textContent = 'Please fill out the information below'

    const closeAddTask = document.createElement('div');
    closeAddTask.id = 'closeAddTaskWindow';
    closeAddTask.textContent = 'X';
    divTitle.appendChild(closeAddTask);

    closeAddTask.addEventListener('click', function() {
        divToShow.remove();
    })
    


    const divContent = document.createElement('div');
    divContent.id = 'addTaskContent';

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
   
       // Create an input element for Task Name
       let TN = document.createElement("input");
       TN.id = 'TN';
       TN.setAttribute("type", "text");
       TN.setAttribute("name", "TaskName");
       TN.setAttribute("placeholder", "Task Name");
       TN.setAttribute("maxlength", "15");
    
        // Create an input element for date of completion
        let DOC = document.createElement("input");
        DOC.id = 'DOC';
        DOC.setAttribute("type", "date");
        DOC.setAttribute("name", "doc");
        DOC.setAttribute("placeholder", "DOC");
    
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

            if (boxesFilled(TN, DOC, details)) {

                // localStorage.setItem("itemID", localStorage.getItem("itemID") + "testing");
                if (localStorage.getItem("tItemID") == null) {
                    localStorage.setItem("tItemID", "0" );
                } else {
                    localStorage.setItem("tItemID", parseInt(localStorage.getItem("tItemID")) + 1);
                    // localStorage.removeItem("tItemID");

                }
                let lastEntry = localStorage.getItem("tItemID");
                localStorage.setItem(localStorage.getItem("tItemID"), JSON.stringify(new todoItem(localStorage.getItem("tItemID"), TN.value, details.value, DOC.value, priorityDropdown.value, "", false, page )));
                closeAddTask.click()
                let jsonObject = JSON.parse(localStorage.getItem(lastEntry))
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
        



    
    divContent.appendChild(formWrapper);

    divToShow.appendChild(divTitle);
    divToShow.appendChild(divContent);


    return divToShow;
}