const tela = document.getElementById('tela');
let expressao = '';

function inserir(valor) {
if (expressao === '0' && valor !== '.') {
expressao = valor;
} else {
expressao += valor;
}
atualizarTela();
}

function limpar() {
expressao = '';
atualizarTela('0');
}

function apagar() {
expressao = expressao.slice(0, -1);
atualizarTela();
}

function calcular() {
try {
const resultado = eval(expressao);
expressao = resultado.toString();
atualizarTela();
} catch (e) {
atualizarTela('Erro');
expressao = '';
}
}

function atualizarTela(valor = expressao) {
tela.textContent = valor || '0';
}