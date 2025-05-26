function mostrarCoracao() {
    const conteudo = document.getElementById("conteudo");
    const botao = document.getElementById("botaoClique");
  
    conteudo.style.display = "flex"; // mostra o coração
    botao.style.display = "none";    // esconde o botão
  }