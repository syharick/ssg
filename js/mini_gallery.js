// Галерея картинок
var width = 195; // ширина галереи
var count = 1; // количество картинок листаемых за 1 клик

var carousel = document.getElementById('art');
var list = carousel.querySelector('ul');
var listElem = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carousel.querySelector('.ls').onclick = function(){
	position = Math.min(position + width * count, 0)
	list.style.marginLeft = position + 'px';
};

carousel.querySelector('.rs').onclick = function(){
	position = Math.max(position - width * count, -width * (listElem.length - count));
	list.style.marginLeft = position + 'px';
};
// ---Галерея картинок