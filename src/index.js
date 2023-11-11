import _ from 'lodash';
import './style.css'
import journalIcon from './assets/notebook.svg';
import moreIcon from './assets/more.svg';
import homeIcon from './assets/home.svg';
import todayIcon from './assets/calendar.svg';
import weekIcon from './assets/calendar-range.svg';
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
    dropdown.id = 'dropid'
    dropdown.classList.add("dropbutton");


    const moreSVG = new Image();
    moreSVG.src = moreIcon;
    moreSVG.classList.add('svg');

    dropdown.appendChild(moreSVG);

  // Dropdown functionality
  let firstPress = true;
  dropdown.addEventListener("click", function() {


    if (showMore.style.display === 'none') {
      showMore.style.display = 'flex';
    } else {
      showMore.style.display = 'none';

      if (firstPress) {
        showMore.style.display = 'flex';
        firstPress = false;
      }

      
    }
  });


  // Append to main header
    header.appendChild(headerLeft);
    header.appendChild(dropdown);
    // Main elements
    const mainholder = document.createElement('div');
    mainholder.classList.add("mainholder");

    const showMore = document.createElement('div');
    showMore.classList.add('showMore');
    showMore.id = 'showMore';


    const homeBox = document.createElement('div');
    homeBox.classList.add('sidebar1');
    const homeSVG = new Image();
    homeSVG.src = homeIcon;
    homeBox.id = 'homeBox';
    homeSVG.id = 'homeSVG';
    homeSVG.classList.add('svg');
    const homeText = document.createElement('h5');
    homeText.classList.add("sidetext");
    homeText.innerHTML = 'homebox'


    homeBox.appendChild(homeSVG);
    homeBox.appendChild(homeText)

    const todayBox = document.createElement('div');
    todayBox.classList.add('sidebar1');
    todayBox.innerText = 'todaybox';
    const weekBox = document.createElement('div');
    weekBox.classList.add('sidebar1');
    weekBox.innerText = 'weekbox';

    const projectBox = document.createElement('div');
    projectBox.classList.add('sidebar1');
    projectBox.innerText = 'projectbox'

    const proj1 = document.createElement('div');
    proj1.classList.add('proj');
    proj1.innerText = 'proj1';

    const proj2 = document.createElement('div');
    proj2.classList.add('proj');
    proj2.innerText = 'proj2';

    const proj3 = document.createElement('div');
    proj3.classList.add('proj');
    proj3.innerText = 'proj3';

    projectBox.appendChild(proj1);
    projectBox.appendChild(proj2);
    projectBox.appendChild(proj3);

    const noteBox = document.createElement('div');
    noteBox.classList.add('sidebar1');
    noteBox.innerText = 'notebox';

    showMore.appendChild(homeBox);
    showMore.appendChild(todayBox);
    showMore.appendChild(weekBox);
    showMore.appendChild(projectBox);
    showMore.appendChild(noteBox);


    const main = document.createElement('div');
    main.classList.add("main");
    mainholder.appendChild(showMore);
    mainholder.appendChild(main);
    main.innerHTML = "test TEST tEsTeR"

    // Footer
    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.innerText = "Made by Anthony McDonald"


    element.appendChild(header);
    element.appendChild(mainholder);
    element.appendChild(footer);

   return element;
 }

 document.body.appendChild(component());




