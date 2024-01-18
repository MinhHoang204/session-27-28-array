let n = prompt ("Nhap so phan tu cua mang");
console.log(arr[n]);

for (let i = 0; i < n; i++) {
    console.log("Nhap phan tu thu:", i+1);
    console.log(arr[i]);
}

let even_count = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
        even_count++;
    }
}

console.log(even_arr[even_count]);
let j = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
        even_arr[j] = arr[i];
         j++;
    }
}

console.log("Mang moi sau khi xoa tat ca cac phan tu le la:");
for (let i = 0; i < even_count; i++) {
    console.log(even_arr[i]);
}