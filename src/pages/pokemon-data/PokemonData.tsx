import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
const pokemonData = () => {
  const cache = useQuery('pokemons', {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  console.log(cache);
  return <div>{JSON.stringify(cache)}</div>;
};

export default pokemonData;
