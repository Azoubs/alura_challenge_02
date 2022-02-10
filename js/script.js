let botao = document.querySelector('button');
let inputLetra = document.querySelector('#letra');
let letraDigitada;
let palavraMostrada = [];
let erros = 0;
let RegExpression = /^[A-Z]{1}$/;

// Seleciona a palavra da lista de palavras
let palavraSelecionada = selecionaPalavra(palavras);
let letrasErradas = [];
console.log(palavraSelecionada);

mostraLinhas(520);

// Cria um array vazio e preenche com " " na quantidade de letras
let palavraArray = new Array();
for(let i = 0; i < palavraSelecionada.length; i++) {
    palavraArray.push(" ");
}

for(let i = 0; i < palavraSelecionada.length; i++) {
    palavraMostrada[i] = " ";
}


botao.addEventListener('click', function() {
    letraDigitada = inputLetra.value;

    // console.log(validaInput(letraDigitada));

    if (validaInput(letraDigitada)) {
        if(!letrasErradas.includes(letraDigitada)) {
            if (palavraSelecionada.indexOf(letraDigitada) < 0) {
                letrasErradas.push(letraDigitada);
                erros++;
            } else {
                
                for(let i = 0; i < palavraSelecionada.length; i++) {
                    let indexEncontrado = palavraSelecionada.indexOf(letraDigitada, i);
                    // console.log(indexEncontrado);
                    palavraMostrada[indexEncontrado] = letraDigitada;      
                }
            }
            
            mostraLetras(520);
            verificaErros(erros);
            verificaVitoria(palavraSelecionada, palavraMostrada);

        } else {
            alert("Letra já digitada!");
        }
    
    }
    else {
        alert("Apenas uma letra maiúscula!");
    }
    inputLetra.value = "";
    // console.log(letrasErradas)
})

function validaInput(input) {
    let RegExpression = /^[A-Z]{1}$/;
    if (!RegExpression.test(input)) {
        return false;
    }
    return true;
}

function selecionaPalavra(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function mostraLinhas(n) {
    for(let i = 0; i < palavraSelecionada.length; i++) {
        desenhaLinhaPalavra(n);
        n += 50;
    }
}

function mostraLetras(n) {
    for(let i = 0; i < palavraSelecionada.length; i++) {
        desenhaLinhaPalavra(n);
        let tela = document.querySelector('canvas');
        let pincel = tela.getContext('2d');
        pincel.font = '30px Georgia';
        pincel.fillStyle = 'black';
        pincel.fillText(palavraMostrada[i], n + 11, 480);
        n += 50;
    }
}

function verificaErros(erros) {
    if (erros == 1) {
        desenhaCabeca();
    }
    else if (erros == 2) {
        desenhaCorpo();
    }
    else if (erros == 3) {
        desenhaBracoEsquerdo();
    }
    else if (erros == 4) {
        desenhaBracoDireito();
    }
    else if (erros == 5) {
        desenhaPernaEsquerda();
    }
    else if (erros == 6) {
        desenhaPernaDireita();
        let tela = document.querySelector('canvas');
        let pincel = tela.getContext('2d');
        pincel.font = '30px Georgia';
        pincel.fillStyle = 'red';
        pincel.fillText("Você perdeu!", 600, 280);
        inputLetra.disabled = true;
    }
}

function verificaVitoria(palavraSelecionada, palavraMostrada) {
    if(palavraSelecionada == palavraMostrada.join("")) {
        let tela = document.querySelector('canvas');
        let pincel = tela.getContext('2d');
        pincel.font = '30px Georgia';
        pincel.fillStyle = 'green';
        pincel.fillText("Você venceu!", 600, 280);
        inputLetra.disabled = true;
        botao.disabled = true;
    }
}