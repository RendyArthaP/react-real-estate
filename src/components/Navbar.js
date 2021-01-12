import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import BarMenu from '../icons/BarMenu';

const Navbar = () => {
  const [buttonNavbar, setButtonNavbar] = useState(true)

  const handleButtonNavbar = () => {
    setButtonNavbar(!buttonNavbar)
  }
  return (
    <div>
      <div className="flex justify-between px-6 py-2 z-50 fixed w-full">
        <h1 className="font-montserrat font-bold text-base text-white">ELIXR</h1>
        <div className="hidden lg:flex flex-row">
          <Link to="/">
            <p className="font-montserrat mx-2 lg:mx-4 xl:mx-6 2xl:mx-8 text-white">Homes</p>
          </Link>
          <Link to="/about">
            <p className="font-montserrat mx-2 lg:mx-4 xl:mx-6 2xl:mx-8 text-white">About</p>
          </Link>
          <Link to="/rentals">
            <p className="font-montserrat mx-2 lg:mx-4 xl:mx-6 2xl:mx-8 text-white">Rentals</p>
          </Link>
        </div>
        <button className="hidden lg:block text-white font-montserrat">Contact Us</button>
        <div 
          className="flex lg:hidden cursor-pointer font-bold"
          onClick={handleButtonNavbar}
        >
          <BarMenu />
        </div>
      </div>
      {/* Mobile Version */}
      {!buttonNavbar && (
      <div className="absolute w-full h-screen top-navbar-mobile left-0 z-50">
        <div className="flex flex-col">
          <Link to="/">
            <p className="py-4 font-montserrat text-white">Homes</p>
          </Link>
          <Link to="/about">
            <p className="py-4 font-montserrat text-white">About</p>
          </Link>
          <Link to="/rentals">
            <p className="py-4 font-montserrat text-white">Rentals</p>
          </Link>
        </div>
        <button className="pt-4 font-montserrat text-white">Contact Us</button>
      </div>
      )}
      {/* End Mobile Version */}
    </div>
  )
}

export default Navbar
