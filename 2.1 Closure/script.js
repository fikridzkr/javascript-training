// function init() {
//   let nama = "Fikri";
//   let umur = 33;
//   //   closure
//   function tampilNama() {
//     console.log(nama);
//     console.log(umur);
//   }
//   tampilNama();
// }
// init();

// function salam(waktu) {
//   return function (nama) {
//     console.log(`Haloo ${nama}, Selamat ${waktu}, Semoga hari mu menyenangkan`);
//   };
// }

// let pagi = salam("Pagi");
// let siang = salam("Siang");
// let malam = salam("malam");

// pagi("Fikri");

let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

let a = add();
console.log(a());
console.log(a());
