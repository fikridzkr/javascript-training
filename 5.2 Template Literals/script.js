// HTML fragments

// const siswa = {
//   nama: "Messi",
//   umur: 35,
//   nik: "223232",
//   username: "messiii",
// };

// const el = `<div class="siswa">
// <h2>${siswa.nama}</h2>
// <span class="nik">${siswa.nik}</span>
// </div>`;

// Looping
const siswa = [
  {
    nama: "Ronaldo",
    email: "ahmantap@gmail.com",
  },
  {
    nama: "Haaland",
    email: "haaland@gmail.com",
  },
  {
    nama: "Kobe Bryan",
    email: "kobee@gmail.com",
  },
];

const el = `<div class="siswa">
${siswa
  .map(
    (m) =>
      `<ul>
<li>${m.nama}</li>
<li>${m.email}</li>
</ul>`
  )
  .join("")}
</div>
`;

document.body.innerHTML = el;

//conditional
//ternary
const lagu = {
  judul: "Amin paling serius",
  penyanyi: "Nadin Amizah",
  feat: "sal priadi",
};

const element = `<div class="lagu">
<ul>
<li>${lagu.penyanyi}</li>
<li>${lagu.judul} ${lagu.feat ? `feat. (${lagu.feat})` : ""}</li>
</ul>
</div>`;

document.body.innerHTML = element;

//nested
// html fragments bersarang
const murid = {
  nama: "martial",
  semester: 5,
  matakuliah: ["Rekayasa Web", "Desain Grafis", "Pemrograman Berobjek"],
};
function cetakMataKuliah(matakuliah) {
  return `
    <ol>
        ${matakuliah.map((mk) => `<li>${mk}</li>`)}
    </ol>
    `;
}

const elements = `<div class="murid">
<h2>${murid.nama}</h2>
<span class="semester">Semester ${murid.semester}</span>
<h4>Mata Kuliah:</h4>
${cetakMataKuliah(murid.matakuliah)}
</div>`;

document.body.innerHTML = elements;
