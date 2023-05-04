
window.onload = function agregardescripcion() {

var imagenes = document.querySelector('trekkingfoto', 'natacionfoto', 'ferryfoto');
var titulo = document.querySelector('h2.card-text', 'p.card-img');

for (var i = 0; i<imagenes.length; i++) {
imagenes[i].addEventListener('click', function() {
  titulo.innerText = this.titulo;
});

imagenes[i].addEventListener('mouseout', function() {
  titulo.innerText = "";

});
  
}};