function limitarNumeroPositivo(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    var numero = parseInt(input.value, 10);
    if (isNaN(numero) || numero < 0) {
        input.value = '';
    }
}


function getValue()
{
let txt = document.querySelectorAll('.caja');
let txtValue = txt.value;

let result = document.querySelectorAll('.resultado');
result.innerText = txtValue;
}
