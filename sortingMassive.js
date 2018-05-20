<script>

var test1 = [120, 150, 160, 201, 203, 180, 202];
var test2 = [121, 150, 163, 207, 203, 189, 222];

//сортировка массива по возрастанию
var sortingMassiveUp = function(massive){
	var lengthMassive = massive.length;
	var minValue;
	for (var i = 0; i <= lengthMassive - 2; i++) {
		var minValue = massive[i];
		for (var j = i + 1; j <= lengthMassive - 1; j++) {
			if (massive[j] < minValue) {
			minValue = massive[j];
			var swap = massive[i];
			massive[i] = minValue;
			massive[j] = swap;}
		}
	}
}
// сортировка массива по убыванию
var sortingMassiveDown = function(massive){
	var lengthMassive = massive.length;
	var minValue;
	for (var i = 0; i <= lengthMassive - 2; i++) {
		var minValue = massive[i];
		for (var j = i + 1; j <= lengthMassive - 1; j++) {
			if (massive[j] > minValue) {
			minValue = massive[j];
			var swap = massive[i];
			massive[i] = minValue;
			massive[j] = swap;}
		}
	}
}

sortingMassiveUp(test1);
sortingMassiveDown(test2);

console.log(test1);
console.log(test2);

</script>
