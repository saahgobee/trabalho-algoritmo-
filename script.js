
function mostrarMensagem() {
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem');
  
  if (nome.trim() === "") {
    mensagem.textContent = "Por favor, digite seu nome!";
  } else {
    mensagem.textContent = `Olá ${nome}, é um prazer te conhecer!`;
  }
}
