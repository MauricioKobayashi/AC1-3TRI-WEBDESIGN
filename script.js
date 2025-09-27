const botao = document.getElementById('trocarCor');
const luzVermelha = document.getElementById('vermelho');
const luzAmarela = document.getElementById('amarelo');
const luzVerde = document.getElementById('verde');

let estadoAtual = 0;

function atualizarSemaforo() {
    luzVermelha.classList.remove('vermelho');
    luzAmarela.classList.remove('amarelo');
    luzVerde.classList.remove('verde');
    
    if (estadoAtual === 0) {
        luzVermelha.classList.add('vermelho');
    } else if (estadoAtual === 1) {
        luzVerde.classList.add('verde');
    } else {
        luzAmarela.classList.add('amarelo');
    }
    
    estadoAtual = (estadoAtual + 1) % 3;
}

botao.addEventListener('click', atualizarSemaforo);

atualizarSemaforo();