'use strict'
const horaContainer = document.querySelector('.hora');
const fechaContainer = document.querySelector('.fecha');

const updateHora = setInterval(function(){
    const date = new Date();
    let time = (date.getHours >= 12) ? "PM" : "AM";
    let hora = (date.getHours() == 0) ? 12: date.getHours();
    horaContainer.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${time}`;
    fechaContainer.innerHTML = `${date.toDateString()}`
},1000);