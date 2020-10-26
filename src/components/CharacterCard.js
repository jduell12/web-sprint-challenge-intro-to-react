import React, { useEffect, useState } from "react";
import { CharCard } from "../styles/CharacterStyles";
import axios from "axios";

const CharacterCard = (props) => {
  const { pokemon } = props;

  const [types, setTypes] = useState();

  useEffect(() => {
    if (pokemon) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.entry_number}`)
        .then((res) => {
          setTypes(res.data.types);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pokemon]);

  return (
    <CharCard>
      {pokemon ? (
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.entry_number}.png`}
          alt={pokemon.pokemon_species.name}
        />
      ) : null}
      <div>
        {pokemon ? <p>{pokemon.entry_number}</p> : null}
        {pokemon ? <h2>{pokemon.pokemon_species.name}</h2> : null}
      </div>
      <ul>
        <h3>Types:</h3>
        {types
          ? types.map((type) => (
              <li key={Math.floor(Math.random() * 10000)}>{type.type.name}</li>
            ))
          : null}
      </ul>
    </CharCard>
  );
};

export default CharacterCard;
