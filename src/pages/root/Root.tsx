import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { BackgroundImagesSources } from '../../assets';
import { useWindowSizeStore } from '../../global-state';

const Root = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { windowSize }: { windowSize?: number } = useWindowSizeStore(
    (state) => state
  );

  useEffect(() => {
    if (pathname === '/') {
      navigate('/home');
    }
  }, [pathname]);

  return (
    <main
      style={{
        backgroundImage: `url(${
          windowSize !== undefined
            ? BackgroundImagesSources[pathname.slice(1)]?.[windowSize]
            : null
        })`,
      }}
      className='transition-all duration-[30ms] bg-black text-white pt-[96px] lg:pt-[120px]   min-h-screen bg-no-repeat bg-cover'
    >
      <Outlet />
    </main>
  );
};

export default Root;
