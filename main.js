const form = document.getElementById('form');
const usuario = document.getElementById('nome');
const numero = document.getElementById('numero');
const atividade = [];
const number = [];

let linhas = '';


form.addEventListener('submit', (e) => {
    e.preventDefault();
    nomeUsuario();
    numeroUsuario();
    adicionaLinha();
    atualizaTabela();
})

function nomeUsuario() {
    const userNameValue = usuario.value;
    if (userNameValue === "") {
        alert("preencha campo nome!")
    }
}

function numeroUsuario(){
    const numberUsuarioValue = numero.value;

    if (numberUsuarioValue === "")
    alert("preencha o campo com seu numero por favor!")
}

function adicionaLinha(){
    const userNameValue = document.getElementById('nome');
    const numberUsuarioValue = document.getElementById('numero');

    if (atividade.includes(userNameValue.value)) {
        alert("O nome inserido ja esta cadastrado!");
    } else {
        atividade.push(userNameValue.value);
        number.push(parseFloat(numberUsuarioValue.value));
    }
let linha = '<tr>';
linha += `<td> ${userNameValue.value}</td>`;
linha += `<td> ${numberUsuarioValue.value} </td>`;
linha += '</tr>';

linhas += linha;

userNameValue.value = "";
numberUsuarioValue.value = "";
}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
