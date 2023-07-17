import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>Home</Link>
        </div>
        <div className='links'>
          <Link href='/search'>Search</Link>
          <Link href='/favourites'>Favourites</Link>
          <Link href='/city'>City</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;