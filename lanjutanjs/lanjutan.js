let lanjut = {
  nama: "husni",
  umur: 21,
  kota: "pemalang",
  hobi: ["masak", "chess", "main game"],
  hari: {
    senin: "hari pertama",
    selasa: "hari kedua",
  },
};

console.log(lanjut);
console.log(lanjut.hobi);
console.log(lanjut["umur"]);
console.log(lanjut.hari);

// Array berisi string
let buah = ["Apel", "Jeruk", "Mangga"];

// Array berisi number
let nilai = [80, 95, 77, 100];

// Array bisa berisi tipe data campuran
let campuran = ["Hello", 25, true, null];

console.log(buah);
buah.push("matoa", "pelem");
console.log(buah);

buah.pop();
console.log(buah);

buah.shift();
console.log(buah);

buah.unshift("cecek");
console.log(buah);

const cobi = buah.slice(0, 2);
console.log(cobi);

let hewan = ["ayam", "ikan", "kuda", "sapi", "bebek"];
for (let i = 0; i < hewan.length; i++) {
  document.querySelector("#masuk").textContent = `ini jumlah isinya adalah ${
    i + 1
  }`;
}

// hewan.forEach((hayawan, i) => {
//   document.querySelector(
//     "#masuk"
//   ).textContent = `Coba pake forEach hasilnya adalah ${i + 1}, sama aja kan`;
// });

let framework = {
  js: "vue",
  python: "django",
  html: "css",
};

let hasil = "";
for (let key in framework) {
  hasil += `key apakah bisa ${key}<br>`;
}

document.querySelector(".cek").innerHTML = hasil;

function sapa(nama) {
  document.querySelector(".fun").textContent = `Hiiiiiiiiiiiiii ${nama}`;
}
sapa("husni");
