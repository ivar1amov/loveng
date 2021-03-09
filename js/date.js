const work = document.querySelector('#work-text');
let now = new Date();
let day = now.getDay();
let h = now.getHours();

if (day == 6 || day == 7 ) {
    work.textContent = "Отдыхаем";
} else if (day <= 5 && h >= 8 && h <= 21) {
    work.textContent = "Работаем";
} else {
    work.textContent = "Отдыхаем";
}