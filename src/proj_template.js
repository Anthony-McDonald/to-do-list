import todoItem from "./todoItem";
import showTaskForm from "./addTask";

export default function projectMain() {
    const projectMain = document.createElement('div');
    projectMain.classList.add("main");
    
    const titleDiv = document.createElement('div');
    titleDiv.id = 'subpageTitleBar';

    const addNewToDo = document.createElement('button');
    addNewToDo.innerText = 'Add a Task'
    addNewToDo.id = 'addTaskButton';

    const title = document.createElement('h1');

    title.innerText = 'Project';

    title.id = 'subTitle';


    const contentDiv = document.createElement('div');
    contentDiv.id = "projContentDiv";

    // constructor for todoitem:(itemNumber, title, description, dueDate, priority, attachedNotes, checked, page) 


    const exampleToDo = new todoItem(1,'brush teeth', 'with toothpaste', '15/06/2024', 'medium', "",false, "project");

// function projectTagCreator() {
//     let projectTag = document.getElementById('subTitle').innerText;
//     console.log(projectTag);
//     return projectTag;
// }

    addNewToDo.addEventListener('click', function() {
        projectMain.appendChild(showTaskForm(contentDiv, "project"));
        
        
    });

    contentDiv.appendChild(exampleToDo.returnDiv());
    // contentDiv.appendChild(exampleToDo2.returnDiv());
    let idsInStorage = localStorage.getItem("tItemID");
    for (let i = -1; i < parseInt(idsInStorage); i++) {
        
        let jsonObject = JSON.parse(localStorage.getItem(i + 1))
        if (jsonObject != null && jsonObject.page == "project") {
            let nextEntry = new todoItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description, jsonObject.dueDate,jsonObject.priority,jsonObject.attachedNotes,jsonObject.checked, jsonObject.page);
            contentDiv.appendChild(nextEntry.returnDiv(contentDiv));
        }

    };

    // projectMain.appendChild(exampleToDo.returnDiv());
    // console.log(exampleToDo);
    titleDiv.appendChild(title);
    titleDiv.appendChild(addNewToDo);

    projectMain.appendChild(titleDiv);
    projectMain.appendChild(contentDiv);


    return projectMain;

}

