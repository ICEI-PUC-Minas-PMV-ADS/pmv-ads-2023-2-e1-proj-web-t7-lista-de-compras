const buttonNav=document.getElementById('nav');

buttonNav.addEventListener('click', function() {
    var novaURL = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/codigo-fonte/Home/indexHome.html'; 
    window.location.href = novaURL;
});

document.addEventListener('DOMContentLoaded', function () {
    let historicoProdutos = JSON.parse(localStorage.getItem('historicoProdutos1')) || []; //Recuperar a lista enviada
    
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
        
        let itensDiv = document.createElement('div');
        itensDiv.classList.add('itens');

        let nomeProduto = document.createElement('p');
        nomeProduto.innerHTML = produto.name; // Certifique-se de ter uma propriedade name no seu objeto de produto
        itensDiv.appendChild(nomeProduto);

        campoLista.appendChild(itensDiv);

        formularioHistorico.appendChild(campoLista);
    });

    let historicoProdutos2 = JSON.parse(localStorage.getItem('historicoProdutos2')) || []; //Recuperar a lista enviada
    
    let dataFormatada2 = historicoProdutos2[0];
    
    let formularioHistorico2 = document.getElementById('formularioHistorico2'); 

    formularioHistorico2.innerHTML = '';

    let campoLista2 = document.createElement('div');
        campoLista2.classList.add('campos-listas');

    let campoData2 = document.createElement('input');
        campoData2.disabled = true;
        campoData2.classList.add('campo-data');
        campoData2.type = 'text';
        campoData2.placeholder = dataFormatada2;
        campoLista2.appendChild(campoData2);

    historicoProdutos2.shift();
    
    historicoProdutos2.forEach(function (produto) { // metodo forEach percorre o array de historicoProdutos que foi salvo mais acima
        
        let itensDiv = document.createElement('div');
        itensDiv.classList.add('itens');

        let nomeProduto = document.createElement('p');
        nomeProduto.innerHTML = produto.name; // Certifique-se de ter uma propriedade name no seu objeto de produto
        itensDiv.appendChild(nomeProduto);

        campoLista2.appendChild(itensDiv);

        formularioHistorico2.appendChild(campoLista2);
    });
});