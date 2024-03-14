import { useEffect } from 'react';

const NavBar = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#home"><h1>Pritam</h1></a>
      <div className="subNavbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;