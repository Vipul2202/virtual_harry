import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import civil from "../assets/civil.png";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ navigate }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const redirectToReview = () => {
    // Redirect to the review URL
    window.location.href = 'https://maps.app.goo.gl/kc4om2GCTMdXVHZB8';
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white py-2 bg-black'>
      <div className='mt-2 hidden sm:block'>
        <img className='h-auto w-44 ' src={civil} alt='logo' />
      </div>
      <ul className='hidden md:flex font-bold text-xl bg-gray-500 rounded-md'>
        <li onClick={() => navigate('/')} className='p-4'>Home</li>
        <a href='#companyi'><li onClick={() => navigate("/#companyi")} className='p-4'>About</li></a>
        <a href='#review'><li className='p-4' onClick={() => navigate('/#review')}>Reviews</li></a>
        <a href='#about'><li className='p-4' onClick={() => navigate('/#about')}>VR Gaming</li></a>
        <li className='p-4' onClick={() => navigate('/contact')}>Contact</li>
      </ul>
      <div>
        <button onClick={redirectToReview} className='bg-gradient-to-r from-pink-600 to-purple-700 px-4 font-bold text-black md:py-2 py-2 md:px-6 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-red-400 hover:text-white hover:font-bold'>Write your Review</button>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <div className='mt-2  md:block'>
        <img className='h-auto w-44 ' src={civil} alt='logo' />
      </div>
        <li onClick={() => navigate('/')} className='p-4'>Home</li>
        <a href='#companyi'><li onClick={() => navigate("/#companyi")} className='p-4'>About</li></a>
        <a href='#review'><li className='p-4' onClick={() => navigate('/#review')}>Reviews</li></a>
        <a href='#about'><li className='p-4' onClick={() => navigate('/#about')}>VR Gaming</li></a>
        <li className='p-4' onClick={() => navigate('/contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
