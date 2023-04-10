var tela = document.getElementById('tela');

function adicionar(tecla){
    tela.value = tela.value + tecla;
}
function apagar(){
    tela.value = '';
}
function calcular(){
    tela.value = eval(tela.value);
}