const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://resizing.flixster.com/Vn5v5Z_daeD_uC8fyi3r997SGEQ=/300x300/v2/https://flxt.tmsimg.com/assets/p20492218_b_h9_aa.jpg" alt="" />'
  title.innerHTML = 'Squid Game'
  excerpt.innerHTML =
    `Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.`
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  name.innerHTML = 'Rahul Sharma'
  date.innerHTML = 'March 20,2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}