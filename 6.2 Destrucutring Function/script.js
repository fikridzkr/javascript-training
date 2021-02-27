// distructuring function return value

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);

// console.log(tambah);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { tambah, kurang, kali, bagi } = kalkulasi(2, 3);

// console.log(kurang);

// distructuring function args
const siswa = {
  nama: "Ronaldo",
  umur: 34,
  email: "ron@email.com",
  nilai: {
    tugas: 89,
    uts: 79,
    uas: 74,
  },
};

function cetak({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo my name is ${nama}, i'm ${umur} years old and my final test score is ${uas} `;
}

console.log(cetak(siswa));
