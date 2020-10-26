import React from "react";
import Card from "./CharacterCard";

const Character = (props) => {
  const { pokemonList } = props;

  return (
    <div>
      {pokemonList
        ? pokemonList.map((pokemon) => {
            return <Card key={pokemon.entry_number} pokemon={pokemon} />;
          })
        : null}
      <Card />
    </div>
  );
};

export default Character;
