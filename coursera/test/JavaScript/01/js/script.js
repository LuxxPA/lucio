function inizio(parentesi) {
	var risultato = function (x) {
		return parentesi * x;
	};
	return risultato;
}

var operation = inizio(10);
console.log(operation(12));