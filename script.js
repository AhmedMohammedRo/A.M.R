const menu = document.getElementById("menu");
const actiion = document.getElementById("action");

menu.addEventListener("click", ()=>{
    hundleMenu();
})


function hundleMenu(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}