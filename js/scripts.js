var treeHeight = 0;

function drawTree(n) {
	var star = '';
	var licznik = 0;

	for (var i = n; i > 0; i--) {
		for (var l = 0; l < i - 1; l++) {
			star += ' ';
		}
		star += '* ';
		for (var k = 0; k < licznik; k++) {
			star += '* ';
		}	
		console.log(star);
		star = '';
		licznik++;
	}
	//Dla licznik = n
	/*for (var i = 0; i < n; i++) {
		for (var l = 0; l < licznik - 1; l++) {
			star += ' ';
		}
		star += '* ';
		for (var k = 0; k < i; k++) {
			star += '* ';
		}	
		console.log(star);
		star = '';
		licznik--;
	}*/
}

function getNumber() {
	return prompt("Podaj wielkość choinki:");
}

do {
	treeHeight = getNumber();
	drawTree(treeHeight);
	if (treeHeight < 0) alert("Tylko liczby całkowite, dodatnie!");
	else if (treeHeight == 0) alert("Nie lubisz świąt, co ponuraku?");	
}
while(treeHeight < 0);