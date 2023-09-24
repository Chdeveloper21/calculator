/* var input1 = document.getElementById('input1').value;
var input2 = document.getElementById('input2').value;
var resultado = input1 + input2; */

function suma (){
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var resultado = input1 + input2;

    document.getElementById('resultado').value = resultado;
}

