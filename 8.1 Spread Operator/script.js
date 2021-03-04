// Spread Operator
// memecah iterable menjadi single element
// const siswa = ["fikri", "rashford", "rooney"];
// console.log(...siswa);

// menggabungkan 2 array
// const pemain = ["fikri", "rashford", "rooney"];
// const pelatih = ["ole", "ade", "zidane"];
// const orang = [...pemain, "pep", ...pelatih];
// console.log(orang);

// mengcopy array
// const pemain = ["fikri", "rashford", "rooney"];
// const pemain1 = [...pemain];
// pemain1[0] = "drogba";
// console.log(pemain1);
// console.log(pemain);

// const siswa = document.querySelectorAll("li");
// const arrsiswa = [];
// for loop tradisional
// for (let i = 0; i < siswa.length; i++) {
//   arrsiswa.push(siswa[i].textContent);
// }

// array.map()
// const arrsiswa = [...siswa].map((m) => m.textContent);

// console.log(arrsiswa);

const nama = document.querySelector(".name");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);

nama.innerHTML = huruf;
