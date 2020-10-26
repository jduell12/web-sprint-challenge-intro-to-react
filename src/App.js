import React, { useState, useEffect } from "react";
import Character from "./components/Character";
import "./App.css";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [pokemonList, setPokemon] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // useEffect(() => {
  //   axios
  //     .get(" https://pokeapi.co/api/v2/pokedex/kanto")
  //     .then((res) => {
  //       console.log(res);
  //       setPokemon(res.data.pokemon_entries);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </div>
  );
};

export default App;
