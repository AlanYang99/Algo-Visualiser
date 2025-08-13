import { color } from "d3";

export const bubbleSort = (arr) => {
  const steps = [];
  const n = arr.length;
  const colorMap = {};
  steps.push({
    type: "start",
    indices: [],
    array: [...arr],
    description: `Starting bubble sort`,
    line: -1,
    colorMap: { ...colorMap },
  });
  for (var i = 0; i <= n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      colorMap[j] = "yellow";
      colorMap[j + 1] = "yellow";
      steps.push({
        type: "compare",
        indices: [j, j + 1],
        array: [...arr],
        description: `Comparing indices ${j} and ${j + 1}`,
        line: 2,
        colorMap: { ...colorMap },
      });
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        steps.push({
          type: "swap",
          indices: [j, j + 1],
          array: [...arr],
          description: `Swapping indices ${j} and ${j + 1}`,
          line: 3,
          colorMap: { ...colorMap },
        });
      }
      delete colorMap[j];
      delete colorMap[j + 1];
      steps.push({
        type: "unmark",
        indices: [j, j + 1],
        array: [...arr],
        description: `Unmarking indices ${j} and ${j + 1} from sorting`,
        line: -1,
        colorMap: { ...colorMap },
      });
    }
    colorMap[n - i - 1] = "green";
    steps.push({
      type: "mark",
      indices: [n - i - 1],
      array: [...arr],
      description: `Index ${n - i - 1} has been sorted`,
      line: -1,
      colorMap: { ...colorMap },
    });
  }
  steps.push({
    type: "finish",
    indices: [],
    array: [...arr],
    description: `Bubble sort is completed`,
    line: -1,
    colorMap: { ...colorMap },
  });
  console.log(steps);
  return steps;
};

// export const insertionsort = (arr) => {
//   const steps = [];
//   const colorMap = {};
//   let n = arr.length;

//   steps.push({
//     type: "start",
//     indices: [],
//     array: [...arr],
//     description: "Starting insertion sort",
//     line: -1,
//     colorMap: { ...colorMap },
//   });
//   for (let i = 1; i < n; i++) {
//     let current = arr[i];
//     colorMap[i] = "yellow";
//     steps.push({
//       type: "set",
//       indices: [i],
//       array: [...arr],
//       description: "Setting index to be compared",
//       line: -2,
//       colorMap: { ...colorMap },
//     });
//     let j = i - 1;
//     while (j > -1 && current < arr[j]) {
//       arr[j + 1] = arr[j];
//       steps.push({
//         type: "shift",
//         indices: [j + 1, j],
//         array: [...arr],
//         description: `Shifting index ${j} to one position to the right`,
//         line: -2,
//         colorMap: { ...colorMap },
//       });
//       j--;
//     }
//     arr[j + 1] = current;
//     steps.push({
//       type: "insert",
//       indices: [j + 1],
//       array: [...arr],
//       description: `Inserting index into thing`,
//       line: -2,
//       colorMap: { ...colorMap },
//     });
//   }
//   return steps;
// };

export const sortAlgorithmsCode = {
  bubblesort: `
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
    function insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
          arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
      }
      return arr;
    }`,
  selectionsort: `
    function insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
          arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
      }
      return arr;
    }`,
};

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

export const insertionsort = (arr) => {
  const steps = [];
  const n = arr.length;
  const colorMap = {};

  steps.push({
    type: "start",
    indices: [],
    array: [...arr],
    description: "Starting insertion sort",
    line: -1,
    colorMap: { ...colorMap },
  });
  colorMap[0] = "green";
  steps.push({
    type: "mark",
    indices: [0],
    array: [...arr],
    description: `Marking index ${0} as part of sorted section`,
    line: -1,
    colorMap: { ...colorMap },
  });
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    colorMap[i] = "red";
    steps.push({
      type: "select",
      indices: [i],
      array: [...arr],
      description: `Selecting index ${i} for comparison`,
      line: 2,
      colorMap: { ...colorMap },
    });
    // Select index i for comparison (action)

    let j = i - 1;
    // Select the first to the left (action)

    while (j >= 0) {
      // Compare index j with the current index i
      colorMap[j] = "yellow";
      steps.push({
        type: "compare",
        indices: [j],
        array: [...arr],
        description: `Selecting index ${j} for comparison`,
        line: 4,
        colorMap: { ...colorMap },
      });

      if (arr[j] > key) {
        // Swap index j with the current index of key (j+1)

        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];

        colorMap[j] = "red";
        colorMap[j + 1] = "green";

        steps.push({
          type: "swap",
          indices: [j, j + 1],
          array: [...arr],
          description: `Swapping indices ${j} and ${j + 1}`,
          line: 5,
          colorMap: { ...colorMap },
        });

        j = j - 1;
        if (j < 0) {
          colorMap[0] = "green";
          steps.push({
            type: "insert",
            indices: [0],
            array: [...arr],
            description: `Inserting into index 0 as part of sorted section`,
            line: 7,
            colorMap: { ...colorMap },
          });
        }
      } else {
        // Insertion is complete
        colorMap[j] = "green";
        colorMap[j + 1] = "green";
        steps.push({
          type: "insert",
          indices: [j, j + 1],
          array: [...arr],
          description: `Inserting into index ${
            j + 1
          } as part of sorted section`,
          line: 7,
          colorMap: { ...colorMap },
        });
        break;
      }
    }
  }

  // Insertion sort is complete
  return steps;
};

export const selectionsort = (arr) => {
  const steps = [];
  const n = arr.length;
  const colorMap = {};

  // Start
  steps.push({
    type: "start",
    indices: [],
    array: [...arr],
    description: `Selection Sort Start`,
    line: -1,
    colorMap: { ...colorMap },
  });
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    colorMap[lowest] = "purple";
    steps.push({
      type: "set",
      indices: [lowest],
      array: [...arr],
      description: `Set index ${lowest} as smallest`,
      line: -1,
      colorMap: { ...colorMap },
    });
    // Mark as the next smallest
    for (let j = i + 1; j < arr.length; j++) {
      // Compare the lowest and j
      colorMap[j] = "yellow";
      steps.push({
        type: "compare",
        indices: [j],
        array: [...arr],
        description: `Compare index ${j} and the current smallest`,
        line: -1,
        colorMap: { ...colorMap },
      });
      if (arr[j] < arr[lowest]) {
        // Mark j as lowest now
        let temp = lowest;
        colorMap[temp] = "steelblue";
        lowest = j;
        colorMap[lowest] = "purple";
        steps.push({
          type: "set",
          indices: [temp, lowest],
          array: [...arr],
          description: `Set index ${lowest} as smallest and unset index ${temp} as smallest`,
          line: -1,
          colorMap: { ...colorMap },
        });
      } else {
        colorMap[j] = "steelblue";
        steps.push({
          type: "unmark",
          indices: [j],
          array: [...arr],
          description: `Remove ${j} from sorting`,
          line: -1,
          colorMap: { ...colorMap },
        });
      }
    }

    // Swap i and the lowest index
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    steps.push({
      type: "swap",
      indices: [i, lowest],
      array: [...arr],
      description: `Swapping index ${i} and ${lowest}`,
      line: -1,
      colorMap: { ...colorMap },
    });

    colorMap[lowest] = "steelblue";
    colorMap[i] = "green";
    steps.push({
      type: "sort",
      indices: [i, lowest],
      array: [...arr],
      description: `Mark index ${i} as sorted`,
      line: -1,
      colorMap: { ...colorMap },
    });

    // Mark i as sorted
  }

  steps.push({
    type: "done",
    indices: [],
    array: [...arr],
    description: `Selection Sort End`,
    line: -1,
    colorMap: { ...colorMap },
  });

  return steps;
  // End
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      // Swap
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}

function insertionSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
