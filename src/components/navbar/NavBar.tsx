import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/shared/logo.svg';
const NavBar = () => {
  return (
    <header className=' fixed w-full top-0 lg:mt-6 lg:ml-4 transition-all'>
      <div className=' flex items-center m-auto  h-[96px]'>
        <div className='flex-grow bg-transparent h-full flex items-center'>
          <Link to='/home'>
            <figure className='p-4'>
              <img src={logoImg} className='h-12 w-12' alt='' />
            </figure>
          </Link>
          <div className='flex-grow h-px w-px translate-x-10 z-40 hidden lg:block bg-[#979797] opacity-40'></div>
        </div>
        <nav className='flex-grow bg-blurry-nav backdrop-blur-lg h-full'></nav>
      </div>
    </header>
  );
};
export default NavBar;
