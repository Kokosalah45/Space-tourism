import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logoImg, hamClose, hamOpen } from '../../assets';
import ActiveLink from '../active-link';
import useToggleStore from '../../global-state/toggleStore';
import { useWindowSizeStore } from '../../global-state';

type storeTypes = {
  isOpen?: boolean;
  toggle?: (x: boolean | undefined) => void;
};
const NavBar = () => {
  const { isOpen, toggle }: storeTypes = useToggleStore((state) => state);
  const { windowSize }: { windowSize?: number } = useWindowSizeStore(
    (state) => state
  );
  useEffect(() => {
    if (windowSize !== 0) {
      toggle?.(false);
    }
  }, [windowSize]);

  return (
    <header className=' fixed w-full top-0 lg:mt-6 lg:ml-4 transition-all'>
      <div className=' flex items-center  h-[96px]'>
        <div className='bg-transparent basis-[45%] flex-shrink h-full flex items-center'>
          <Link to='/home'>
            <figure className='m-4 h-12 w-12 '>
              <img src={logoImg} className='' alt='' />
            </figure>
          </Link>
          <div className=' h-px flex-grow  translate-x-[1.35rem] z-50 hidden lg:block bg-[#979797] opacity-40'></div>
        </div>
        <nav className=' basis-[55%] h-full'>
          <ul
            className={`sm:px-5 gap-8  ${
              isOpen ? 'translate-x-0 ' : 'translate-x-full '
            } ${
              !windowSize && 'transition-all'
            } sm:gap-0  text-white text-center sm:translate-x-0 flex flex-col fixed bg-blurry-nav justify-center   lg:backdrop-blur-[1.5rem] right-0   sm:flex-row bg sm:static sm:justify-evenly   font-barlow_condensed uppercase tracking-[.3rem]    h-full text-base `}
          >
            <ActiveLink to='/home' textContent='home' />
            <ActiveLink to='/destination' textContent='destination' />
            <ActiveLink to='/crew' textContent='crew' />
            <ActiveLink to='/technology' textContent='technology' />
          </ul>
          <button
            className='text-white  sm:hidden right-8 top-8 fixed z-[999]  '
            onClick={() => toggle?.(undefined)}
          >
            <img src={isOpen ? hamClose : hamOpen} alt='toggle icon' />
          </button>
        </nav>
      </div>
    </header>
  );
};
export default NavBar;
