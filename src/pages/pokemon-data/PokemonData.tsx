import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
const pokemonData = () => {
  const cache = useQuery('pokemons', {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  console.log(cache.data);
  return (
    <div className='font-bold'>{JSON.stringify(cache.data, null, 200)}</div>
  );
};

export default pokemonData;
