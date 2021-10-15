const styleToggler = document.querySelector(".style-toogler");
styleToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const altStyles = document.querySelectorAll(".alt-style");
function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}
function changeColor(){
    altStyles.forEach((style)=>{
        if(localStorage.getItem
            ("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}
if(localStorage.getItem("color") !== null){
    changeColor();
}

const dayNight = document.querySelector(".day-night")

dayNight.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")
    }
    updaeteIcon();
})

function themeMode(){
    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            document.body.classList.remove("dark");
        }else{
            document.body.classList.add("dark");
        }
    }
    updaeteIcon();
}
themeMode();
function updaeteIcon(){
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
}
