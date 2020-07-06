// Add your functions here

function map(array, fN) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(fN(array[i]));
  }
  return newArray;
}

function reduce(array, fN, startingValue) {
  let value = null;
  if (startingValue === undefined) {
    value = array[0];
  } else {
    value = startingValue;
  }
  //   for (let i = 0; i < array.length; i++) {
  //     // value += array[i];
  //     value = fN(array[i], value);
  //   }
  let i = startingValue ? 0 : 1;
  while (i < array.length) {
    value = fN(array[i], value);
    i++;
  }
  return value;
}
