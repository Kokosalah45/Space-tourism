import { useQueryClient } from 'react-query';
const API_KEY_WEATHER = 'af8abd840232e16b66c8e7cea4aad763';
const getPokemons = async () => {
  const jsonData = await fetch(` https://pokeapi.co/api/v2/pokemon/ditto`);
  const res = await jsonData.json();
  return res;
};
const usePrefetchPokemon = async () => {
  const queryClient = useQueryClient();
  await queryClient.prefetchQuery('pokemons', getPokemons);
};

export default usePrefetchPokemon;
