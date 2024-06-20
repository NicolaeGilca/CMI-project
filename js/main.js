let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll(".header__list-item");

window.onscroll=()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
})}
