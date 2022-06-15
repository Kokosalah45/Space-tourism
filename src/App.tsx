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
          <Route
            path='/'
            element={<Navigate to='/pokemon-data' replace={true} />}
          />
          <Route path='/pokemon-data' element={<PokemonData />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
