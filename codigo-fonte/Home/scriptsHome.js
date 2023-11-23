const buttonNav = document.getElementById('nav');
const formulario = document.getElementById('formulario');

buttonNav.addEventListener('click', function () {
  var novaURL = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/codigo-fonte/Histórico/indexHistorico.html';
  window.location.href = novaURL;
});
function newlist() {
  formulario.style.display = 'flex'
}
function closeForm() {
  formulario.style.display = 'none'
}

function validation() {
  const nome = document.getElementById('inputName').value
  const saldo = document.getElementById('inputSaldo').value

  if (!nome||!saldo) {
    return alert('Informe os campos necessários!')
  }
  if (inputSaldo < 0) {
    return alert('O saldo precisa ser maior que 0!')
  }
  saveLists({id:Math.random().toString(36).substr(2, 9),nome,saldo})
}

function saveLists(listOp) {
  let list = JSON.parse(localStorage.getItem('lists')) || [];
    list.push(listOp) 
    localStorage.setItem('lists', JSON.stringify(list)) 
}