let n = prompt("Nhap so phan tu cua mang");
console.log(a[n], chan[n], le[n]);
let i = 0; j = 0;
for (let i = 0; i < n; i++) {
    console.log("Nhap phan tu thu:", i + 1);
    if (a[i] % 2 == 0) {
        chan[j] = a[i];
        j++;
    } else {
        le[k] = a[i];
        k++;
    }
}
console.log("Mang ban dau:");
for (let i = 0; i < n; i++) {
    console.log(a[i]);
}
console.log("Mang chua so chan:");
for (let i = 0; i < j; i++) {
    console.log(chan[i]);
}
console.log("Mang chua so le:");
for (let i = 0; i < k; i++) {
    console.log(le[i]);
}