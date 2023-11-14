export default function projectMain() {
    const projectMain = document.createElement('div');
    projectMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "This is the project main"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "Where the project main is at home";

    projectMain.appendChild(main_text_1);
    projectMain.appendChild(main_text_2);
    return projectMain;
}