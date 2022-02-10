let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

desenhaForca();

function desenhaForca() {
    pincel.fillStyle = 'black';
    pincel.fillRect(100, 100, 10, 600);
    pincel.fillRect(100, 100, 300, 10);
    pincel.fillRect(400, 100, 10, 100);
}

function desenhaCabeca() {
    pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.arc(405, 230, 40, 0, 2*3.14);
    pincel.fill();
    pincel.lineWidth = 07;
    pincel.strokeStyle = "100px"
    pincel.stroke();
}

function desenhaCorpo() {
    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.lineTo(401, 270);
    pincel.lineTo(401, 400);
    pincel.stroke();
}

function desenhaBracoEsquerdo() {
    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.lineTo(401, 280);
    pincel.lineTo(301, 350);
    pincel.stroke();
}

function desenhaBracoDireito() {
    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.lineTo(401, 280);
    pincel.lineTo(501, 350);
    pincel.stroke();
}

function desenhaPernaEsquerda() {
    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.lineTo(401, 396);
    pincel.lineTo(300, 500);
    pincel.stroke();
}

function desenhaPernaDireita() {
    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.lineTo(401, 396);
    pincel.lineTo(500, 500);
    pincel.stroke();
}

function desenhaLinhaPalavra(x) {
    pincel.lineWidth = 7;
    pincel.beginPath();
    pincel.lineTo(x, 500);
    pincel.lineTo(x + 40, 500);
    pincel.stroke();
}

