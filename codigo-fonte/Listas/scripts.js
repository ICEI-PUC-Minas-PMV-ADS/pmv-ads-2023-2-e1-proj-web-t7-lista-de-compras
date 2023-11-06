const addButton = document.getElementById('add-bt')
const deleteButton = document.querySelector('#bt-delete')


function newProduct() {
    let formulario = document.getElementById("formulario")
    formulario.style.display = "block"
}

function closeForm() {
    let formulario = document.getElementById("formulario")
    formulario.style.display = "none"
}
function saveProduct(product) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(product)
    localStorage.setItem('produtos', JSON.stringify(produtos))

}

function validationForm() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let category = document.getElementById("select").value

    if (!name) {
        alert("Preencha com o nome do produto!")
        return false
    }
    else if (price < 0 || !price) {
        alert("O preço não pode ser menor que 0!")
        return false
    }
    else if (category === "") {
        alert("Selecione uma categoria!")
        return false
    }
    saveProduct({ name, price, category })
    return true
}

function deleteProduct(product) {
    
}

deleteButton.addEventListener('click', function(){
    let parentDiv = this.parentNode; // 'this' se refere ao botão clicado
    let productName = parentDiv.querySelector('#nameP').innerHTML;

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    let productD = produtos.find(p => p.name === productName)

    if (productD) {
        produtos = produtos.filter(p => p !== productD)
    }
    localStorage.setItem('produtos', JSON.stringify(produtos))
    location.reload()
},deleteProduct)