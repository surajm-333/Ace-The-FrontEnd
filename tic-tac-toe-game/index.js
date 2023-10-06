var restart = document.querySelector('#res');
var squares = document.querySelectorAll('td');
// for  clearing all boxed restarting
function clearBox() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}
restart.addEventListener('click',clearBox);

function ChangeOptions() {
  if(this.textContent === ''){
    this.textContent = 'X';
  }
  else if (this.textContent ==='X') {
    this.textContent = 'O';
  }
  else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',ChangeOptions);
}
