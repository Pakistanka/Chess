function chessBoard () {
	
	var size = 10; // size of board
	var letters = [' ' , 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' ']; //letters
	var numbers = [0, 8, 7, 6, 5, 4, 3, 2, 1]; //numbers

	var parentElem = document.body;
	body.classList.add('parent');

	var field = createElement("table");
	field.className = "tbl";
	field.innerHTML ="<table></table>";

	var tableRow = createElement("tr");
	tableRow.className = "tblrow";
	tableRow.innerHTML = "<tr></tr>"
	for (var i = 0; i <= tableRow; i++) {
		field.appendChild("tr");
	}

	var tableH = createElement("th");
	tableH.className = "tableh";
	tableH.innerHTML = "<th></th>";
	for (var j = 0; j <= tableH; j++) {
		field.appendChild("th");
	}

	 


	
}

console.log(chessBoard);
