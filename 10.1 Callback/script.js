// Callback
// Synchronous Callback

// function halo(nama) {
//   alert(`halo ${nama}`);
// }
// function tampilPesan(c) {
//   const nama = prompt("Masukkan Nama: ");
//   c(nama);
// }

// tampilPesan((nama) => {
//   alert(`Halo ${nama}`);
// });

// console.log(mulai);
// pemainBola.forEach((m) => {
//   console.log(m.nama);
// });
// console.log(selesai);

// Asynchrounous Callback
function getData(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 400) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

// console.log("mulai");
// getData(
//   "data.json",
//   //success
//   (results) => {
//     const pemain = JSON.parse(results);
//     pemain.forEach((p) => {
//       console.log(p.nama);
//     });
//   },
//   //error
//   () => {}
// );
// console.log("selesai");

// JQUERY
console.log("mulai");
$.ajax({
  url: "data.json",
  success: (pemain) => {
    pemain.forEach((p) => {
      console.log(p.nama);
    });
  },
  error: (err) => {
    console.log(err.responseText);
  },
});
console.log("selesai");
