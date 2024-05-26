// EXERCICIO #3
// desenvolver uma função que valide um valor inserido no input é positivo ou negaivo.

function Validacao() {
    var numero = document.getElementById("Valor").value;

    if (numero < 0) {

        alert(numero + " : o valor inserido é negativo !");
    }
    if (numero == 0) {

        alert(numero);
    }else{
        alert(numero+" : o valor inserido é positivo !");
    }


}