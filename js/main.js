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

//BONUS
let battlesNumber = 0;
let humanPlayer= 0
let pcPlayer= 0
const MAX_BATTLES = 10;
const human= document.querySelector('.jsHuman');
const pc= document.querySelector('.jsPc');
const battleResult = document.querySelector('.jsBattleResult');

//FIN BONUS


function getRandomForce(arrayLength){
    const arrayPosition = Math.ceil(Math.random() * (arrayLength - 1));
    return evilForces[arrayPosition];
}

let selectedEvilForce;

function pcSelectionForce(){
    selectedEvilForce = getRandomForce(evilForces.length);
    console.log(`La máquina ha seleccionado ${selectedEvilForce.name} con fuerza ${selectedEvilForce.force}`);
    // Sé que debo quitar el console.log pero me ayuda mucho XD 
}


function play(){
    pcSelectionForce();
    const select = parseInt(optionsWar.value);
    battlesNumber++;
    if (select === selectedEvilForce.force ){
        result.innerHTML = 'Empate';
    } else if (select > selectedEvilForce.force ){
        result.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena!';
        humanPlayer++;
    } else {
        result.innerHTML = 'Ha ganado el Ejército del mal! Vuelve a intentarlo!';
        pcPlayer++;
    }
    
    if (battlesNumber === MAX_BATTLES){
        btn.innerHTML = "Reiniciar Juego";
    }
    human.innerHTML = humanPlayer;
    pc.innerHTML = pcPlayer;
}

function resetValues(){
    battlesNumber = 0;
    humanPlayer= 0
    pcPlayer= 0
    btn.innerHTML = "Batalla"
    human.innerHTML = humanPlayer;
    pc.innerHTML = pcPlayer;
}

function battleResolution(){
    if (humanPlayer === pcPlayer ){
        battleResult.innerHTML = 'Empate';
    } else if (humanPlayer > pcPlayer ){
        battleResult.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena!';
    } else {
        battleResult.innerHTML = 'Ha ganado el Ejército del mal! Vuelve a intentarlo!';
    }
}

function handleClick(e){
    e.preventDefault();

    if(e.currentTarget.innerHTML === 'Batalla'){
        battleResult.innerHTML = '';
        play();
    } else {
        battleResolution();
        resetValues();
    }

    
}

btn.addEventListener('click', handleClick);