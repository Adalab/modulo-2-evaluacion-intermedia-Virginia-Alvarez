'use strict'
const optionsWar = document.querySelector('.jsOptions');
const btn = document.querySelector('.jsBtn');
const result = document.querySelector('.jsResult');
const evilForces =[
    {
     "name": "Sureños",
     "force": 2
    },
    {
      "name": "Orcos",
      "force": 2
    },
    {
      "name": "Goblins",
      "force": 2
    },
    {
      "name": "Huargos",
      "force": 3
    },
    {
      "name": "Trolls",
      "force": 5
    }
];

function getRandomForce(arrayLength){
    const arrayPosition = Math.ceil(Math.random() * (arrayLength - 1));
    return evilForces[arrayPosition];
}
  
const selectedEvilForce = getRandomForce(evilForces.length);
console.log(`La máquina ha seleccionado ${selectedEvilForce.name} con fuerza ${selectedEvilForce.force}`);


function valueSelect(){
    const select = parseInt(optionsWar.value);
    if (select === selectedEvilForce.force ){
        result.innerHTML = 'Empate';
    } else if (select > selectedEvilForce.force ){
        result.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena!';
    } else {
        result.innerHTML = 'Ha ganado el Ejército del mal! Vuelve a intentarlo!';
    }
}

function handleClick(e){
    e.preventDefault();
    valueSelect();
}

btn.addEventListener('click', handleClick);