function limitarNumeroPositivo(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var numero = parseInt(input.value, 10);
    if (isNaN(numero) || numero < 0) {
        input.value = '';
    }
}


function valorYresultado10()
{
let txt = document.getElementById('caja10');
let txtValue = txt.value;

let result = document.getElementById('resultado10');
result.innerText = txtValue *10;
}


function valorYresultado50()
{
let txt = document.getElementById('caja50');
let txtValue = txt.value;

let result = document.getElementById('resultado50');
result.innerText = txtValue *50;
}


function valorYresultado100()
{
let txt = document.getElementById('caja100');
let txtValue = txt.value;

let result = document.getElementById('resultado100');
result.innerText = txtValue *100;
}


function valorYresultado500()
{
let txt = document.getElementById('caja500');
let txtValue = txt.value;

let result = document.getElementById('resultado500');
result.innerText = txtValue *500;
}


function valorYresultado1000()
{
let txt = document.getElementById('caja1000');
let txtValue = txt.value;

let result = document.getElementById('resultado1000');
result.innerText = txtValue *1000;
}

function valorYresultado2000()
{
let txt = document.getElementById('caja2000');
let txtValue = txt.value;

let result = document.getElementById('resultado2000');
result.innerText = txtValue *2000;
}

function valorYresultado5000()
{
let txt = document.getElementById('caja5000');
let txtValue = txt.value;

let result = document.getElementById('resultado5000');
result.innerText = txtValue *5000;
}

function valorYresultado10000()
{
let txt = document.getElementById('caja10000');
let txtValue = txt.value;

let result = document.getElementById('resultado10000');
result.innerText = txtValue *10000;
}

function valorYresultado20000()
{
let txt = document.getElementById('caja20000');
let txtValue = txt.value;

let result = document.getElementById('resultado20000');
result.innerText = txtValue *20000;
}