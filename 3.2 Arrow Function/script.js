//Constructor function

// const siswa = function () {
//   this.nama = "ronaldo";
//   this.umur = 17;
//   this.sayHello = function () {
//     console.log(`Nama Saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
// };
// const fikri = new siswa();

//Arrow Function
// const siswa = function () {
//   this.nama = "ronaldo";
//   this.umur = 17;
//   this.sayHello = () => {
//     console.log(`Nama Saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
// };
// const fikri = new siswa();

// Object Literal
// const siswa = {
//   nama: "Fikri",
//   umur: 17,
//   sayHello: () => {
//     console.log(this);
//   },
// };

//////
// const siswa = function () {
//   this.nama = "ronaldo";
//   this.umur = 17;
//   this.sayHello = function () {
//     console.log(`Nama Saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const fikri = new siswa();

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
