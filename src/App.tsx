import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { usePrefetchPokemon } from './hooks';

const PokemonData = lazy(() => import('./pages/pokemon-data'));
function App() {
  usePrefetchPokemon();
  return (
    <div className='App'>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path='/' element={<div>Hp !</div>} />
          <Route path='pokemon-data' element={<PokemonData />} />

          <Route />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
