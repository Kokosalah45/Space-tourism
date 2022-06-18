import { useQuery, useQueryClient } from 'react-query';
import { useRef } from 'react';
import { getPokemons } from '../../hooks/usePrefetchPokemon';
const pokemonData = () => {
  const { data, refetch } = useQuery('pokemons', getPokemons, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return <div className='font-bold'>{JSON.stringify(data, null, 200)}</div>;
};

export default pokemonData;
