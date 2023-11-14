

export default function todayMain() {
    const todayMain = document.createElement('div');
    todayMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "This is the today main"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "Where the today main is at home";

    todayMain.appendChild(main_text_1);
    todayMain.appendChild(main_text_2);
    return todayMain;
}