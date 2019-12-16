//DOM Elements

const time = document.getElementById("time"),
const greeting = document.getElementById("greeting"),
const name = document.getElementById("name"),
const focus = document.getElementById("focus");

//Function Show Time

function showTime(); {
 let today = new Date(),
 hour = today.getHours (),
 min = todey.getMinutes ();
 
 
 //Output time
 
 time.innerHTML = `${addZero(hour)}<span>:</span>${adZero(min)}`;
 
 setTimeout(showTime, 1000);
 }
 
 //add Zeros
 
 function addZero(n); {
 return (parseInt (n, 10) < 10 ? "0" : " ") + n;
 }
 
 //Set Background and greeting
 
 function setBgGreeting(); {
  let today = new Date;
  hour = today.getHours (),
  
  if (hour > 6 && < 13) {
  document.body.style.backgroundImage = "url(xxxxxxxxxxxxx)";
  greeting.textContent = "Good morning";
  }   else if (hour > 13 && < 19) {
  document.body.style.backgroundImage = "url(xxxxxxxxxxxxx)";
  greeting.textContent = "Good afternoon";
  }   else ()
  
 }
 
 //Run
 
 showTime();
 
