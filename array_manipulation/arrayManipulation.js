var arrayManipulation = function () {
    var inicialArray = [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 100],
    ];
    var finalArray = [0, 0, 0, 0, 0];
    var maximo = Number.MIN_VALUE;
    var current = 0;
    inicialArray.forEach(function (element) {
        var indiceInicial = element[0] - 1;
        var indiceFinal = element[1] - 1;
        var valorInsertar = element[2];
        finalArray[indiceInicial] += valorInsertar;
        if (indiceFinal + 1 < finalArray.length) {
            finalArray[indiceFinal + 1] -= valorInsertar;
        }
    });
    finalArray.forEach(function (element) {
        current += element;
        if (current >= maximo) {
            maximo = current;
        }
    });
    return maximo;
};
console.log(arrayManipulation());
