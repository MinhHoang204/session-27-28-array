let n = prompt ("Nhap so phan tu cua mang");
let a = prompt ("Nhap cac phan tu cua mang");

for (let i = 0; i < n; i++){
    console.log(a[i]);
}

let max = a[0], min = a[0];
for (let i = 1; i < n; i++) {
    if (a[i] > max) {
        max = a[i];
    }
    if (a[i] < min) {
        min = a[i];
    }
}

console.log("Phan tu lon nhat trong mang:", max);
conaole.log("Phan tu nho nhat trong mang:", min);