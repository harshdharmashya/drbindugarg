import NavBar from './NavBar';
import TopBar from './TopBar';

const Header = () => {
  return (
    <section className='sticky top-0 inset-0 z-[51]'>
      <TopBar />
      <NavBar />
    </section>
  );
};

export default Header;
