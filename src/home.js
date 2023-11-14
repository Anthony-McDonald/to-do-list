import todoItem from "./todoItem";

export default function homeMain() {
    const homeMain = document.createElement('div');
    homeMain.classList.add("main");
    
    const titleDiv = document.createElement('div');

    titleDiv.innerText = 'Home';

    titleDiv.id = 'subTitle';


    const title = document.createElement('h1');

    const contentDiv = document.createElement('div');

    const exampleToDo = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'medium', null, false,);
    const exampleToDo2 = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);
    const exampleToDo3 = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);
    const exampleToDo4 = new todoItem('brush teeth', 'with toothpaste', '15/06/2024', 'high', null, false,);

    contentDiv.appendChild(exampleToDo.returnDiv());
    contentDiv.appendChild(exampleToDo2.returnDiv());


    homeMain.appendChild(titleDiv);
    homeMain.appendChild(title);
    homeMain.appendChild(contentDiv);

    return homeMain;
}

