import React, { useState, useEffect,useRef } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';

function Navbar()
 {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownBlog, setDropdownBlog] = useState(false);
  const [dropdownMedia, setDropdownMedia] = useState(false);
  const [dropdownOther, setDropdownOther] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = (e) => {
    if (window.innerWidth < 960) 
    {
      setDropdown(false);
    }
    else if(e.target.id == 'me')
    {
      setDropdownMedia(true);
      setDropdownBlog(false);
      setDropdownOther(false);
      setDropdown(false);
    }
    else if(e.target.id == 'bl')
    {
      setDropdownMedia(false);
      setDropdownOther(false);
      setDropdownBlog(true);
      setDropdown(false);
    }
    else if(e.target.id == 'ot')
    {
      setDropdownMedia(false);
      setDropdownOther(true);
      setDropdownBlog(false);
      setDropdown(false);
    }
     else 
    {
      setDropdownMedia(false);
      setDropdownBlog(false);
      setDropdownOther(false);
      setDropdown(false);
    }
  };

  const onMouseLeave = (e) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };



  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EOTC
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item' id='bl'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blogs <i className='fas fa-caret-down' />
            </Link>
            {dropdownBlog && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item' id='me'
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Media <i className='fas fa-caret-down' />
            </Link>
            {dropdownMedia && <Dropdown2 />}
          </li>
         
          <li className='nav-item' id='ot'
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Others<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown3 />}
          </li>
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;
