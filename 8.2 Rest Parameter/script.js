// Rest Parameter

// function myFunc(...myArgs) {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;

//   return myArgs;
// }

// console.log(myFunc(1, 2, 3, 4, 5, 6));

// function jumlah(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;

// reduce
//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlah(1, 2, 3, 4, 5));

// array destructuring

// const kel1 = ["ronaldo", "Rooney", "Mbappe", "Ibra"];
// const [ketua, wakil, ...anggota] = kel1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// object destruturing
// const team = {
//   pm: "Fikri",
//   frontEnd1: "Dzakir",
//   frontEnd2: "Asyraf",
//   backEnd: "Zamzam",
//   ux: "Sultan",
//   devops: "Muhammad",
// };

// const { pm, ...myTeam } = team;

// console.log(pm);
// console.log(myTeam);

function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "fikri", false, 10, true, "Ronaldo"));
