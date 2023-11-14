export default function weekMain() {
    const weekMain = document.createElement('div');
    weekMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "This is the week main"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "Where the week main is at home";

    weekMain.appendChild(main_text_1);
    weekMain.appendChild(main_text_2);
    return weekMain;
}