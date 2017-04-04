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

		if(i > 0 && i < 9 && j > 0 && j < 9) {
			if (i == 1) {
				var whiteFigures =  {
			A1: '&#9814;', 
			B1: '&#9816;', 
			C1: '&#9815;', 
			D1: '&#9813;',
			E1: '&#9812;',
			F1: '&#9815;',
			G1: '&#9816;',
			H1: '&#9814;'
		};
				cell.innerHTML = whiteFigures;
			}
			if (i == 2) {
				var whitePawn = {
					A2: '&#9817;', 
					B2: '&#9817;', 
					C2: '&#9817;', 
					D2: '&#9817;',
					E2: '&#9817;',
					F2: '&#9817;',
					G2: '&#9817;',
					H2: '&#9817;'
				};
				cell.innerHTML = whitePawn;
			}
			if (i == 7) {
				var blackPawn = {
					A7: '&#9823;', 
					B7: '&#9823;', 
					C7: '&#9823;', 
					D7: '&#9823;',
					E7: '&#9823;',
					F7: '&#9823;',
					G7: '&#9823;',
					H7: '&#9823;'
				};
				cell.innerHTML = blackPawn;
			}
			if (i == 8) {
				var blackFigures =  {
			A8: '&#9820;', 
			B8: '&#9822;', 
			C8: '&#9821;', 
			D8: '&#9819;',
			E8: '&#9818;',
			F8: '&#9821;',
			G8: '&#9822;',
			H8: '&#9820;'
		};
				cell.innerHTML = blackFigures;
			}
		}
			
			//whiteFigures[String.fromCharCode((65+i) + j)];


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
