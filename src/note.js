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

    const exampleToDo = new noteItem('brush teeth', 'with toothpaste toothpaste and more toothpaste really just all of the toothpaste');
    const exampleToDo2 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo3 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo4 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToD5 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo6 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo7 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo8 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo9 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo10 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo11 = new noteItem('brush teeth', 'with toothpaste');
    const exampleToDo12 = new noteItem('brush teeth', 'with toothpaste');

    addNewNote.addEventListener('click', function() {
        noteMain.appendChild(showNoteForm());

        let form = document.getElementById('formID');
        form.onsubmit = function(e) {
            let title = document.getElementById('TN').value;
            let details = document.getElementById('details').value;

            if (!title == "" && !details == "") {
                contentDiv.appendChild(new noteItem(title,details).returnDiv());
            } else {
                alert('please fill all fields to generate a task');
            }
        }
    });




    contentDiv.appendChild(exampleToDo.returnDiv());
    contentDiv.appendChild(exampleToDo2.returnDiv());
    contentDiv.appendChild(exampleToDo3.returnDiv());
    contentDiv.appendChild(exampleToDo4.returnDiv());
    contentDiv.appendChild(exampleToD5.returnDiv());
    contentDiv.appendChild(exampleToDo6.returnDiv());
    contentDiv.appendChild(exampleToDo7.returnDiv());
    contentDiv.appendChild(exampleToDo8.returnDiv());
    contentDiv.appendChild(exampleToDo9.returnDiv());
    contentDiv.appendChild(exampleToDo10.returnDiv());
    contentDiv.appendChild(exampleToDo11.returnDiv());
    contentDiv.appendChild(exampleToDo12.returnDiv());

    titleDiv.appendChild(title);
    titleDiv.appendChild(addNewNote);

    noteMain.appendChild(titleDiv);
    noteMain.appendChild(contentDiv);

    return noteMain;
}