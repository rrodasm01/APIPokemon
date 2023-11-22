let pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${getRandomInt(1000)}`;

let elementoImagen = document.getElementById("imagenPKM");
let nombrePokemon2 = document.getElementById("nombre");
let numeroPokemon2 = document.getElementById("numero");

fetch(pokemonAPI)
  .then(response => response.json())
  .then(data => {

    elementoImagen.src = data.sprites.front_default;
    nombrePokemon2.innerText = data.name;
    numeroPokemon2.innerText = "#" + data.id;
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }