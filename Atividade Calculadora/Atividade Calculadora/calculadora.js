var tela = document.getElementById('tela');

tela.addEventListener('keypress', function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        document.getElementById("botao-enter").click();
    }
})

function adicionar(tecla){
    tela.value = tela.value + tecla;
}
function apagar(){
    tela.value = '';
}
function calcular(){
    tela.value = eval(tela.value);
}