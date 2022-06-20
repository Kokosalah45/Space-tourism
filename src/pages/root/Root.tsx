import { Outlet, useNavigate, useMatch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Root = () => {
  const isMatch = useMatch('/');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathString = pathname.slice(1);
  console.log(pathString);
  const routeImage = `bg-${pathString}-background-sm md:bg-${pathString}-background-md lg:bg-${pathString}-background-lg`;
  useEffect(() => {
    if (isMatch) {
      navigate('/home', { replace: true });
    }
  }, [isMatch]);

  return (
    <main
      className={`text-white pt-[96px] lg:pt-[120px] min-h-screen ${routeImage} bg-no-repeat bg-cover`}
    >
      <Outlet />
    </main>
  );
};

export default Root;
