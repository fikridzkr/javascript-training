// tagged tamplate

// const nama = "Fikri Dzakir";
// const umur = 18;
// function coba(s, ...rest) {
//   //   let result = "";
//   //   s.forEach((str, i) => {
//   //     result += `${str}${rest[i] || ""}`;
//   //   });

//   //   return result;

//   return s.reduce((result, str, i) => `${result}${str}${rest[i] || ""}`, "");
// }
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

//highlight

const nama = "Fikri Dzakir";
const umur = 18;
function highlight(s, ...rest) {
  //   let result = "";
  //   s.forEach((str, i) => {
  //     result += `${str}${rest[i] || ""}`;
  //   });
  //   return result;

  return s.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${rest[i] || ""} </span>`,
    ""
  );
}
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun`;
console.log(str);

document.body.innerHTML = str;
