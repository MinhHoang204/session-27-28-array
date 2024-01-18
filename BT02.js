let a = prompt("Nhap so nguyen a");
let b = prompt("Nhap so nguyen b");

console.log(arr[b - a + 1]);
for (let i = 0; i < b - a + 1; i++) {
    arr[i] = a + i;
}
console.log("Mang chua tat ca cac so trong khoang giua la:", a, b);

for (let i = 0; i < b - a + 1; i++) {
    console.log(arr[i]);
}