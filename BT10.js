function maxSubarray(arr) {
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];
    let currentStart = 0;
    let start = 0;
    let end = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i] + maxEndingHere) {
        maxEndingHere = arr[i];
        currentStart = i;
      } else {
        maxEndingHere += arr[i];
      }
  
      if (maxEndingHere > maxSoFar) {
        maxSoFar = maxEndingHere;
        start = currentStart;
        end = i;
      }
    }
  
    return arr.slice(start, end + 1);
  }
  
  let inputArray = [1, -3, 2, 1, -1];
  let maxSubarrayResult = maxSubarray(inputArray);
  console.log(maxSubarrayResult);