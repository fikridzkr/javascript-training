// For of
// digunakan hanya pada iterable
// array
// const siswa = ["neymar", "Lewandowski", "bagus"];
// for (const m of siswa) {
//   console.log(m);
// }

// string
// const nama = "fikri";
// for (const n of nama) {
//   console.log(n);
// }

//

// const siswa = ["neymar", "Lewandowski", "bagus"];
// for (const [i, m] of siswa.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// Nodelist
// const nama = document.querySelectorAll(".nama");
// console.log(nama);

// for (const n of nama) {
//   console.log(n.innerHTML);
// }

// arguments
// function jumlahAngka() {
//   //   return arguments.reduce((a, i) => a + i);

//   let jumlah = 0;

//   for (const a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

// forin
// digunakan pd enumerable

const siswa = {
  nama: "Fikri",
  umur: "18",
  email: "fikri@yahoo.com",
};

for (const i in siswa) {
  console.log(siswa[i]);
}
