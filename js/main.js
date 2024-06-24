let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll(".header__list-item");

window.onscroll=()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
})}


//menu 

const menuIconBtn = document.getElementById("menu");
const navigationList = document.getElementById("navigation");


menuIconBtn.addEventListener("click", ()=> {
    navigationList.classList.toggle("active");
    menuIconBtn.classList.toggle("active")
    
})

