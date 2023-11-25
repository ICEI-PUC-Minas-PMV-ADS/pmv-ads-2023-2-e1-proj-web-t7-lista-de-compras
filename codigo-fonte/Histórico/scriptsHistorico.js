const buttonNav=document.getElementById('nav');

buttonNav.addEventListener('click', function() {
    var novaURL = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/codigo-fonte/Home/indexHome.html'; 
    window.location.href = novaURL;
});

document.addEventListener('DOMContentLoaded', function () {
let historicoProdutos = JSON.parse(localStorage.getItem('historicoProdutos')) || []; //Recuperar a lista enviada
console.log('bora', historicoProdutos);
    console.log('cheguei aqui')
    
    let dataFormatada = historicoProdutos[0];
    
    let formularioHistorico = document.getElementById('formularioHistorico'); 

    formularioHistorico.innerHTML = '';

    let campoLista = document.createElement('div');
        campoLista.classList.add('campos-listas');

    let campoData = document.createElement('input');
        campoData.disabled = true;
        campoData.classList.add('campo-data');
        campoData.type = 'text';
        campoData.placeholder = dataFormatada;
        campoLista.appendChild(campoData);

    historicoProdutos.shift();
    
    historicoProdutos.forEach(function (produto) { // metodo forEach percorre o array de historicoProdutos que foi salvo mais acima
        console.log(produto);
        
        let itensDiv = document.createElement('div');
        itensDiv.classList.add('itens');

        let nomeProduto = document.createElement('p');
        nomeProduto.innerHTML = produto.name; // Certifique-se de ter uma propriedade name no seu objeto de produto
        itensDiv.appendChild(nomeProduto);

        campoLista.appendChild(itensDiv);

        formularioHistorico.appendChild(campoLista);
    });
});