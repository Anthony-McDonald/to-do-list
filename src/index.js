import _ from 'lodash';
import './style.css'
import journalIcon from './assets/notebook.svg';
import moreIcon from './assets/more.svg';
import homeIcon from './assets/home.svg';
import todayIcon from './assets/calendar.svg';
import weekIcon from './assets/calendar-range.svg';
import projIcon from './assets/proj.svg';
import notesIcon from './assets/notes.svg';
import homeMain from './home.js';
import addProjFunction from './addProj.js'
import todayMain from './today.js';
import weekMain from './week.js';
import projectMain from './proj_template.js';
import noteMain from './note.js';


// import Data from './data.xml';
// import Notes from './data.csv';
// import yaml from './data.yaml'

// console.log(yaml.title);    for example


 function component() {

  window.onload = function () {
    if (! localStorage.justOnce) {
        localStorage.setItem("justOnce", "true");
        window.location.reload();
    }
}

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
    dropdown.classList.add('hide');


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

    // mainbox declaration
    const main = document.createElement('div');
    main.classList.add("main");
    main.id = 'mainID';

    mainholder.appendChild(main);

    const showMore = document.createElement('div');
    showMore.classList.add('showMore');
    showMore.classList.add('hide');
    showMore.id = 'showMore';

    // homebox

    const homeBox = document.createElement('div');
    homeBox.classList.add('sidebar1');
    homeBox.classList.add('sideoverwrite');
    homeBox.classList.add('clickedOn');

    const homeSVG = new Image();
    homeSVG.src = homeIcon;
    homeSVG.id = 'homeSVG';
    homeSVG.classList.add('svg');
    const homeText = document.createElement('h5');
    homeText.classList.add("sideText");
    homeText.innerHTML = 'Home'


    homeBox.appendChild(homeSVG);
    homeBox.appendChild(homeText);

    //todaybox

    const todayBox = document.createElement('div');
    todayBox.classList.add('sidebar1');
    todayBox.classList.add('sideoverwrite');

    const todaySVG = new Image();
    todaySVG.src = todayIcon;
    todaySVG.id = 'homeSVG';
    todaySVG.classList.add('svg');

    const todayText = document.createElement('h5');
    todayText.classList.add("sideText");
    todayText.innerHTML = 'Today'

    todayBox.appendChild(todaySVG);
    todayBox.appendChild(todayText);

    //weekbox
    const weekBox = document.createElement('div');
    weekBox.classList.add('sidebar1');
    weekBox.classList.add('sideoverwrite');

    const weekSVG = new Image();
    weekSVG.src = weekIcon;
    weekSVG.id = 'homeSVG';
    weekSVG.classList.add('svg');

    const weekText = document.createElement('h5');
    weekText.classList.add("sideText");
    
    weekText.innerHTML = 'Week'

    weekBox.appendChild(weekSVG);
    weekBox.appendChild(weekText);

    //projectbox
    const projectBox = document.createElement('div');
    projectBox.classList.add('sidebar1');
    projectBox.id = "projId";

    const projTitle = document.createElement('div');
    projTitle.classList.add('projTitle');

    const projTitleText = document.createElement('h5');
    projTitleText.innerText = 'Project';
    projTitleText.classList.add('sideText')

    const projContent = document.createElement('div');
    projContent.classList.add('projContent');


    projectBox.appendChild(projTitle);
    projectBox.appendChild(projContent);




    const proj1 = document.createElement('div');
    proj1.classList.add('proj');
    proj1.innerText = 'proj1';
    proj1.id = 'proj1'





    const addProj = document.createElement('div');
    addProj.classList.add('proj');
    addProj.innerText = '+ PROJECT';
    addProj.id = 'addProj';
  



    const projSVG = new Image();
    projSVG.src = projIcon;
    projSVG.id = 'homeSVG';
    projSVG.classList.add('svg');

    projTitle.appendChild(projSVG);
    projTitle.appendChild(projTitleText);

    
    projContent.appendChild(proj1);
    projContent.appendChild(addProj);


    const testElement = document.createElement('div');
    testElement.textContent = 'test'
    projContent.appendChild(testElement)

    if (localStorage.getItem('projID') == null) {
      localStorage.setItem('projID', 0);
    } 

    for (let i = 0; i < localStorage.getItem('projID'); i++) {
      let element = document.createElement('div');
      element.textContent = i;
      projContent.appendChild(element);
    }


    //notebox

    const noteBox = document.createElement('div');
    noteBox.classList.add('sidebar1');
    noteBox.classList.add('sideoverwrite');

    const noteBSVG = new Image();
    noteBSVG.src = notesIcon;
    noteBSVG.id = 'homeSVG';
    noteBSVG.classList.add('svg');

    const noteText = document.createElement('h5');
    noteText.classList.add("sideText");
    noteText.innerHTML = 'Notes'

    noteBox.appendChild(noteBSVG);
    noteBox.appendChild(noteText);



    //append boxes

    showMore.appendChild(homeBox);
    showMore.appendChild(todayBox);
    showMore.appendChild(weekBox);
    showMore.appendChild(projectBox);
    showMore.appendChild(noteBox);

// sidebar declaration
    const sidebar = document.createElement('sidebar');
    sidebar.classList.add('homesidebar');
    sidebar.classList.add('hide2');

// This is for the elements that show on narrow screen, phone etc.
    homeBox.addEventListener("click", function(event) {
      buttonHandler('home');
      sideColourChanger(todayBox, homeBox);
      sideColourChanger(weekBox, homeBox);
      sideColourChanger(noteBox, homeBox);
      sideColourChanger(sidebarTodayBox, sidebarHomeBox);
      sideColourChanger(sidebarWeekBox, sidebarHomeBox);
      sideColourChanger(sidebarNoteBox, sidebarHomeBox);
    }) ;
    todayBox.addEventListener("click", function(event) {
      sideColourChanger(homeBox, todayBox);
      sideColourChanger(weekBox, todayBox);
      sideColourChanger(noteBox, todayBox);
      sideColourChanger(sidebarHomeBox, sidebarTodayBox);
      sideColourChanger(sidebarWeekBox, sidebarTodayBox);
      sideColourChanger(sidebarNoteBox, sidebarTodayBox);
      buttonHandler('today');
    }) ;
    weekBox.addEventListener("click", function(event) {
      sideColourChanger(todayBox, weekBox);
      sideColourChanger(homeBox, weekBox);
      sideColourChanger(noteBox, weekBox);
      sideColourChanger(sidebarTodayBox, sidebarWeekBox);
      sideColourChanger(sidebarHomeBox, sidebarWeekBox);
      sideColourChanger(sidebarNoteBox, sidebarWeekBox);
      buttonHandler('week');
    }) ;
    noteBox.addEventListener("click", function(event) {
      sideColourChanger(todayBox, noteBox);
      sideColourChanger(weekBox, noteBox);
      sideColourChanger(homeBox, noteBox);
      sideColourChanger(sidebarTodayBox, sidebarNoteBox);
      sideColourChanger(sidebarWeekBox, sidebarNoteBox);
      sideColourChanger(sidebarHomeBox, sidebarNoteBox);
      buttonHandler('note');
    }) ;



// The buttons on the page are only working through the clones
// Add any handler code here;
    const sidebarHomeBox = homeBox.cloneNode(true);
    const sidebarTodayBox = todayBox.cloneNode(true);
    const sidebarWeekBox = weekBox.cloneNode(true);
    const sidebarProjectBox = projectBox.cloneNode(true);
    const sidebarNoteBox = noteBox.cloneNode(true);

    sidebarHomeBox.addEventListener("click", function(event) {
      sideColourChanger(sidebarTodayBox, sidebarHomeBox);
      sideColourChanger(sidebarWeekBox, sidebarHomeBox);
      sideColourChanger(sidebarNoteBox, sidebarHomeBox);
      buttonHandler('home');
    }) ;
    sidebarTodayBox.addEventListener("click", function(event) {
      sideColourChanger(sidebarHomeBox, sidebarTodayBox);
      sideColourChanger(sidebarWeekBox, sidebarTodayBox);
      sideColourChanger(sidebarNoteBox, sidebarTodayBox);
      sideColourChanger(homeBox, todayBox);
      sideColourChanger(weekBox, todayBox);
      sideColourChanger(noteBox, todayBox);
      
      buttonHandler('today');
    }) ;
    sidebarWeekBox.addEventListener("click", function(event) {
      sideColourChanger(sidebarTodayBox, sidebarWeekBox);
      sideColourChanger(sidebarHomeBox, sidebarWeekBox);
      sideColourChanger(sidebarNoteBox, sidebarWeekBox);
      sideColourChanger(todayBox, weekBox);
      sideColourChanger(homeBox, weekBox);
      sideColourChanger(noteBox, weekBox);
      buttonHandler('week');
    }) ;
    sidebarNoteBox.addEventListener("click", function(event) {
      sideColourChanger(sidebarTodayBox, sidebarNoteBox);
      sideColourChanger(sidebarWeekBox, sidebarNoteBox);
      sideColourChanger(sidebarHomeBox, sidebarNoteBox);
      sideColourChanger(todayBox, noteBox);
      sideColourChanger(weekBox, noteBox);
      sideColourChanger(homeBox, noteBox);
      buttonHandler('note');
    }) ;


    // sidebarProjectBox.addEventListener("click", function(event) {
    //   console.log("handle");
    // });


    function sideColourChanger(boxToRemove, boxToAdd) {
      boxToRemove.classList.remove("clickedOn");
      boxToAdd.classList.add("clickedOn");
    }
    
    sidebar.appendChild(sidebarHomeBox);
    sidebar.appendChild(sidebarTodayBox);
    sidebar.appendChild(sidebarWeekBox);
    sidebar.appendChild(sidebarProjectBox);
    sidebar.appendChild(sidebarNoteBox);

    mainholder.appendChild(sidebar);
    mainholder.appendChild(showMore);
    mainholder.appendChild(main);


 

    // Footer
    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.innerText = "Made by Anthony McDonald"


    element.appendChild(header);
    element.appendChild(mainholder);
    element.appendChild(footer);

    window.onload = function() {
      homeBox.click();
    }
    

   return element;
 }




 function buttonHandler(toSwitchTo) {
  clearMain();
  switch(toSwitchTo) {
      case 'home':
         document.querySelector('.mainholder').appendChild(homeMain());
          break;
      case 'today':
        document.querySelector('.mainholder').appendChild(todayMain());
          break;
      case "week":
        document.querySelector('.mainholder').appendChild(weekMain());
          break;
      case "note":
          document.querySelector('.mainholder').appendChild(noteMain());
          break;
  }

  document.querySelector('.wrapper').appendChild(genFooter());

  bindSidebars()

}


function clearMain() {
  document.querySelector(".main").remove();
  document.querySelector(".footer").remove();
}


function genFooter() {
  const footer = document.createElement('div');
  footer.classList.add("footer");
  footer.textContent = "Anthony McDonald - The Odin Project";


  return footer;
}

function bindSidebars() {
  document.getElementById('proj1').addEventListener("click", function(event) {
    console.log('handle proj1')
    }) ;
    document.getElementById('addProj').addEventListener("click", function(event) {
      console.log('handling addProj')
      document.querySelector('.mainholder').appendChild(homeMain());
      }) ;
}



 document.body.appendChild(component());




