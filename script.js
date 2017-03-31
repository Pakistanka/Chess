//function chessBoard () {

	var table = document.createElement('table'); //создание таблицы
	var body = document.body;

	var wrapper = document.createElement('div');//созданиие блока вокруг таблицы
	wrapper.classList.add('wrapper'); //создание класса для wrapper
	document.body.appendChild(wrapper); //добавление wrapper к body


	for (var i = 0; i < 10; i++) { //создание 10 строк
		var row = document.createElement('tr'); //строка
		if(i == 0) { // если аргумент строго равен 0, то создать класс "топ"
			row.classList.add('top');
		}


		for(var j = 0; j < 10; j++) { //создание 10 столбцов
			var cell = document.createElement('td'); //столбец
			
			if(j == 0 || j == 9) { //вызов боковых цифр
				if(i != 0 && i != 9){ //убрать 0 и 9 из столбца
					cell.innerText = i;
				}
			}

			if(i == 0 || i == 9) { //вывод букв сверху и снизу
				if(j!= 0 && j != 9) { //убрать 0 и 9 из столбца
					cell.innerText = String.fromCharCode(65 + j - 1); //кодовое обозначение буквы
					//вывод внутреннего HTML кода через string  и ASCII(CharCode 65)
			}
		}
			if(i > 0 && i < 9 && j > 0 && j < 9) {
				cell.classList.add(((i + j) % 2 == 0) ? 'black' : 'white');
		}



			row.appendChild(cell);//подчинение cell  к row
		}
		table.appendChild(row);//подчинение row  к table
	}
	wrapper.appendChild(table);//подчинение table  к wrapper

//}

/*	if(i > 0 && i < 9 && j > 0 && j < 9) {
				if(i > 6 && i < 8 && j > 6 && j < 9) {
					cell.innerText = String.fromCharCode(&#9823; + j - 1);
				}
				if(i > 7 && i < 9 && j > 6 && j < 9) {
					cell.innerText = [&#9820; &#9822; &#9821; &#9819; &#9818; &#9821; &#9820;];
					}
		}*/
