const luasLingkaran = (r) => {
    return r*r*Math.PI;
}
console.log(luasLingkaran(7));

function pangkatDua(arrNum) {
    return arrNum.map((x) => x*x);
}

console.log(pangkatDua([1,2,3,4,5]));