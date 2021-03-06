import path from 'path';
import React from 'react';
import { useMatch, Link, useLocation } from 'react-router-dom';

interface propTypes {
  to: string;
  textContent: string;
}

const ActiveLink = ({ to, textContent }: propTypes) => {
  const { pathname } = useLocation();
  const isMatch = pathname === to;
  return (
    <li className='px-12 py-2 group relative sm:p-3 sm:flex sm:items-stretch'>
      <Link className='sm:flex sm:items-center' to={to}>
        {textContent}
      </Link>
      <div
        className={`absolute h-full  w-[2px] right-0 top-0   sm:w-full sm:bottom-0 sm:top-[unset] sm:right-[unset] sm:left-0 sm:h-[2px] transition-all ${
          !isMatch && ' h-0 sm:w-0'
        }   bg-white  rounded-sm`}
      ></div>
      {!isMatch && (
        <div className='absolute h-full w-[2px] right-0 top-0 bg-[#9f9f9f] hidden group-hover:block sm:w-full sm:bottom-0 sm:top-[unset] sm:right-[unset] sm:left-0 sm:h-[2px] transition-all'></div>
      )}
    </li>
  );
};

export default ActiveLink;
