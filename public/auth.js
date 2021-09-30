const auth = firebase.auth();

/*document.getElementById("btn-login").addEventListener('click', function(event){
    event.preventDefault()
    var email = $('#loginEmail').val();
    var password = $('#loginPassword').val();

    var isUserLogged = auth.signInWithEmailAndPassword(email, password);
    if (isUserLogged != null) {
        window.location.href = "../No_Plastic_Gym/usersList.html"
        
    } else {
        alert("Whoot");
    }
});*/

// get values from the dom
const logInUser = document.querySelector('#btn-login');

// Log in user
logInUser.addEventListener('click', (loginEvent) =>{
    loginEvent.preventDefault();

    var email = $('#loginEmail').val();
    var password = $('#loginPassword').val();

    auth.signInWithEmailAndPassword(email, password).then(credentials =>{
        console.log(credentials.user);
        window.location.href = "../No_Plastic_Gym/usersList.html"
    });
});



