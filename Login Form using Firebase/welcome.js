firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("user").innerHTML = "Hello " + user.email;
    } else {
        location.replace("index.html");
    }
})

function logout() {
    firebase.auth().signOut();
}

