import noteItem from "./noteItem";
import showNoteForm from "./addNote";

export default function noteMain() {
    const noteMain = document.createElement('div');
    noteMain.classList.add("main");
    
    const titleDiv = document.createElement('div');
    titleDiv.id = 'subpageTitleBar';

    const addNewNote = document.createElement('button');
    addNewNote.innerText = 'Add a Note'
    addNewNote.id = 'addTaskButton';
    
    const title = document.createElement('h1');

    title.innerText = 'Notes';

    title.id = 'subTitle';

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('notemain');

    const exampleToDo = new noteItem(1, 'brush teeth', 'with toothpaste toothpaste and more toothpaste really just all of the toothpaste');

    addNewNote.addEventListener('click', function() {
        noteMain.appendChild(showNoteForm(contentDiv, "notes"));

        // let form = document.getElementById('formID');
        // form.onsubmit = function(e) {
        //     let title = document.getElementById('TN').value;
        //     let details = document.getElementById('details').value;

        //     // if (!title == "" && !details == "") {
        //     //     contentDiv.appendChild(new noteItem(title,details).returnDiv());
        //     // } else {
        //     //     alert('please fill all fields to generate a task');
        //     // }
        // }
    });

    
    let idsInStorage = localStorage.getItem("tItemID");
    for (let i = -1; i < parseInt(idsInStorage); i++) {
        console.log("entry")
        
        let jsonObject = JSON.parse(localStorage.getItem(i + 1))
        if (jsonObject != null && jsonObject.page == null) {
            console.log(jsonObject);
            let nextEntry = new noteItem(jsonObject.itemNumber, jsonObject.title, jsonObject.description);
            contentDiv.appendChild(nextEntry.returnDiv());
        }

    };
    




    contentDiv.appendChild(exampleToDo.returnDiv());


    titleDiv.appendChild(title);
    titleDiv.appendChild(addNewNote);

    noteMain.appendChild(titleDiv);
    noteMain.appendChild(contentDiv);

    return noteMain;
}