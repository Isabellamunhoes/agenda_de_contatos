const form = document.getElementById('form-contato');

let nomes = [];
let telefones = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');
    const telefoneLimpo = inputTelefone.value.trim().replace(/\D/g, '');

    if (!inputNome.value || !inputTelefone.value) {
        alert('Preencha os dois campos.');
        return;
    }

    if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
        alert('Coloque o DDD e o número completo. Ex: 1112345678');
        return;
    }

    if (nomes.includes(inputNome.value) || telefones.includes(telefoneLimpo)) {
        alert('Esse contato ou número já foi adicionado.');
        return;
    }

    nomes.push(inputNome.value);
    telefones.push(telefoneLimpo);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
