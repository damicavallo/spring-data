var cabecera = document.querySelector('header');
var cuerpo = document.querySelector('section');

cuerpo.setAttribute('class', 'row');

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
	
	var div = document.createElement('div');
	div.setAttribute('class', 'titulo');
	
	var myh1 = document.createElement('h1');
	myh1.textContent = jsonObj.titulo;
	div.append(myh1);
	
	var myh2 = document.createElement('h2');
	myh2.textContent = jsonObj.subtitulo;
	div.append(myh2);
	
	cabecera.append(div);
}

function theSection(jsonObj) {
	'use strict';
	var theZoos = jsonObj.zoos;
	
	for (var i = 0; i < theZoos.length; i++) {
		var myart = document.createElement('article');
		var myh3 = document.createElement('h3');
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var p3 = document.createElement('p');
		var list = document.createElement('ul');
		
		myh3.textContent = theZoos[i].zooNombre;
		p1.textContent = 'Telefono: ' + theZoos[i].telefono;
		p2.textContent = 'Dirección: ' + theZoos[i].direccion;
		p3.textContent = 'Animales: ';
		
		var animals = theZoos[i].animales;
		
		for (var j = 0; j < animals.length; j++) {
			var li = document.createElement('li');
			var h4 = document.createElement('h4');
			var p4 = document.createElement('p');
			
			h4.textContent = animals[j].especie;
			p4.textContent = 'Cantidad: ' + animals[j].cantidad;
			
			li.append(h4);
			li.append(p4);
			
			list.append(li);
		}
		
		myart.setAttribute('class', 'col-md-3');
		
		myart.append(myh3);
		myart.append(p1);
		myart.append(p2);
		myart.append(p3);
		myart.append(list);
		
		cuerpo.append(myart);
	}
	
	
}

