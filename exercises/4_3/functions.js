let arrayTeste = [27, 58, 6, 7, 356, 15];

// Valor esperado no retorno da função: 4.

function biggerValueOfAnArray(array) {
  let biggerValue = 0;
  let indexBiggerValue = 0;

  for (let index in array) {
    if (array[index] > biggerValue) {
      biggerValue = array[index];
      indexBiggerValue = index;
    }
  }
  console.log("index: " + indexBiggerValue)
}

biggerValueOfAnArray(arrayTeste);