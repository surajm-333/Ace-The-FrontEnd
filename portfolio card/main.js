/* Copyright 2022 krishna6688@github

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.  */

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