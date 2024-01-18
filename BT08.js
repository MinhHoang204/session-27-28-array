function getUniqueElements(arr) {
    return [...new Set(arr)];
  }
  
  let inputArray = [1, 2, 2, 3, 4, 4, 5];
  let uniqueElementsArray = getUniqueElements(inputArray);
  console.log(uniqueElementsArray);