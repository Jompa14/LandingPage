//DOM Elements
console.log ("Grêmio")
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//Function Show Time

function showTime() {
 const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
 //Output time
 document.getElementById("time").innerHTML = `${addZero(hour)}<span>:</span>${addZero(minute)}`;
 
 setTimeout(showTime, 1000);
 console.log("hello");
 }
 
 //add Zeros
 
 function addZero(n) {
 return (parseInt (n, 10) < 10 ? "0" : " ") + n;
 }
 
 //Set Background and greeting
 
 function setBgGreeting() {
  let today = new Date;
  hour = today.getHours (),
  
  if (hour > 6 && < 13) {
  document.body.style.backgroundImage = "/home/jompa/LandingPage/images/coffee.jpeg";
  greeting.textContent = "Good morning";
  }   else if (hour < 19) {
  document.body.style.backgroundImage = "/home/jompa/LandingPage/images/chimarrao.jpeg";
  greeting.textContent = "Good afternoon";
  }   else ()
  document.body.style.backgroundImage = "/home/jompa/LandingPage/images/city.jpeg";
  greeting.textContent = "Good evening";
  
 }
 
 //Run
 
 moment();
 setBgGreeting();
 
