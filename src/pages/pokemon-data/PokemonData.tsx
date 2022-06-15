import React from 'react';
import { useQuery } from 'react-query';
const pokemonData = () => {
  const { data } = useQuery('pokemons');
  return <div>{JSON.stringify(data)}</div>;
};

export default pokemonData;
