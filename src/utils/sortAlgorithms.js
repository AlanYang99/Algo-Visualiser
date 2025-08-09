export const bubbleSort = (arr) => {
  const steps = [];
  const n = arr.length;
  for (var i = 0; i <= n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      steps.push({
        type: "compare",
        indices: [j, j + 1],
        array: arr,
        description: `Comparing indices ${j} and ${j + 1}`,
        line: 3,
      });
      if (arr[j] > arr[j + 1]) {
        steps.push({
          type: "swap",
          indices: [j, j + 1],
          array: arr,
          description: `Swapping indices ${j} and ${j + 1}`,
          line: 4,
        });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      steps.push({
        type: "unmark",
        indices: [j, j + 1],
        array: arr,
        description: `Unmarking indices ${j} and ${j + 1} from sorting`,
        line: 3,
      });
    }
    steps.push({
      type: "mark",
      indices: [n - i - 1],
      array: arr,
      description: `Index ${n - i - 1} has been sorted`,
      line: 5,
    });
  }
  steps.push({
    type: "finish",
    indices: [],
    array: arr,
    description: `Bubble sort is completed`,
    line: 4,
  });

  return steps;
};

export const sortAlgorithmsCode = {
  bubbleSort: `
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }`,
  insertionsort: `
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }`,
};
