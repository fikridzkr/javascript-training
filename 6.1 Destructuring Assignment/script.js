//Destructuring Variabel

// Destucturing Array
const perkenalan = ["halo", "nama", "saya", "Neymar"];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(salam);
// console.log(nama);
// const [salam, satu, dua, tiga] = perkenalan;

// Skip items
// const [salam, , , tiga] = perkenalan;
// console.log(tiga);

// swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// //rest parameter
// const [a, ...values] = [1, 2, 3];
// console.log(values);

// Destruvturing Object
// const siswa = {
//   nama: "dzakirr",
//   umur: 18,
// };

// const { nama, umur } = siswa;
// console.log(nama);
// ({ nama, siswa } = {
//   nama: "dzakirr",
//   umur: 18,
// });

// console.log(nama);
// console.log(nama);
// assign ke variabel baru
// const siswa = {
//   nama: "dzakirr",
//   umur: 18,
// };

// const { nama: n, umur: u } = siswa;
// console.log(n);

// menambah niali default value
// const siswa = {
//   nama: "dzakirr",
//   umur: 18,
//   email: "email321@gmail.com",
// };

// const { nama, umur, email = "email@email.com" } = siswa;
// console.log(email);

// memberi default value
const siswa = {
  nama: "dzakirr",
  umur: 18,
  email: "email321@gmail.com",
};

const { nama: n, umur: u, email: e = "email@email.com" } = siswa;
console.log(n);
console.log(u);
console.log(e);
