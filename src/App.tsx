import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { usePrefetchPokemon } from './hooks';

const PokemonData = lazy(() => import('./pages/pokemon-data'));
function App() {
  const [num, setNum] = useState(0);
  usePrefetchPokemon();
  return (
    <div className='App'>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path='/' element={<div>HI !</div>} />
          <Route path='/pokemon-data' element={<PokemonData />} />
        </Routes>
      </Suspense>
      <div>{num}</div>
      <button className='p-7 bg-red-600 m-auto' onClick={() => setNum(num + 1)}>
        inc
      </button>
    </div>
  );
}

export default App;
