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

document.addEventListener('click', function (event) { 
  if (event.target.classList.contains('bt-delete') || event.target.closest('.bt-delete')) { 
      let button = event.target.closest('.bt-delete');
      let parentDiv = button.parentNode; 
      let listName = parentDiv.querySelector('.nameL').textContent; 
     

      let lists = JSON.parse(localStorage.getItem('lists')) || []; 
      let listD = lists.find(L => L.nome === listName)  

      if (listD) { 
          lists = lists.filter(L => L !== listD)  

      }

      localStorage.setItem('lists', JSON.stringify(lists)) 
      location.reload() 
  }
})

document.addEventListener('click',function (event) {
  if(event.target.classList.contains('list')){
    const id = event.target.children[1].innerHTML
    window.location.href = `codigo-fonte/Listas/indexListas.html?id=${id}`
   //window.location.href = `https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/codigo-fonte/Listas/indexListas.html?id=${id}`
  }
})