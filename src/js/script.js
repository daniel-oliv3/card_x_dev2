/* OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista */

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

const cartoes = document.querySelectorAll(".cartao");

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function (){
    // console.log("Cliquei!");
    
    // console.log(cartaoAtual);
    // console.log(cartoes.length - 1);
    // console.log(cartaoAtual === cartoes.length - 1);
    
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if(ehUltimoCartao) return;

    // passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado();

    // passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele
    // const cartoes = document.querySelectorAll(".cartao");
    // console.log(cartoes[1]);
    // console.log(cartoes[1].classList);
    cartaoAtual++;
    // console.log(cartaoAtual);
    // console.log(cartoes[cartaoAtual]);
    mostrarCartao();
});


/* OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista */

// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function (){

    const ehPrimeiroCartao = cartaoAtual === 0; 

    // console.log(cartaoAtual);
    if(ehPrimeiroCartao) return;

    // passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado();

    // passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    mostrarCartao();
});





function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}


/**/
// alert("Olá, Mundo!");
// window.alert("Olá, Mundo!");
// console.log(document.getElementById("btn-avancar"));             

/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  
passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
passo 3 - fazer aparecer o próximo cartão da lista
passo 4 - buscar o cartão que esta selecionado e esconder


OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista

passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
passo 3 - fazer aparecer o cartão anterior da lista
passo 4 - buscar o cartão que esta selecionado e esconder
*/

















/**/