// obejct literal
let siswa = {
  nama: "Neymar",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Hallo  ${this.nama}, Selamat Mkaan`);
  },
};
