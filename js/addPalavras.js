
let campoPalavra = document.querySelector("#adicionar-palavra");
let botaoPalavra = document.querySelector("button");
let RegExpressionPalavras = /^[A-Za-z]*$/;


botaoPalavra.addEventListener('click', function() {
    let palavraDigitada = campoPalavra.value;
    
    if (palavraDigitada.length >= 3) {
        if(RegExpressionPalavras.test(palavraDigitada)) {
            palavras.push(palavraDigitada.toUpperCase());
            console.log(palavras);
        } else {
            campoPalavra.value = "Apenas letras, sem caracteres especiais!";
        }
    }
    else {
        campoPalavra.value = "Digite uma palavra com três caracteres ou mais!"
    }
});