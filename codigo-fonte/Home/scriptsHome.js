const buttonNav=document.getElementById('nav');
const formulario=document.getElementById('formulario');

buttonNav.addEventListener('click', function() {
    var novaURL = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t7-lista-de-compras/codigo-fonte/Hist%C3%B3rico/indexHistorico.html'; 
    window.location.href = novaURL;
});
function newlist () {
  formulario.style.display='flex' 
}
        