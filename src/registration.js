

// const firebaseConfig = {
//     apiKey: "AIzaSyC7tr7FxHw29u5Fu89Nt2Ne-mC9L2jeNwI",
//     authDomain: "hotel-19f2a.firebaseapp.com",
//     projectId: "hotel-19f2a",
//     storageBucket: "hotel-19f2a.appspot.com",
//     messagingSenderId: "407902336432",
//     appId: "1:407902336432:web:11ed0867984ff2a6815275",
//     measurementId: "G-V9KKEBX5LP"
//   };


function validateAndSignIn(event) {

    //Prevent form from submitting and refreshing the page
    event.preventDefault();
    // Get email and password from the user input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

   // Simple validation
   if (isValidEmail(email) && isValidPassword(password)) {
    alert('Login successful!');
    window.location.href = 'reservation.html';

} else {
    alert('Invalid email or password. Please check your input.');
}
}

function isValidEmail(email) {
    // Basic email format check
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Basic password format check (at least 6 characters)
    return password.length >= 6;
}

