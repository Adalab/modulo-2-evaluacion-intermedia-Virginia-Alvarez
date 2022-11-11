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
const default_select_value = 0;
const human= document.querySelector('.jsHuman');
const pc= document.querySelector('.jsPc');
const battleResult = document.querySelector('.jsBattleResult');
//FIN BONUS
let selectedEvilForce;

function addInnerHTML(element, text){
    element.innerHTML = text;
}

function getRandomForce(arrayLength){
    const arrayPosition = Math.ceil(Math.random() * (arrayLength - 1));
    return evilForces[arrayPosition];
}

function pcSelectionForce(){
    selectedEvilForce = getRandomForce(evilForces.length);
    console.log(`La máquina ha seleccionado ${selectedEvilForce.name} con fuerza ${selectedEvilForce.force}`);
    // Sé que debo quitar el console.log pero me ayuda mucho XD 
}


function play(){
    pcSelectionForce();
    const select = parseInt(optionsWar.value);

    if(select === default_select_value) {
        addInnerHTML(result, 'Por favor selecciona una raza');
    } else {
        battlesNumber++;
        if (select === selectedEvilForce.force ){
            addInnerHTML(result, 'Empate');
        } else if (select > selectedEvilForce.force ){
            addInnerHTML(result, 'Ha ganado el Ejército del Bien! Enhorabuena!');
            humanPlayer++;
        } else {
            addInnerHTML(result, 'Ha ganado el Ejército del mal! Vuelve a intentarlo!');
            pcPlayer++;
        }
        
        if (battlesNumber === MAX_BATTLES){
            addInnerHTML(btn, "Reiniciar Juego");
            battleResolution();
        }
        addInnerHTML(human, humanPlayer);
        addInnerHTML(pc, pcPlayer);
        optionsWar.value = default_select_value;
    }
}

function resetValues(){
    battlesNumber = 0;
    humanPlayer= 0
    pcPlayer= 0
    addInnerHTML(btn, "Batalla");
    addInnerHTML(human, humanPlayer);
    addInnerHTML(pc, pcPlayer);
    addInnerHTML(battleResult, '');
}

function battleResolution(){
    if (humanPlayer === pcPlayer ){
        addInnerHTML(battleResult, 'Empate');
    } else if (humanPlayer > pcPlayer ){
        addInnerHTML(battleResult, 'Ha ganado el Ejército del Bien! Enhorabuena!');
    } else {
        addInnerHTML(battleResult, 'Ha ganado el Ejército del mal! Vuelve a intentarlo!');
    }
}

function handleClick(e){
    e.preventDefault();

    if(e.currentTarget.innerHTML === 'Batalla'){
        play();
    } else {
        resetValues();
    }

    
}

btn.addEventListener('click', handleClick);