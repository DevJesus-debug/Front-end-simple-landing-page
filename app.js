const links = document.querySelectorAll(".links-cont .drop-down")
const dropArrow = document.querySelectorAll(".drop-down .caret")

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