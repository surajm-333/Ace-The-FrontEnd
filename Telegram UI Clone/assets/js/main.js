// For MenuBar
const menuBtn = document.querySelector('.dialog__menu-btn')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const search = document.querySelector('.dialog__search-bar')
const chatSearch = document.querySelector('.chat__top-btn.search')
const menuBar = document.querySelector('.chat__top-btn.menu-bar')
const dropdown = menuBar.querySelector('.dropdown')
const profile = document.querySelector('.profile')
const settings = document.querySelector('.settings')
const chatDetail = document.querySelector('.chat__detail')
const settingsBtn = document.querySelector('.settings-btn')
const closeBtn = document.querySelector('.close-btn')
const closeSettingsBtn = document.querySelector('.close-settings-btn')
const textarea = document.querySelector('.chat__message-area')
const recorder = document.querySelector('.chat__audio-recorder')
const send = document.querySelector('.submit')
const chat = document.querySelector('.chat')
const chatRight = document.querySelector('.chat__right')
const chatBody = document.querySelector('.chat__body')
const chatFooter = document.querySelector('.chat__footer')
const selectChat = document.querySelector('.select-chat')
const dialogItem = document.querySelectorAll('.dialog__item')
const textArea = document.querySelector('.chat__message-area')
const chatName = document.querySelector('.chat__name')
const profileAvatar = document.querySelector('.profile__avatar')
const profileName= document.querySelector('.profile__full-name')
const userNameLink = document.querySelector('.username-link')


const openProfile = function(){
    profile.classList.remove('hidden')
    overlay.classList.remove('hidden') 
}
const closeProfile = function(){
    profile.classList.add('hidden')
    overlay.classList.add('hidden') 
} 

const openSettings = function(){
    settings.classList.remove('hidden')
    overlay.classList.remove('hidden') 
}
const closeSettings = function(){
    settings.classList.add('hidden')
    overlay.classList.add('hidden') 
} 

const openMenu = function(){
    menu.classList.add('show-menu')
    overlay.classList.remove('hidden') 
}
const closeMenu = function(){
    menu.classList.remove('show-menu')
    overlay.classList.add('hidden') 
} 



menuBtn.addEventListener('click', openMenu)
overlay.addEventListener('click', closeMenu)
settingsBtn.addEventListener('click', closeMenu)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeMenu();
    }
  });

// SearchBar: 


search.addEventListener('click', ()=>{
    search.classList.add('outline')
})
chatSearch.addEventListener('click', (e)=>{
    search.classList.add('outline')
    search.focus()
    e.target.classList.add('clicked-btn')
})
search.addEventListener('focusout', ()=>{
    search.classList.remove('outline')
    chatSearch.classList.remove('clicked-btn')
}) 

//Dropdown: 


menuBar.addEventListener('click', (e)=>{
    dropdown.classList.remove('hidden');
    e.stopPropagation()
})

window.document.addEventListener('click',()=>{
    dropdown.classList.add('hidden')
})


//Profile Modal: 


chatDetail.addEventListener('click', openProfile)

overlay.addEventListener('click', closeProfile)

closeBtn.addEventListener('click', closeProfile) 

// Settings Modal: 

settingsBtn.addEventListener('click', openSettings)

overlay.addEventListener('click', closeSettings)

closeSettingsBtn.addEventListener('click', closeSettings) 




document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !chatDetail.classList.contains('hidden')) {
      closeProfile()
    }
  }); 

  //Send Form:
//   chatBody.classList.add('chatBody')
  textarea.addEventListener("input", ()=>{
      textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;");
      recorder.classList.add('hidden')
      send.classList.remove('hidden')
    if (!textarea.value.length) {
        textarea.style.height = "auto";
        recorder.classList.remove('hidden')
        send.classList.add('hidden')
    }else{
        recorder.classList.add('hidden')
        send.classList.remove('hidden')
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight) + "px";
    } 
    }, false);






















