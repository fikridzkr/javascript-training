const angka = [-1, 9, 2, 4, -4, 8, 6, -2, 5.7];

//filter = Menyeleksi isi array
const filterAngka = angka.filter(function (a) {
  return a >= 3;
});
console.log(filterAngka);

// map = memetakan elemem array
//kalikan semua angka dengan2
const mapAngka = angka.map((a) => a * 2);
console.log(mapAngka);

//reduce = menjumlahkan array
//jumlahkan seluruh elemen array
const reduceAngka = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reduceAngka);

//method chaining
//cari angka > 5
// * 3
// +

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);

console.log(hasil);
