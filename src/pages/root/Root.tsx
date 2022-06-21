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

  // style={{
  //   backgroundImage: `url(${
  //     windowSize !== undefined
  //       ? BackgroundImagesSources[pathname.slice(1)]?.[windowSize]
  //       : null
  //   })`,
  // }}
  return (
    <main className='transition-all duration-[30ms] relative z-[99] bg-black text-white pt-[96px] lg:pt-[120px]   min-h-screen bg-no-repeat bg-cover'>
      <Outlet />
      <picture className='fixed top-0 right-0 z-[-99]'>
        <source
          className='object-cover object-center'
          media='(min-width : 768px)'
          srcSet={BackgroundImagesSources[pathname.slice(1)]?.[2]}
        />
        <source
          className='object-cover object-center'
          media='(min-width : 640px)'
          srcSet={BackgroundImagesSources[pathname.slice(1)]?.[1]}
        />

        <img
          className='min-h-screen w-screen object-cover object-center '
          src={BackgroundImagesSources[pathname.slice(1)]?.[0]}
          alt=''
        />
      </picture>
    </main>
  );
};

export default Root;
