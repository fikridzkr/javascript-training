// Promise
// janji(yes,no)

// states(fulfilled/rejected/pending)
// function callback ( resolve/ reject/finally)
// aksi (then/ catch)

// then = resolve atau terpnuhi
// catch =  reject atau tidak terpenuhi

// contoh 1
// let ditepati = true;
// const promise1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji ditepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// promise1
//   .then((res) => console.log("Okeee" + res))
//   .catch((err) => console.log("Not" + err));

// console.log(promise1);

// contoh 2
let ditepati = true;
const promise2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("ditepati setelah bebrapa waktu");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("tidak ditepati setelah bebrapa waktu");
    }, 2000);
  }
});

console.log("mulai");
// prosesnya
// console.log(promise2.then(() => console.log(promise2)));
promise2
  .finally(() => console.log("selesai menunggu"))
  .then((res) => console.log("Okeee" + res))
  .catch((err) => console.log("Not" + err));
console.log("selesai");

// promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Dilan",
        sutradara: "fikri",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "bekasi",
        temp: 26,
      },
    ]);
  }, 500);
});

film.then((res) => console.log(res));
cuaca.then((res) => console.log(res));

Promise.all([film, cuaca]).then((res) => console.log(res));
