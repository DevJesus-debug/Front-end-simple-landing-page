const links = document.querySelectorAll(".links-cont .drop-down")
const nav = document.querySelector(".mobile-menu-wrap")
const dropArrow = document.querySelectorAll(".drop-down .caret")
const hamburger = document.querySelector(".hamburger")

links.forEach(link => {
    link.addEventListener("click",()=>{
        if(link.classList.contains("active-drop")){
            link.classList.remove("active-drop")
        }else{
            links.forEach(link=>{link.classList.remove("active-drop")})
            link.classList.add("active-drop")
        }
    })
});

hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("active-nav");
    hamburger.classList.toggle("active-hamburger")
    links.forEach(link=>{link.classList.remove("active-drop")})
})