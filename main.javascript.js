    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('nome-contato');
    const telefoneInput = document.getElementById('telefone-contato');
    const corpoTabela = document.querySelector('tbody');
    let linhas = '';

    form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    if (!nome || !telefone) {
        alert('Preencha os dois campos');
        return;
    }

    const linha = `
        <tr>
        <td>${nome}</td>
        <td>${telefone}</td>
        </tr>
    `;

    linhas += linha;
    corpoTabela.innerHTML = linhas;

    nomeInput.value = '';
    telefoneInput.value = '';
    });
