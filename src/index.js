import _ from 'lodash';
import './style.css'
import journalIcon from './assets/notebook.svg';
import moreIcon from './assets/more.svg'
// import Data from './data.xml';
// import Notes from './data.csv';
// import yaml from './data.yaml'

// console.log(yaml.title);    for example


 function component() {
  // Define wrapper div
   const element = document.createElement('div');
   element.classList.add("wrapper");
  // Header elements
  // Header left
    const header = document.createElement('div');
    header.classList.add("header");

    const headerLeft = document.createElement('div');
    headerLeft.classList.add('headerleft')

    const headerText = document.createElement('h3')
    headerText.classList.add('headertext');
    headerText.innerText = "// TO-DO List //"

    const noteSVG = new Image();
    noteSVG.src = journalIcon;
    noteSVG.classList.add('svg');

    headerLeft.appendChild(headerText);
    headerLeft.appendChild(noteSVG);
  //Header right
    const dropdown = document.createElement('button');
    dropdown.classList.add("dropbutton");
    dropdown
    const moreSVG = new Image();
    moreSVG.src = moreIcon;
    moreSVG.classList.add('svg');

    dropdown.appendChild(moreSVG);

  // Dropdown functionality
  dropdown.addEventListener("click", function() {
    alert("dropdown pressed");
  });

  // Append to main header
    header.appendChild(headerLeft);
    header.appendChild(dropdown);
    // Main elements
    const mainholder = document.createElement('div');
    mainholder.classList.add("mainholder");
    const main = document.createElement('div');
    main.classList.add("main");
    mainholder.appendChild(main);
    main.innerHTML = "test"

    // Footer
    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.innerText = "Made by Anthony McDonald"


//    element.classList.add("test")


//   // Add the image to our existing div.

//   const myIcon = new Image();

//   myIcon.src = Icon;


//   element.appendChild(myIcon);

element.appendChild(header);
element.appendChild(mainholder);
element.appendChild(footer);

   return element;
 }

 document.body.appendChild(component());

