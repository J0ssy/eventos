/*
document.getElementById('nombredelid'); <-- sólo devuelve 1 elemento
document.getElementsClassName('nombredelaclase')[0];  <-- plural 'elements'/ incluimos la posición
document.getElementsByTagName('etiqueta')[0]; 
document.querySelector('.elemento'); <-- 1er elemento que cumple la condición
document.querySelectorAll('.elemento'); <-- Todos los elementos que cumplan la condición
*/

var contenedor = document.getElementById('container');
var paragraph = document.createElement('p');
var txt = document.createTextNode('Hola soy un nodo de texto');
var paragraph2 = document.createElement('p');
var txt2 = document.createTextNode('Hola soy un nodo de texto 2');
var paragraph3 = document.createElement('p');
var txt3 = document.createTextNode('Hola soy un nodo de texto 3');
var paragraph4 = document.createElement('p');
var txt4 = document.createTextNode('Hola soy un nodo de texto 4')
//padre.appendChild(hijo);
paragraph.appendChild(txt);
paragraph2.appendChild(txt2);
paragraph3.appendChild(txt3);
paragraph4.appendChild(txt4);

contenedor.appendChild(paragraph);
contenedor.appendChild(paragraph2);
contenedor.appendChild(paragraph3);
contenedor.insertBefore(paragraph4, paragraph2); //2 parámetros (nodo nuevo, nodo)

/*
Sintaxis de Evento:
elemento.addEventListener('click', function() {
	
})
*/

//Toggle método que funciona como un switch
paragraph2.addEventListener('click', function() {
	paragraph2.classList.toggle('rojo');
	//si el elemento paragraph2 no tiene la clase se la pongo, si la tiene se la quita
})

paragraph.classList.add('azul');

paragraph3.addEventListener('click', function() {
	contenedor.removeChild(paragraph3);
})





