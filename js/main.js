let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll(".header__list-item");

window.onscroll=()=> {
    sections.forEach(sec => {
        menuIconBtn.classList.remove("active");
        navigationList.classList.remove("active");
})}


//menu 

const menuIconBtn = document.getElementById("menu");
const navigationList = document.getElementById("navigation");


menuIconBtn.addEventListener("click", ()=> {
  
    navigationList.classList.toggle("active");
    menuIconBtn.classList.toggle("active")

    // if(menuIconBtn.classList.contains("active")) {
    //     document.body.style.overflowY = "hidden"
        
    // }else {
    //      document.body.style.overflowY = "scroll"
    // }
   
    
})

