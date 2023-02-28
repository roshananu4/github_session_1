// Code for the index.html page
const hregisterBtn = document.getElementById('hregister');
hregisterBtn.addEventListener('click', function() {
  window.location.href = 'register.html';
});

// Code for the register.html page
const hloginBtn = document.getElementById('hlogin');
hloginBtn.addEventListener('click', function() {
  window.location.href = 'index.html';
});

// Code for the home.html page
const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', function() {
  window.location.href = 'index.html';
});

// Define an empty array to store registered users
let users = [];

// Function to register a new user
function registerUser() {
  // Get the username and password from the register form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  // Create an object to store the username and password
  let user = {
    username: username,
    password: password
  };
  
  // Add the user object to the users array
  users.push(user);
  
  // Alert the user that they have been registered
  alert("You have been registered!");
}

// Function to log in a user
function loginUser() {
  // Get the username and password from the login form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  // Check if the username and password are in the users array
  let loggedIn = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      loggedIn = true;
      break;
    }
  }
  
  // If the user is logged in, redirect to the home page and update the hi tag with the user's name
  if (loggedIn) {
    alert("You have been logged in!");
    let nameTag = document.getElementById("name");
    nameTag.innerHTML = "Hi " + username + "!";
    window.location.href = "home.html";
  } else {
    alert("Incorrect username or password!");
  }
}

// Add event listeners to the register and login forms
let registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  registerUser();
});

let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  loginUser();
});