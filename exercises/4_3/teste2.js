let arrayTeste = ['José', 'L', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function biggerName(array) {

  let biggerName = array[0];
  let indexBiggerName = 0;

  for (let index in array) {
    if (array[index].length > biggerName.length) {
      biggerName = array[index]
      indexBiggerName = index;
    }
  }
  console.log("valor: " + biggerName + " index: " + indexBiggerName)
}

biggerName(arrayTeste);
