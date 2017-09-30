var treeHeight = 0;

function drawTree(n) {
	licznik = n - 1;
	star = '';

	for (i = 0; i < n; i++) {
		for (l = 0; l < licznik; l++) {
			star += ' ';
		}
		star += '* ';
		for (k = 0; k < i; k++) {
				star += '* ';
		}	
		console.log(star);
		star = '';
		licznik--;
	}
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
