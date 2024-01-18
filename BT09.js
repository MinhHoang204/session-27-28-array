let numbers = [1,2,3,4,5];
let newArr = numbers;
newArr.push(8);
console.log(newArr);
console.log(numbers);

// Trong JavaScript, tham chiếu và tham trị là hai khái niệm cơ bản. Kiểu tham trị được sử dụng cho các kiểu dữ liệu nguyên thuỷ như String, Number, Boolean, BigInt, Symbol, undefined, null. Kiểu tham chiếu được sử dụng cho các kiểu dữ liệu phức tạp như Object, Array, Function.
// Trong đoạn code của bạn, biến numbers được khai báo là một mảng số nguyên gồm 5 phần tử. Sau đó, biến newArr được gán bằng giá trị của biến numbers. Do đó, newArr và numbers đều trỏ đến cùng một vùng nhớ trong bộ nhớ máy tính. Khi bạn thêm phần tử 8 vào mảng newArr, mảng numbers cũng sẽ bị thay đổi theo vì chúng trỏ đến cùng một vùng nhớ.