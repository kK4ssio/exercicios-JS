// EXERCICIO #2
// uma função que conta o número de caracteres de uma palavra ou frase digitada em um input.

function ContarCaracs(){
    var texto = document.getElementById("Texto").value; 
    var quantidadeCaracteres = texto.length; 
    alert("A quantidade de caracteres é: " + quantidadeCaracteres); 
}
