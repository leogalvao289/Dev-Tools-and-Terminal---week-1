import React, { useEffect } from "react";

function PokemonMoves() {

  useEffect(() => {
    console.log("Fetching data from POKEMON");

  fetch(
    `https://pokeapi.co/api/v2/pokemon/1/`
  )
    .then((res) => res.json())
    .then(((data) => {
      setpokemonData(data)

  if (pokemonData) {
    return (
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
})


export default PokemonMoves;
