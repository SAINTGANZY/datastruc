function sumOfDistinctElements(set1, set2) {
  const distinctSet = new Set();

  for (const element of set1) {
    if (!distinctSet.has(element)) {
      distinctSet.add(element);
    }
  }

  for (const element of set2) {
    if (!distinctSet.has(element)) {
      distinctSet.add(element);
    }
  }

  let sumOfElements = 0;
  for (const element of distinctSet) {
    sumOfElements += element;
  }

  return sumOfElements;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const sum = sumOfDistinctElements(set1, set2);
console.log(sum); // Output: 13




function dotProduct(v1, v2) {
  let dotProduct = 0;

  for (let i = 0; i < v1.length; i++) {
    dotProduct += v1[i] * v2[i];
  }

  return dotProduct;
}

function isOrthogonal(v1, v2) {
  const dotProd = dotProduct(v1, v2);
  return dotProd === 0;
}

function checkOrthogonal(n, vectorsList) {
  for (let i = 0; i < n; i++) {
    const v1 = vectorsList[i][0];
    const v2 = vectorsList[i][1];

    if (isOrthogonal(v1, v2)) {
      console.log(`Vectors ${v1} and ${v2} are orthogonal`);
    } else {
      console.log(`Vectors ${v1} and ${v2} are not orthogonal`);
    }
  }
}

// Example usage
const vectorsList = [[[1, 0, 0], [0, 1, 0]], [[1, 2, 3], [4, 5, 6]]];
checkOrthogonal(2, vectorsList);
