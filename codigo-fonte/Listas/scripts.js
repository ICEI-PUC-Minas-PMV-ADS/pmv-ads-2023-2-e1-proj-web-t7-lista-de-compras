const addButton = document.getElementById('add-bt')
let formulario = document.getElementById("formulario")

function newProduct() { //função para chamar o formulário de adicionar produto 
    formulario.style.display = "block" // chama a variavel que contem o elemento HTML e muda o display do elemento para block,fazendo-o aparecer na tela
}

function closeForm() {
    formulario.style.display = "none"  // chama a variavel que contem o elemento HTML e muda o display do elemento para none,fazendo-o desaparecer na tela
}