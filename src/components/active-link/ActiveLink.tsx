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
    <li className='p-5 relative sm:p-3 sm:flex sm:items-center'>
      <Link to={to}>{textContent}</Link>
      <div
        className={`absolute h-full w-[4px] right-0 top-0   sm:w-full sm:bottom-0 sm:top-[unset] sm:right-[unset] sm:left-0 sm:h-[4px] transition-all ${
          !isMatch && ' h-0 sm:w-0'
        }  bg-white  rounded-sm`}
      ></div>
    </li>
  );
};

export default ActiveLink;
