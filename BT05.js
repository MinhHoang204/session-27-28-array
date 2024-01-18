function findUniqueElement(arr) {
    let uniqueElements = new Map();
  
    // Đếm số lần xuất hiện của từng phần tử trong mảng
    for (let i = 0; i < arr.length; i++) {
      if (uniqueElements.has(arr[i])) {
        uniqueElements.set(arr[i], uniqueElements.get(arr[i]) + 1);
      } else {
        uniqueElements.set(arr[i], 1);
      }
    }
  
    // Tìm phần tử đầu tiên có số lần xuất hiện là 1
    for (let [key, value] of uniqueElements) {
      if (value === 1) {
        return key;
      }
    }
  
    return null; // Trường hợp không tìm thấy phần tử độc nhất
  }
  
  let arr = [1, 2, 3, 4, 5, 2, 4, 1];
  let uniqueElement = findUniqueElement(arr);
  
  if (uniqueElement !== null) {
    console.log("Phần tử đầu tiên độc nhất trong mảng là: " + uniqueElement);
  } else {
    console.log("Không có phần tử nào độc nhất trong mảng.");
  }