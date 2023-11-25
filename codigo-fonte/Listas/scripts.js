const addButton = document.getElementById('add-bt')
let formulario = document.getElementById("formulario")

function newProduct() { //função para chamar o formulário de adicionar produto 
    formulario.style.display = "block" // chama a variavel que contem o elemento HTML e muda o display do elemento para block,fazendo-o aparecer na tela
}

function closeForm() {
    formulario.style.display = "none"  // chama a variavel que contem o elemento HTML e muda o display do elemento para none,fazendo-o desaparecer na tela
}
function finalizarCompraBt() {
    let listaProdutos = JSON.parse(localStorage.getItem('produtosnull')) || []; //Obter a lista atual
    const data = new Date();
    listaProdutos.unshift(`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`);
    localStorage.setItem('historicoProdutos', JSON.stringify(listaProdutos)); //Enviar a lista para a página de histórico
    window.location.href = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/codigo-fonte/Histórico/indexHistorico.html' //Redirecionar para a página de histórico
};
