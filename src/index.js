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
  //Header right
    const dropdown = document.createElement('button');
    const moreSVG = new Image();
    moreSVG.src = moreIcon;
    moreSVG.classList.add('svg');

    dropdown.appendChild(moreSVG);


    headerLeft.appendChild(headerText);
    headerLeft.appendChild(noteSVG);

    header.appendChild(headerLeft);
    header.appendChild(dropdown);
    // Main elements
    const main = document.createElement('div');
    main.classList.add("main");
//    element.classList.add("test")


//   // Add the image to our existing div.

//   const myIcon = new Image();

//   myIcon.src = Icon;


//   element.appendChild(myIcon);

element.appendChild(header);
element.appendChild(main);

   return element;
 }

 document.body.appendChild(component());


