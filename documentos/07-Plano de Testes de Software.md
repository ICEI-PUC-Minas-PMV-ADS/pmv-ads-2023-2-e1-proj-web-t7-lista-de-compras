# Plano de Testes de Software

Pré-requisitos: [Especificação do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md), [Projeto de Interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/blob/main/documentos/04-Projeto%20de%20Interface.md)

Os requisitos para realização dos testes de software são:

- Site publicado na internet;
- Navegador da internet: Chrome.<br/>

Os testes funcionais a serem realizados na aplicação estão descritos a seguir.

|Caso de Teste    | Requisitos associados | Objetivo do teste | Passos | Critérios de êxito | Responsável|
|:---|:---|:---|:---|:---|:---|
| CT-01: Verificar a navegação entre as páginas Home e Histórico | - RF-07: O sistema deve permitir a navegação entre páginas| Verificar se os botões nas páginas Home e Histórico estão encaminhando corretamente para as páginas adequadas | 1. Acessar o navegador.<br/> 2. Informar o endereço do site.<br/> 3. Visualizar a página Home.<br/> 4. Clicar no botão Histórico.<br/> 5. Ser redirecionado para a página Histórico.<br/> 6. Clicar no botão Home.<br/> 7. Ser redirecionado para a página Home | Os dois botões devem encaminhar os usuários para as páginas descritas | Isadora Lara |

|Caso de Teste    | Requisitos associados | Objetivo do teste | Passos | Critérios de êxito | Responsável|
|:---|:---|:---|:---|:---|:---|
| CT-02: Verificar a criação e exclusão das listas | - RF-01: O sistema deve permitir adicionar novas listas e valor limite para elas| Verificar se a funcionalidade de criar e deletar listas com seus dados  está funcionando | 1. Acessar o navegador.<br/> 2. Informar o endereço do site.<br/> 3. Visualizar a página Home.<br/> 4. Clicar no botão Criar Lista.<br/> 5. Escrever os dados requisitados.<br/> 6. Clicar no botão Criar.<br/> 7. Será criado uma nova lista.<br/> 8.Para apagar,clicar no botão da lixeira.<br/> 9. A lista será apagada | Ao final do processo a lista deverá aparecer na pagina Home e ao clicar no botão de lixeira deverá ser retirada da Home | Samuel Filipe |

|Caso de Teste    | Requisitos associados | Objetivo do teste | Passos | Critérios de êxito | Responsável|
|:---|:---|:---|:---|:---|:---|
| CT-03: Verificar a criação de produtos nas lista | - RF-02: O sistema deve permitir adicionar produtos a lista.<br/>-RF-04: O sistema deve permitir adicionar a quantidade de um determinado produto| Verificar se a funcionalidade de criar e deletar produtos com seus dados está funcionando | 1. Acessar o navegador.<br/> 2. Informar o endereço do site.<br/> 3. Visualizar a página Home.<br/> 4. Clicar no botão referente a lista que deseja ser acessada.<br/> 5. Clicar no botão de Adicionar Produto.<br/> 6.Escrever os dados do produto,colocando a quantidade desejada.<br/> 7. Clicar no botão Salvar.<br/> 8.Será criado um novo produto com as informações enviadas.| Ao final do processo a página da lista deverá conter o novo produto com suas informações de nome,preço e quantidade e ao clicar no botão de lixeira deverá ser apagado | Pedro Nogueira |

|Caso de Teste    | Requisitos associados | Objetivo do teste | Passos | Critérios de êxito | Responsável|
|:---|:---|:---|:---|:---|:---|
| CT-04: Verificar a funcionalidade de filtrar os produtos por nome ou categoria | - RF-03: O sistema deve permitir buscar os produtos pela sua categoria ou nome| Verificar se a funcionalidade de filtrar os produtos está funcionando | 1. Acessar o navegador.<br/> 2. Informar o endereço do site.<br/> 3. Visualizar a página Home.<br/> 4. Clicar no botão referente a lista que deseja ser acessada.<br/> 5.Se a lista conter mais de dois produtos ao digitar o nome do produto desejado no campo abaixo do botão de adicionar produto,o mesmo será mostrado.<br/> 6. Para filtrar pela categoria selecione uma categoria no campo designado.<br/> 7.Clique no botão referenciado com uma lupa.<br/> 8.A lista será atualizada com todos os produtos daquela categoria<br/> | Ao final do processo os produtos que serão visíveis na tela serão somente os desejados | Pedro Nogueira |

|Caso de Teste    | Requisitos associados | Objetivo do teste | Passos | Critérios de êxito | Responsável|
|:---|:---|:---|:---|:---|:---|
| CT-05: Verificar a funcionalidade de consultar saldo| - RF-05:O sistema deve permitir consultar o saldo disponível de acordo com o valor limite| Verificar se a funcionalidade de consultar o saldo  está funcionando | 1. Acessar o navegador.<br/> 2. Informar o endereço do site.<br/> 3. Visualizar a página Home.<br/> 4.Clicar no botão referente a lista que deseja ser acessada.<br/> 5.Clicar no botão de consultar saldo.<br/> 6.O sistema mostrará um aviso contendo a situação do seu saldo.<br/> | Ao final do processo o sistema deverá mostrar um alerta sobre a situação do saldo daquela lista | Isadora Lara |

|Caso de Teste    | Requisitos associados | Objetivo do teste | Passos | Critérios de êxito | Responsável|
|:---|:---|:---|:---|:---|:---|
| CT-06: Verificar a funcionalidade de consultar o histórico recente| - RF-06:O usuário deve poder consultar um histórico recente de compras | Verificar se a funcionalidade de visualizar histórico  está funcionando | 1. Acessar o navegador.<br/> 2. Informar o endereço do site.<br/> 3. Visualizar a página Home.<br/> 4.Clicar no botão referente a lista que deseja ser acessada.<br/> 5.Após terminar de fazer a compra clicar no botão de Finalizar a Compra para enviar os dados ao histórico.<br/> 6. O sistema redirecionará o usuário para a página Histórico.<br/> 7. Na página será possível visualizar as duas ultimas compras finalizadas e suas datas | Ao final do processo será possível visualizar as duas ultimas compras finalizadas e suas datas | Vitor Galinari |
