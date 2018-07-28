// Раскрывающееся меню
var menu = document.getElementById('menu'); // Получаем доступ к ul с li Новости, Статьи и др.

var traverse = function()
{
	// Обходим пункты меню
	for(var i = 0; i <= menu.children.length-1; i++)
	{
		// Переменные для двух последних else
		var sub1 = menu.children[7].children[0].children[0];
		var sub2 = menu.children[7].children[0].children[1];
		
		// Если у ребенка меню есть класс .open, то...
		if(menu.children[i].classList.contains('open'))
		{
			// Удаляем у этого ребенка и его ребенка класс .open 
			// (удаление класса .open при нажатии на другой пункт меню)
			menu.children[i].classList.remove('open');
			menu.children[i].children[0].classList.remove('open');
			
		}

		// Если открыты, вложенные в последний пункт главного меню, меню --> скрыть их
		else if(sub1.classList.contains('open'))
		{
			sub1.classList.remove('open');
			sub1.children[0].classList.remove('open');
		}
		
		// Аналогично
		else if(sub2.classList.contains('open'))
		{
			sub2.classList.remove('open');
			sub2.children[0].classList.remove('open');
		}
	}
}

menu.addEventListener("click", function(e)
{
	// Если у событийного ребенка меню есть ребенок, то...
	if(e.target.firstElementChild !== null)
	{
		// Если событийный ребенок имеет класс .open, то...
		if(e.target.classList.contains('open'))
		{
			// Удаляем у этого ребенка и его ребенка класс .open 
			// (удаление класса .open при нажатии на этот же пункт меню)
			e.target.classList.remove('open');
			e.target.firstElementChild.classList.remove('open');
		}
		else
		{
			// Иначе заботимся о том, чтобы у других пунктом меню не было класса .open
			traverse();
			
			// Добавляем событийному элементу и его ребенку класс .open
			e.target.classList.add('open');
			e.target.firstElementChild.classList.add('open');
			
				// И, если мы имеем дело с двойной вложенностью, то...
		// li Мини-игры.ul           .li Играть.   .ul id='menu'      
			if(e.target.parentElement.parentElement.parentElement == menu)
			{
				// Сохраняем у ребенка меню и его ребенка класс .open
				e.target.parentElement.parentElement.classList.add('open');
				e.target.parentElement.classList.add('open');
				
				// Если событийный элемент равен li Мини-игры или li Онлайн-игры, то...
				// Не допускаем того, чтобы дети этих элементов могли быть открыты вместе
				if(e.target == menu.children[7].children[0].children[0])
				{
					e.target.nextElementSibling.classList.remove('open');
					e.target.nextElementSibling.firstElementChild.classList.remove('open');	
				}
				if(e.target == menu.children[7].children[0].children[1])
				{
					e.target.previousElementSibling.classList.remove('open');
					e.target.previousElementSibling.firstElementChild.classList.remove('open');
				}
			} 
		}
	}
	else
	{
		// Если у ребенка меню нет детей то, просто удаляем у других детей меню класс .open
		console.log('Element does not children');
		traverse();
	}
});
// ---Раскрывающееся меню