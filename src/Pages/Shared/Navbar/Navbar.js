import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container absolute w-full text-white h-20 px-16 grid grid-cols-3 justify-between items-center">
      <div className="logo-container">
        <Link to='/' className="text-3xl font-bold ">JOB<span className="logo-2">DRILL</span></Link>
      </div>
      <div>
        <ul className="nav-links flex justify-between font-semibold">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Blog</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </ul>
      </div>
      <div className="text-right">
        <Link to='/signin' className="signin-btn px-5 py-2 text-white rounded-full font-semibold"><button>Sign in</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
