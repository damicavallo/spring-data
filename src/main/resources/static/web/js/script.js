var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'http://localhost:1000/zoo/zoos';
var request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = function() {
	'use strict';
	var someZoos = request.response;
	theHeader(someZoos);
	theSection(someZoos);
};

function theHeader(jsonObj) {
	'use strict';
	var h1 = document.createElement('h1');
	h1.textContent = jsonObj.titulo;
	header.appendChild(h1);
	
	var h2 = document.createElement('h2');
	h2.textContent = jsonObj.subtitulo;
	header.appendChild(h2);
}

function theSection(jsonObj) {
	'use strict';
	var theZoos = jsonObj.zoo;
	
	for (var i = 0; i < theZoos.length; i++) {
		var articulo = document.createElement('arcticle');
		var h3 = document.createElement('h3');
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var p3 = document.createElement('p');
		var list = document.createElement('ul');
		
		h3.textContent = theZoos[i].zooNombre;
		p1.textContent = 'Telefono: ' + theZoos[i].telefono;
		p2.textContent = 'Direccion: ' + theZoos[i].direccion;
		p3.textContent = 'Animales: ';
		
		var animals = theZoos[i].animales;
		
		for (var j = 0; j < animals.length; j++) {
			var li = document.createElement('li');
			var h4 = document.createElement('h4');
			var p4 = document.createElement('p');
			
			h4.textContent = animals[j].especie;
			p4.textContent = 'Cantidad: ' + animals[i].cantidad;
			
			li.appendChild(h4);
			li.appendChild(p4);
			
			list.appendChild(li);
		}
		
		articulo.appendChild(h3);
		articulo.appendChild(p1);
		articulo.appendChild(p2);
		articulo.appendChild(p3);
		articulo.appendChild(list);
		
		section.appendChild(articulo);
	}
	
	
}

