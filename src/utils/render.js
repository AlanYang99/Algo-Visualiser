export const bubbleSort = (arr) => {
  const steps = [];
  const dataCopy = [...arr];
  for (var i = 0; i <= dataCopy.length - 1; i++) {
    for (var j = 0; j < dataCopy.length - i - 1; j++) {
      steps.push(`Comparing indices ${i} and ${j}`);
      if (dataCopy[j] > dataCopy[j + 1]) {
        steps.push(`Swapping indices ${i} and ${j}`);
        var temp = dataCopy[j];
        dataCopy[j] = dataCopy[j + 1];
        dataCopy[j + 1] = temp;
      }
    }
  }
  console.log(steps);
  return dataCopy;
};

// const functions = {
//   swap: (params) => console.log(params),
// };

// Compare
// Swap
