const HomePage = () => {
  return <div className='text-bold'>Destroy</div>;
};

export default HomePage;

// const { data, isLoading, error } = useQuery('data', getPokemons, {
//   retry: false,
//   refetchOnMount: false,
//   refetchOnWindowFocus: false,
// });
// if (isLoading) return <div>Loading...?</div>;

// if (error) return <div>{error['message']}</div>;
