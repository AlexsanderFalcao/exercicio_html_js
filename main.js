document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    if (campoB > campoA) {
        exibirMensagem(true, "Formulário válido! B é maior que A.");
    } else {
        exibirMensagem(false, "Formulário inválido! B deve ser maior que A.");
    }
});

function exibirMensagem(valido, mensagem) {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagem;

    if (valido) {
        mensagemDiv.className = 'message';
    } else {
        mensagemDiv.className = 'error-message';
    }

    mensagemDiv.style.display = 'block';
}
