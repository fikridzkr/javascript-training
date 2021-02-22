//ambil semua video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

//pilih 'js lanjutan'
let jsLanjutan = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //durasi masing masing video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi float , menit => detik
  .map((waktu) => {
    //10:30 -> [10,30] method split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //jumlahkan  detik
  .reduce((total, detik) => total + detik, 0);
console.log(jsLanjutan);
//ubah format jam menit detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;
// simpan
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

//jumlah video
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pjmlVideo = document.querySelector(".jumlah-video");
pjmlVideo.textContent = `${jmlVideo} Video`;
