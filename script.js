function computerPlay(){
    let min = Math.ceil(1);
    let max = Math.floor(3);
    let play = Math.floor(Math.random() * (max - min + 1)) + min;
    if(play == 1)
        return 'PEDRA';
    else if(play == 2)
        return 'PAPEL';
    else if(play == 3)
        return 'TESOURA';
}

let botEscolha = computerPlay();
let jogadorEscolha;
let i;
let j = 0; 
let k = 0; 
const resultados = document.querySelector("#resultados");
const pontuacao = document.querySelector("#pontuacao");


function playRound(jogadorEscolha, botEscolha){
    if(jogadorEscolha == 'PEDRA' && botEscolha == 'TESOURA'){
        j++;
        resultados.innerHTML = 'Pedra ganha de tesoura, você venceu!';
        pontuacao.innerHTML = j + ' x ' + k;
    }
    else if(jogadorEscolha == 'PEDRA' && botEscolha == 'PAPEL'){
        k++;
        resultados.innerHTML = 'Papel ganha de pedra, você perdeu!';  
        pontuacao.innerHTML = j + ' x ' + k;  
    }
    else if(jogadorEscolha == 'PEDRA' && botEscolha == 'PEDRA')
        resultados.innerHTML = 'Empate!';
    else if(jogadorEscolha == 'PAPEL' && botEscolha == 'PEDRA'){
        j++;
        resultados.innerHTML = 'PAPEL ganha de PEDRA, você venceu!';
        pontuacao.innerHTML = j + ' x ' + k;
    }
    else if(jogadorEscolha == 'PAPEL' && botEscolha == 'TESOURA'){
        k++;
        resultados.innerHTML = 'TESOURA ganha de PAPEL, você perdeu!';
        pontuacao.innerHTML = j + ' x ' + k;
    }
    else if(jogadorEscolha == 'PAPEL' && botEscolha == 'PAPEL')
        resultados.innerHTML = 'Empate';
    else if(jogadorEscolha == 'TESOURA' && botEscolha == 'PAPEL'){
        j++;
        resultados.innerHTML = 'TESOURA ganha de PAPEL, você venceu!';
        pontuacao.innerHTML = j + ' x ' + k;
    }
    else if(jogadorEscolha == 'TESOURA' && botEscolha == 'PEDRA'){
        k++;
        resultados.innerHTML = 'PEDRA ganha de TESOURA, você perdeu!';
        pontuacao.innerHTML = j + ' x ' + k;
    }
    else if(jogadorEscolha == 'TESOURA' && botEscolha == 'TESOURA')
        resultados.innerHTML = 'Empate';
}

const PEDRA = document.querySelector ('#PEDRA');

PEDRA.addEventListener('click', () => {
    computerPlay();
    const newLocal = computerPlay();
    playRound('PEDRA', newLocal);
});

const PAPEL = document.querySelector ('#PAPEL');

PAPEL.addEventListener('click', () => {
    computerPlay();
    const newLocal = computerPlay();
    playRound('PAPEL', newLocal);
});

const TESOURA = document.querySelector ('#TESOURA');

TESOURA.addEventListener('click', () => {
    computerPlay();
    const newLocal = computerPlay();
    playRound('TESOURA', newLocal);
});