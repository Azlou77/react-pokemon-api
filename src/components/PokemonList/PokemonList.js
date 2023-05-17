import React, { useState, useEffect } from 'react';

// function PokemonList({ searchTerm = "" }) {


  function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
  
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then((response) => response.json())
        .then((data) => setPokemonData(data.results));
    }, []);
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {pokemonData.map((pokemon) => (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
              <td></td>
            
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default PokemonList;
