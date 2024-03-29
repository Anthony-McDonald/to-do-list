import todoItem from "./todoItem";
import showTaskForm from "./addTask";

export default function homeMain() {
    if (localStorage.getItem('loadedOnce') == null) {
        localStorage.setItem('loadedOnce', true);
        location.reload();
    }
    const homeMain = document.createElement('div');
    homeMain.classList.add("main");
    
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

    const exampleToDo = new todoItem(1,'brush teeth', 'with toothpaste', '15/06/2024', 'medium', "",false, "home");



    addNewToDo.addEventListener('click', function() {
        homeMain.appendChild(showTaskForm(contentDiv, "home"));
        
        
    });

    contentDiv.appendChild(exampleToDo.returnDiv());
    // contentDiv.appendChild(exampleToDo2.returnDiv());
    let idsInStorage = localStorage.getItem("tItemID");
    for (let i = -1; i < parseInt(idsInStorage); i++) {
        
        let jsonObject = JSON.parse(localStorage.getItem(i))
        if (jsonObject != null && jsonObject.page == "home") {
            let nextEntry = new todoItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description, jsonObject.dueDate,jsonObject.priority,jsonObject.attachedNotes,jsonObject.checked, jsonObject.page);
            contentDiv.appendChild(nextEntry.returnDiv(contentDiv));
        }

    };

    // homeMain.appendChild(exampleToDo.returnDiv());
    // console.log(exampleToDo);
    titleDiv.appendChild(title);
    titleDiv.appendChild(addNewToDo);

    homeMain.appendChild(titleDiv);
    homeMain.appendChild(contentDiv);


    return homeMain;

}

