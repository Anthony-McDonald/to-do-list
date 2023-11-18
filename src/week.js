// export default function weekMain() {
//     const weekMain = document.createElement('div');
//     weekMain.classList.add("main");
//     const main_text_1 = document.createElement('h3');
//     main_text_1.textContent = "This is the week main"
//     const main_text_2 = document.createElement('h3');
//     main_text_2.textContent = "Where the week main is at week";

//     weekMain.appendChild(main_text_1);
//     weekMain.appendChild(main_text_2);
//     return weekMain;
// }

import todoItem from "./todoItem";
import showTaskForm from "./addTask";

export default function weekMain() {
    const weekMain = document.createElement('div');
    weekMain.classList.add("main");
    
    const titleDiv = document.createElement('div');
    titleDiv.id = 'subpageTitleBar';

    const addNewToDo = document.createElement('button');
    addNewToDo.innerText = 'Add a Task'
    addNewToDo.id = 'addTaskButton';
    



    const title = document.createElement('h1');

    title.innerText = 'Week';

    title.id = 'subTitle';

    const contentDiv = document.createElement('div');

    const exampleToDo = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'medium', null, true,);
    const exampleToDo2 = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);
    const exampleToDo3 = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);
    const exampleToDo4 = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);

    addNewToDo.addEventListener('click', function() {
        weekMain.appendChild(showTaskForm());

        let form = document.getElementById('formID');
        form.onsubmit = function(e) {
            let title = document.getElementById('TN').value;
            let details = document.getElementById('details').value;
            let doc = document.getElementById('DOC').value;
            let priority = document.getElementById('priority').value;

            if (!title == "" && !details == "" && !doc == "") {
                contentDiv.appendChild(new todoItem(title,details,doc,priority,"",false).returnDiv());
            } else {
                alert('please fill all fields to generate a task');
            }
        }
    });

    contentDiv.appendChild(exampleToDo.returnDiv());
    contentDiv.appendChild(exampleToDo2.returnDiv());

    titleDiv.appendChild(title);
    titleDiv.appendChild(addNewToDo);

    weekMain.appendChild(titleDiv);
    weekMain.appendChild(contentDiv);

    return weekMain;
}

