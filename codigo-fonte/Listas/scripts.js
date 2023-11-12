const addButton = document.getElementById('add-bt')


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
    let qntd = document.getElementById("qntd").value

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
    else if (!qntd) {
        alert("Digite a quantidade!")
        return false
    }
    saveProduct({ name, price, category,qntd})
    return true
}


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('bt-delete') || event.target.closest('.bt-delete')) {
        let button = event.target.closest('.bt-delete');
        let parentDiv = button.parentNode; // 'this' se refere ao botão clicado
        let productName = parentDiv.querySelector('.nameP').textContent;
       

        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        let productD = produtos.find(p => p.name === productName)

        if (productD) {
            produtos = produtos.filter(p => p !== productD)  

        }

        localStorage.setItem('produtos', JSON.stringify(produtos))
        location.reload()
    }
})