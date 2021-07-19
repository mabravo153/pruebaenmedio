const arrayManipulation = (): number => {
  let inicialArray: number[][] = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ];

  let finalArray: number[] = [0, 0, 0, 0, 0];

  let maximo: number = Number.MIN_VALUE;
  let current: number = 0;

  inicialArray.forEach((element) => {
    let indiceInicial: number = element[0] - 1;
    let indiceFinal: number = element[1] - 1;
    let valorInsertar: number = element[2];

    finalArray[indiceInicial] += valorInsertar;

    if (indiceFinal + 1 < finalArray.length) {
      finalArray[indiceFinal + 1] -= valorInsertar;
    }
  });

  finalArray.forEach((element) => {
    current += element;

    if (current >= maximo) {
      maximo = current;
    }
  });

  return maximo;
};

console.log(arrayManipulation());
