const Navbar = () => {
  return (
    <header className='sticky top-0 z-10 w-full flex justify-between items-center bg-black sm:px-20 px-4 py-4'>
      <div className='flex '>
        <span className='cursor-pointer text-xl text-white md:text-2xl'>
          Image
        </span>
        <span className='text-white cursor-pointer text-2xl'>.Inary</span>
      </div>
    </header>
  );
};

export default Navbar;
