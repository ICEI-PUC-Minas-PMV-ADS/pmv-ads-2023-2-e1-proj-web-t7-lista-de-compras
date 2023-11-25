const addButton = document.getElementById('add-bt')
let formulario = document.getElementById("formulario")

let currentId 
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    currentId = params.get('id');
})

function newProduct() { //função para chamar o formulário de adicionar produto 
    formulario.style.display = "block" // chama a variavel que contem o elemento HTML e muda o display do elemento para block,fazendo-o aparecer na tela
}

function closeForm() {
    formulario.style.display = "none"  // chama a variavel que contem o elemento HTML e muda o display do elemento para none,fazendo-o desaparecer na tela
}

function saveProduct(product) { //função para salvar produto no localStorage,recebe como paramentro o produto a ser salvo
    let produtos = JSON.parse(localStorage.getItem(`produtos${currentId}`)) || [];
    produtos.push(product) // .push pega o produto que chega como parametro e joga dentro do array
    localStorage.setItem(`produtos${currentId}`, JSON.stringify(produtos)) //salva no localStorage
}
function validationForm() { //valida os dados que o usuário envia no formulario

    let name = document.getElementById("name").value             
    let price = document.getElementById("price").value                        //{TODOS pegam os valores que são digitados nos Inputs e salvam nas variaveis}
    let category = document.getElementById("select").value
    let qntd = document.getElementById("qntd").value

    if (!name) {       //se a variavel name vier vazia retorna erro
        alert("Preencha com o nome do produto!")
        return false
    }
    else if (price < 0 || !price) {       //se a variavel price vier vazia ou menor que 0 retorna erro
        alert("O preço não pode ser menor que 0!")
        return false
    }
    else if (category === "") {       //se a variavel category nao for selecionada retorna erro
        alert("Selecione uma categoria!")
        return false
    }
    else if (!qntd) {  //se a variavel qntd vier vazia retorna erro
        alert("Digite a quantidade!")
        return false
    }
    saveProduct({name, price, category,qntd}) //se passar em todas as validações ele executa a função de salvar e passa os dados que vao ser salvas dentro de um objeto
    return true
}

document.addEventListener('click', function (event) {  //captação de cliquer na tela e função para deletar produto da lista
    if (event.target.classList.contains('bt-delete') || event.target.closest('.bt-delete')) {  //ao clicar ele retorna tudo sobre oq foi clicado,se no que foi clicado tiver a class 'bt-delete' ele executa o resto
        let button = event.target.closest('.bt-delete');
        let parentDiv = button.parentNode; // 'this' se refere ao botão clicado
        let productName = parentDiv.querySelector('.nameP').textContent; // pega o nome do produto em que o button de deletar foi clicado
       

        let produtos = JSON.parse(localStorage.getItem(`produtos${currentId}`)) || []; // busca os produtos salvos no localStorage
        let productD = produtos.find(p => p.name === productName)  // encontra dentro do array de produtos o produto que tem o mesmo nome do que o button foi clicado

        if (productD) { // se ele encontrar o produto ou seja se a variavel productD for true ele executa
            produtos = produtos.filter(p => p !== productD)  
// percorre o array e filtra por meio do nome e retorna todos os elementos que não tem aquele nome e dps salva na variavel
        }

        localStorage.setItem(`produtos${currentId}`,JSON.stringify(produtos)) // salva no localStorage sem o produto que foi deletado
        location.reload() //recarrega a página automaticamente para atualizar a lista
    }
})

// function balance() {
//     let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    
//     const saldoTotal = produtos.reduce((acumulador, prod) => {
//         return acc + (prod.price * prod.qntd);
//     }, 0);

//     console.log(saldoTotal);
// }