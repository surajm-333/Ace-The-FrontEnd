const form = document.querySelector('#form_submit');
const search = document.querySelector('#search');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  squery = search.value;
  if (squery.length == 0) {
    console.log('Inside If');
    window.alert('Enter a query to search');
    return false;
  } else {
    window.location = `https://www.google.com/search?q=${squery}`;
    search.value = '';
    console.log('Inside else');
  }
});

function signin() {
  window.location =
    'https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=GAZAmgQ';
}

function doodle() {
  window.location = 'https://www.google.com/doodles';
}
