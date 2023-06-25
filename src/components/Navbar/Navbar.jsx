import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {FaArrowCircleUp} from 'react-icons/fa'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const hideNavbar = () => {
    setToggleMenu(false)
  }
  return (
  <div className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'>
        <a href="#home">Home</a>
      </li>
      <li className='p__opensans'>
        <a href="#about">About</a>
      </li>
      <li className='p__opensans'>
        <a href="#menu">Menu</a>
      </li>
      <li className='p__opensans'>
        <a href="#awards">Awards</a>
      </li>
      <li className='p__opensans'>
        <a href="#findus">Contact</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Login / Register</a>
      <div />
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
    <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (  // Only if the toggle is true it'll show the content below
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallsreen_links'>
            <li className='p__opensans'>
              <a href="#home" onClick={hideNavbar}>Home</a>
            </li>
            <li className='p__opensans'>
              <a href="#about" onClick={hideNavbar}>About</a>
            </li>
            <li className='p__opensans'>
              <a href="#menu" onClick={hideNavbar}>Menu</a>
            </li>
            <li className='p__opensans'>
              <a href="#awards" onClick={hideNavbar}>Awards</a>
            </li>
            <li className='p__opensans'>
              <a href="#contact" onClick={hideNavbar}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>
)};

export default Navbar;
