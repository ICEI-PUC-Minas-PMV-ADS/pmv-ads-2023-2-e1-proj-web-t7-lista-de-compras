# Registro de Testes de Software

Pré-requisitos: [Projeto de Interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/blob/main/documentos/04-Projeto%20de%20Interface.md), [Plano de Testes de Software](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/blob/main/documentos/07-Plano%20de%20Testes%20de%20Software.md)

Os testes funcionais realizados na aplicação web estão descritos a seguir.

### 1. CT-01: Verificar a navegação entre as páginas Home e Histórico.

Responsável: Isadora Lara.

Usuário clica no botão “Histórico” na página Home.
<figure> 
  <img src="/documentos/img/CT01a.png"
</figure> 

Ocorre o encaminhamento para a pagina Histórico. Assim, o usuário clica no botão “Home”.
<figure> 
  <img src="/documentos/img/CT01b.png"
</figure>

Ocorre o encaminhamento para a página Home.


### 2. CT-02: Verificar a criação e exclusão das listas.

Responsável: Samuel Filipe.

Usuário clica no botão "Criar lista” na página Home e escreve os dados requisitados.

<figure> 
  <img src="/documentos/img/CT02a.png"
</figure>

<figure> 
  <img src="/documentos/img/localStorageLista.jpg"
</figure>

A nova lista é criada. Para apagá-la, basta clicar no botão da lixeira. Assim, a lista é apagada corretamente.

<figure> 
  <img src="/documentos/img/CT02b.png"
</figure>

<figure> 
  <img src="/documentos/img/localStorageLixeira.jpg"
</figure>



### 3. CT-03: Verificar a criação de produtos nas lista.

Responsável: Pedro Nogueira.

O usuário clica no botão referente a lista que deseja acessar, sendo encaminhado para a página da lista.

<figure> 
  <img src="/documentos/img/CT03a.png"
</figure>

Clicando no botão de "Adicionar Produto”, pode-se inserir os dados referente ao produto. Depois, clica-se no botão salvar.

<figure> 
  <img src="/documentos/img/CT03b.png"
</figure>

Assim, o produto aparece na lista.

<figure> 
  <img src="/documentos/img/CT03c.png"
</figure>

<figure> 
  <img src="/documentos/img/localStorageProduto.jpg"
</figure>

Caso os campos sejam informados incorretamente ou estejam em branco, um alerta é exibido na tela para alertar o usuário, afirmando o tipo de erro apresentado. 

<figure> 
  <img src="/documentos/img/CT03d.png"
</figure>



### 4. CT-04: Verificar a funcionalidade de filtrar os produtos por nome ou categoria.

Responsável: Pedro Nogueira.

Na página da lista selecionada, pode-se filtrar por nome e por categoria para procurar os produtos desejados pelo usuário, nos campos indicados abaixo.

<figure> 
  <img src="/documentos/img/CT04a.png"
</figure>

Para filtrar por nome, basta digitar o nome do produto.

<figure> 
  <img src="/documentos/img/CT04b.png"
</figure>

Para filtrar por categoria, basta selecionar qual é a desejada e clicar no botão da lupa.

<figure> 
  <img src="/documentos/img/CT04c.png"
</figure>



### 5. CT-05: Verificar a funcionalidade de consultar saldo.

Responsável: Isadora Lara.

Na página da lista selecionada pelo usuário, para consultar no sistema o saldo ainda disponível para compra, basta clicar no botão “Consultar Saldo”. Assim, um alerta é exibido.

<figure> 
  <img src="/documentos/img/CT05a.png"
</figure>

Caso o saldo seja ultrapassado, o sistema informa ao usuário o valor que precisa ser retirado da lista em produtos.

<figure> 
  <img src="/documentos/img/CT05b.png"
</figure>



### 6. CT-06: Verificar a funcionalidade de consultar o histórico recente.

Responsável: Vitor Galinari.

Na página da lista selecionada, após adicionar os produtos, clique no botão “Finalizar Compra”.

<figure> 
  <img src="/documentos/img/CT06a.png"
</figure>

O usuário será encaminhado para a página Histórico, onde a lista selecionada foi salva para consultas futuras, exibindo também a data da criação da mesma.

<figure> 
  <img src="/documentos/img/CT06b.png"
</figure>

<figure> 
  <img src="/documentos/img/localStorageHistorico.jpg"
</figure>
