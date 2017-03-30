//function chessBoard () {

	var table = document.createElement('table');
	var body = document.body;

	var wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	document.body.appendChild(wrapper);


	for (var i = 0; i < 10; i++) {
		var row = document.createElement('tr'); //строка
		if(i == 0) { // если аргумент строго равен 0, то создать класс "топ"
			row.classList.add('top');
		}

		for(var j = 0; j < 10; j++) {
			var cell = document.createElement('td'); //столбец
			if (j == 0 || j == 9) { //чтобы и в первый и последний столбец
				cell.innerText = i;
			}
			cell.innerHTML = '1';
			row.appendChild(cell);//подчинение cell  к row
		}
		table.appendChild(row);//подчинение row  к table
	}
	wrapper.appendChild(table);//подчинение table  к wrapper

//}

console.log(chessBoard);


/*{
	
	var size = 10; // size of board

	var parentElem = document.body;

	var wrapper = document.createElement('div');
	wrapper.classList.add = 'wrapper';
	parentElem.appendChild(wrapper);

	for (var i = 0; i < 10; i++) {

		var div = document.createElement('div');
		div.classList.add('top', 'side');
		wrapper.appendChild(div);

		for (var j = 0; j < 10; j++) {

			var div2 = document.createElement('div');
			div2.classList.add('black', 'white')
			wrapper.appendChild(div2);
		}
	}
	
	function addLetters() {
		var letters = [' ' , 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' ']; //letters
		document.getElementsByTagName('div')[1].innerText = 'A';
		document.getElementsByTagName('div')[2].innerText = 'B';
		document.getElementsByTagName('div')[3].innerText = 'C';
		document.getElementsByTagName('div')[4].innerText = 'D';
		document.getElementsByTagName('div')[5].innerText = 'E';
		document.getElementsByTagName('div')[6].innerText = 'F';
		document.getElementsByTagName('div')[7].innerText = 'G';
		document.getElementsByTagName('div')[8].innerText = 'H';
	}

	function addNumbers() {
		var numbers = [0, 8, 7, 6, 5, 4, 3, 2, 1]; //numbers
		document.getElementsByTagName('div2')[1].innerText = 8;
		document.getElementsByTagName('div2')[2].innerText = 7;
		document.getElementsByTagName('div2')[3].innerText = 6;
		document.getElementsByTagName('div2')[4].innerText = 5;
		document.getElementsByTagName('div2')[5].innerText = 4;
		document.getElementsByTagName('div2')[6].innerText = 3;
		document.getElementsByTagName('div2')[7].innerText = 2;
		document.getElementsByTagName('div2')[8].innerText = 1;
	}


}

console.log(chessBoard);*/
