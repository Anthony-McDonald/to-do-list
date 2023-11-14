import todoItem from "./todoItem";

export default function homeMain() {
    const homeMain = document.createElement('div');
    homeMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "This is the home main"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "Where the main is at home";

    homeMain.appendChild(main_text_1);
    homeMain.appendChild(main_text_2);
    return homeMain;
}