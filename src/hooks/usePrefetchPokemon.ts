import axios from 'axios';
import { useEffect, useRef } from 'react';
import { QueryClient, useQueryClient } from 'react-query';

import api from '../api';
const getPokemons = async () => {
  try {
    const res = await api.get('/');
    console.log(res);
    return await res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
const preFetch = async (queryClient: QueryClient): Promise<void> => {
  await queryClient.prefetchQuery('pokemons', getPokemons);
};
const usePrefetchPokemon = async (): Promise<void> => {
  const queryClientRef = useRef(useQueryClient());
  useEffect(() => {
    preFetch(queryClientRef.current);
  }, []);
};

export default usePrefetchPokemon;
export { getPokemons };
