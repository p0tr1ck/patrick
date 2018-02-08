
//Image changing code
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_0934.JPG') {
      myImage.setAttribute ('src','images/patrick.jpg');
    } else {
      myImage.setAttribute ('src','images/IMG_0934.JPG');
    }
  }

//User changing code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my site, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
