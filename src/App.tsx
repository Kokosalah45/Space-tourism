import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useWindowSize } from './hooks';
import Root from './pages/root';
import NavBar from './components/navbar';
const HomePage = lazy(() => import('./pages/home-page'));
function App() {
  useWindowSize();

  return (
    <div className='App'>
      <NavBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='/home' element={<HomePage />} />
            <Route path='/technology' element={<HomePage />} />
            <Route path='/crew' element={<HomePage />} />
            <Route path='/destination' element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
