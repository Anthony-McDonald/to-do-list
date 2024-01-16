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

    title.innerText = 'Home';

    title.id = 'subTitle';

    const contentDiv = document.createElement('div');

    // constructor for todoitem:(itemNumber, title, description, dueDate, priority, attachedNotes, checked, page) 

    // const exampleToDo = new todoItem(1,'brush teeth', 'with toothpaste', '15/06/2024', 'medium', "",false, "home");
    addNewToDo.addEventListener('click', function() {
        weekMain.appendChild(showTaskForm(contentDiv, "week"));
        
        
    });

    // contentDiv.appendChild(exampleToDo.returnDiv());
    // contentDiv.appendChild(exampleToDo2.returnDiv());
    let idsInStorage = localStorage.getItem("tItemID");
    for (let i = -1; i < parseInt(idsInStorage); i++) {
        console.log("entry")
        
        let jsonObject = JSON.parse(localStorage.getItem(i + 1))
        if (jsonObject != null && jsonObject.page == "week") {
            console.log(jsonObject);
            let nextEntry = new todoItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description, jsonObject.dueDate,jsonObject.priority,jsonObject.attachedNotes,jsonObject.checked, jsonObject.page);
            contentDiv.appendChild(nextEntry.returnDiv());
        }

    };

    // weekMain.appendChild(exampleToDo.returnDiv());
    // console.log(exampleToDo);
    titleDiv.appendChild(title);
    titleDiv.appendChild(addNewToDo);

    weekMain.appendChild(titleDiv);
    weekMain.appendChild(contentDiv);

    return weekMain;
}