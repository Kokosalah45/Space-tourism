const HomePage = () => {
  return (
    <div className='flex px-3 flex-col text-center lg:grid grid-cols-main-layout-sm  justify-center text-bold lg:items-end lg:justify-between lg:gap-[7.5rem] '>
      <section className='font-barlow_condensed mb-5 flex flex-col items-center col-start-2 lg:items-start lg:text-left lg:pb-28 '>
        <p className=' text-body sm:text-subheading-md lg:text-heading-sm'>
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className='text-dynamic-heading-xl font-bellefair'>SPACE</p>
        <p className='text-body max-w-[50ch] text-lavender-blue '>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className='col-start-3 lg:justify-self-end  font-bellefair text-heading-sm uppercase lg:pb-32'>
        <button className='active:-translate-x-1 active:translate-y-1 mainbutton-shadow transition-all shadow-[#97] text-subheading-md sm:text-heading-sm w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] lg:w-[274px] lg:h-[274px] rounded-[50%] bg-white text-black  '>
          EXPLORE
        </button>
      </section>
    </div>
  );
};

export default HomePage;

// const { data, isLoading, error } = useQuery('data', getPokemons, {
//   retry: false,
//   refetchOnMount: false,
//   refetchOnWindowFocus: false,
// });
// if (isLoading) return <div>Loading...?</div>;

// if (error) return <div>{error['message']}</div>;
