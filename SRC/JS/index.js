/*
OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
    - passo 1 - dar um jeito de pegar o elemento do HTML da seta avancar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avancar
    - passo 3 - fazer aparecer o próximo cartao da lista
    - passo 4 - buscar o cartao que está selecionado e esconder

OBJETIVO 2 - Quando clicamos na seta de voltar temos que mostrar o cartao anterior da lista
    - passo 1 - dar um jeito de pegar o elemento do HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartao anterior da lista
    - passo 4 - buscar o cartao que está selecionado e esconder
    */
   
    const btnAvancar = document.getElementById("btn-avancar");
    const btnVoltar = document.getElementById("btn-voltar");
    const cartoes = document.querySelectorAll(".cartao");
    let cartaoAtual = 0;
    
    btnAvancar.addEventListener("click", function () {
        if (cartaoAtual === cartoes.length - 1) return;
    
        esconderCartaoSelecionado();
    
        cartaoAtual++;
        mostrarCartao(cartaoAtual);
    });
    
    btnVoltar.addEventListener("click", function () {
    
        if (cartaoAtual === 0) return;
    
        esconderCartaoSelecionado();
    
        cartaoAtual--;
        mostrarCartao(cartaoAtual);
    });
    
    function mostrarCartao(cartaoAtual) {
        cartoes[cartaoAtual].classList.add("selecionado");
    }
    
    function esconderCartaoSelecionado() {
        const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado");
    }