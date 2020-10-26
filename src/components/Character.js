import React from "react";
import Card from "./CharacterCard";

const Character = (props) => {
  //   const { pokemonList } = props;

  return (
    <div>
      {/* {pokemonList.map((pokemon) => {
        return pokemon.pokemon_species.name;
      })} */}
      <Card />
    </div>
  );
};

export default Character;
