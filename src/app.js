import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//variables
const palos = ['♦', '♥', '♠', '♣'];
const values = [1,2,3,4,5]


//funciones
const randomMaker = (arr) => Math.floor(Math.random() * arr.length)
const value = arr => arr[randomMaker(arr)]
console.log(value(palos))
console.log(palos[2])
const updateCard = () => {
  paloUp.innerHTML = `<span>${value(palos)}</span>`
}

const cardMaker = () => {
  const card = document.createElement('div')
  const paloUp = document.createElement('div')
  const cardValue = document.createElement('div')
  const paloDown = document.createElement('div')
  card.classList.add('card')
  paloUp.innerHTML = `<span>${value(palos)}</span>`
  card.appendChild(paloUp)
  document.querySelector('body').appendChild(card)
}


//eventos
window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  cardMaker()
};