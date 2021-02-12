// 2.1 EXECUTION CONTEXT, HOSITING & SCOPE

//kasus 1
// var nama = "fikri";
// var umur = 18;

// function Hello() {
//   return `Halo my name is ${nama}, i'm ${umur} years old`;
// }

// Hello();

// kasus 2
// function a() {
//   console.log("aaa");

//   function b() {
//     console.log("bbbb");

//     function c() {
//       console.log("ccc");
//     }
//     c();
//   }
//   b();
// }

// a();

function satu() {
  var nama = "neymar";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "eric";
satu();
dua("ronaldo");
console.log(nama);
