import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackgroundImagesSources } from '../../assets';

const Root = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentInnerWidthIndex, setCurrentInnerWidthIndex] = useState(2);

  useEffect(() => {
    if (pathname === '/') {
      navigate('/home');
    }
  }, [pathname]);

  useEffect(() => {
    const windowResizeListener = window.addEventListener('resize', (e) => {
      if (window.innerWidth < 568) {
        setCurrentInnerWidthIndex(0);
      } else if (window.innerWidth >= 568 && window.innerWidth < 768) {
        setCurrentInnerWidthIndex(1);
      } else {
        setCurrentInnerWidthIndex(2);
      }
    });
    return () => windowResizeListener;
  }, [currentInnerWidthIndex]);

  return (
    <main
      style={{
        backgroundImage: `url(${
          BackgroundImagesSources[pathname.slice(1)]?.[currentInnerWidthIndex]
        })`,
      }}
      className='transition-all duration-[30ms] bg-black text-white pt-[96px] lg:pt-[120px]   min-h-screen bg-no-repeat bg-cover'
    >
      <Outlet />
    </main>
  );
};

export default Root;
