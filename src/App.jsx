import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [listaPokemon, setListaPokemon] = useState([]);
  const cargarPokemon = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon";

    try {
      const respuesta = await axios.get(URL);
      setListaPokemon(respuesta.data.results);
    } catch (error) {
      console.error("Ocurrió un error al cargar los Pokémon:", error);
    }
  };

  return (
    <>
    <h1>Lista de Pokemones</h1>
    <button onClick={cargarPokemon}>Fetch Pokemon</button>
    <ul>
        {listaPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App;
