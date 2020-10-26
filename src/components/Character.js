import React from "react";

const Character = (props) => {
  const { pokemonList } = props;

  return (
    <div>
      {pokemonList.map((pokemon) => {
        return pokemon.pokemon_species.name;
      })}
    </div>
  );
};

export default Character;
