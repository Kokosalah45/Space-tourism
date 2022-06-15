import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
const API_KEY_WEATHER = 'af8abd840232e16b66c8e7cea4aad763';
const getPokemon = async () => {
  const jsonData = await fetch(` https://pokeapi.co/api/v2/pokemon/ditto`);

  const res = await jsonData.json();
  return res;
};
const PokemonData = lazy(() => import('./pages/pokemon-data'));
function App() {
  useQuery('pokemons', getPokemon, {
    cacheTime: 1000,
    staleTime: 1000,
  });

  return (
    <div className='App'>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/pokemon-data' replace={true} />}
          />
          <Route path='pokemon-data' element={<PokemonData />} />

          <Route />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
