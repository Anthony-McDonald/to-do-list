import todoItem from "./todoItem";
import showTaskForm from "./addTask";

export default function homeMain() {
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

    // const exampleToDo = new todoItem(1, 'brush teeth', 'with toothpaste', '15/06/2024', 'medium', null, true,);
    // const exampleToDo2 = new todoItem(2, 'brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);
    // const exampleToDo3 = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);
    // const exampleToDo4 = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);
    addNewToDo.addEventListener('click', function() {
        homeMain.appendChild(showTaskForm(contentDiv));
        
        
    });

    // contentDiv.appendChild(exampleToDo.returnDiv());
    // contentDiv.appendChild(exampleToDo2.returnDiv());
    let idsInStorage = localStorage.getItem("tItemID");
    for (let i = -1; i < parseInt(idsInStorage); i++) {
        console.log("entry")
        
        let jsonObject = JSON.parse(localStorage.getItem(i + 1))
        if (jsonObject != null) {
            console.log(jsonObject);
            let nextEntry = new todoItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description, jsonObject.dueDate,jsonObject.priority,jsonObject.attachedNotes);
            contentDiv.appendChild(nextEntry.returnDiv());
        }

    };


    titleDiv.appendChild(title);
    titleDiv.appendChild(addNewToDo);

    homeMain.appendChild(titleDiv);
    homeMain.appendChild(contentDiv);

    return homeMain;
}
