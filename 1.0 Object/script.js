// obejct literal
// let siswa1 = {
//   nama: "Neymar",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo  ${this.nama}, Selamat Makan`);
//   },
// };
// let siswa2 = {
//   nama: "Paul Walker",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo  ${this.nama}, Selamat Makan`);
//   },
// };

// function declaration
// const methodSiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`hallo ${this.nama}, selamat makan  `);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`haloo ${this.nama},selamat bermain `);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`haloo ${this.nama} ,selamat tidur`);
//   },
// };

// function Siswa(nama, energi) {
//   let siswa = Object.create(methodSiswa);
//   siswa.nama = nama;
//   siswa.energi = energi;
//   return siswa;
// }

// let ronaldo = Siswa("ronaldo", 10);

// // constructor function
// //menggunakan keyword new
// function Siswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`hallo ${this.nama}, selamat makan  `);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`haloo ${this.nama},selamat bermain `);
//   };
// }

// let fikri = new Siswa("fikri", 10);

// Object.create()
// function Siswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }
// Siswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `halo ${this.nama} selamat makan`;
// };

// Siswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `halo ${this.nama} selemat makan`;
// };

// Siswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `haloo ${this.nama} selamat tidur`;
// };
// let fikri = new Siswa("fikri", 10);

// versi class
class Siswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `halo ${this.nama} selamat makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `halo ${this.nama} selemat makan`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `haloo ${this.nama} selamat tidur`;
  }
}

let rooney = new Siswa("rooney", 10);
