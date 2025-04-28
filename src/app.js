import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];

let action = ['ate', 'peed', 'crushed', 'broke'];

let what = ['my homework', 'my phone', 'the car'];

let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function randomExcuse(){
  let noun = Math.floor(Math.random()*who.length);
  let verb = Math.floor(Math.random()*action.length);
  let subject = Math.floor(Math.random()*what.length);
  let time = Math.floor(Math.random()*when.length);
  return [who[noun],action[verb],what[subject],when[time]];
}


window.onload = function() {
  //write your code here
  let excuseArray = randomExcuse();
  document.querySelector('#excuse').innerHTML = excuseArray[0] + " " + excuseArray[1] + " " + excuseArray[2] + " " + excuseArray[3];
};




