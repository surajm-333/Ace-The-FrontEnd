const form = document.querySelector('#form_submit');
const search = document.querySelector('#search');

//function to fetch the search query string and respond to the search and link to website
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

function signin() { //function to go to signin page
  window.location =
    'https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=GAZAmgQ';
}

function doodle() {
  window.location = 'https://www.google.com/doodles';
}
