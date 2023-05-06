import React from 'react';
import logo from '../src/assets/logo.png'
import './Header.css'
const Header = () => {
    return (
        <header className="flex justify-between px-5 py-2 bg-black text-black fixed w-full z-10">
              <img src={logo} alt='' className="photo" >
              </img>

              
          

</header>
    );
}

export default Header;
