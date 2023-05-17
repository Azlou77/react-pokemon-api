import React, { useState, useEffect } from 'react';

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((response) => response.json())
      .then((data) => setPokemonData(data.results));
  }, []);

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filteredPokemon.map((pokemon) => (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
              <td>{pokemon.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}