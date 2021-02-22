// Template Literal

const nama = Ronaldo;
const umur = 35;
console.log(`Halo, nama saya ${nama}, dan umur saya ${umur} tahun.`);

// Embedded Expression
const x = 11;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// html fragments

const siswa = {
  nama: "Messi",
  umur: 35,
  nik: "223232",
  username: "messiii",
};

const el = `<div class="siswa">
<h2>${siswa.nama}</h2>
<span class="nrp">${siswa.nik}</span>
</div>`;
