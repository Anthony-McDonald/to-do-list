export default function noteMain() {
    const noteMain = document.createElement('div');
    noteMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "This is the note main"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "Where the note main is at home";

    noteMain.appendChild(main_text_1);
    noteMain.appendChild(main_text_2);
    return noteMain;
}