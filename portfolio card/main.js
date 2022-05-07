

$(function () {
  $(".menu").click(function () {
    document.getElementById("menu-list").classList.toggle("show");
  });
  window.onclick = function (event) {
    if (!event.target.matches('.menu')) {
      var dropdowns = document.getElementsByClassName("menu-li");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  $('.toggle-input')[0].checked = true;
  const checkbox = document.querySelector('.toggle-input');
  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dmode');
  });
});