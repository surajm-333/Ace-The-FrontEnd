const navResbtn = document.getElementsByClassName("navbar-icon")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
navResbtn.addEventListener('click' , ()=>{
    navbarLinks.classList.toggle("hide")
})