// //1
document.getElementById("gen-1").innerText = "Generasión 1 Pokimon";

// //2
const poke1 = (document.querySelectorAll(
  "body > main > div:nth-child(6)",
)[0].style.backgroundColor = "black");

// //3
console.log(window.location.href);

// //4
console.log(window.location.hostname);

// //5
console.log(document.querySelectorAll("img"));

// //6
const nick = document.querySelectorAll("img");

for (const cage of nick) {
  cage.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

//7
const pokes = document.querySelectorAll("a.itype.flying");
for (const volador of pokes) {
  console.log(volador.closest(".infocard-lg-data.text-muted"));
  volador.closest(".infocard-lg-data.text-muted").style.backgroundColor =
    "salmon";
}
