export default function showTaskForm() {
    console.log('task form being shown');

    const divToShow = document.createElement('div');
    divToShow.id = 'addTaskForm';

    const divTitle = document.createElement('div');

    divTitle.id = 'addTaskTitleBar';

    divTitle.textContent = 'Please fill out the information below'
    const divContent = document.createElement('div');
    divContent.id = 'addTaskContent';

   // form

   const formWrapper = document.createElement('form');

   const priorityDropdown = document.createElement('select');

   const option1 = document.createElement('option');
   option1.textContent = 'Low'
   option1.value = 'low';
   const option2 = document.createElement('option');
   option2.textContent = 'Medium';
   option2.value = 'medium';
   const option3 = document.createElement('option');
   option3.textContent = 'High';
   option3.value = 'high';
   const submitButton = document.createElement('input');
   submitButton.type = 'submit';
   
       // Create an input element for Task Name
       let FN = document.createElement("input");
       FN.setAttribute("type", "text");
       FN.setAttribute("name", "TaskName");
       FN.setAttribute("placeholder", "Task Name");
    
        // Create an input element for date of birth
        let DOC = document.createElement("input");
        DOC.setAttribute("type", "date");
        DOC.setAttribute("name", "doc");
        DOC.setAttribute("placeholder", "DOC");
    
        // Create an input element for emailID
        let details = document.createElement("input");
        details.setAttribute("type", "text");
        details.setAttribute("name", "details");
        details.setAttribute("placeholder", "Details");
    
         // Create an input element for password
         let PWD = document.createElement("input");
         PWD.setAttribute("type", "password");
         PWD.setAttribute("name", "password");
         PWD.setAttribute("placeholder", "Password");
    
          // Create an input element for retype-password
          let RPWD = document.createElement("input");
          RPWD.setAttribute("type", "password");
          RPWD.setAttribute("name", "reTypePassword");
          RPWD.setAttribute("placeholder", "ReEnter Password");


          let br = document.createElement("br"); 
    
                   // create a submit button
                   let s = document.createElement("input");
                   s.setAttribute("type", "submit");
                   s.setAttribute("value", "Submit");
                    
                   // Append the full name input to the form
                   formWrapper.appendChild(FN); 
                    
                   // Inserting a line break
                   formWrapper.appendChild(br.cloneNode()); 
                    
                   // Append the DOB to the formWrapper
                   formWrapper.appendChild(DOC); 
                   formWrapper.appendChild(br.cloneNode()); 
                    
                   // Append the emailID to the formWrapper
                   formWrapper.appendChild(details); 
                   formWrapper.appendChild(br.cloneNode()); 
                    
                   // Append the Password to the formWrapper
                   formWrapper.appendChild(PWD); 
                   formWrapper.appendChild(br.cloneNode()); 
                    
                   // Append the ReEnterPassword to the formWrapper
                   formWrapper.appendChild(RPWD); 
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