import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { IoMenu } from "react-icons/io5";
import SignInpop from './SignInpop';
import { CounterContext } from './CounterContext';

const Navbar = () => {
    const { counters } = useContext(CounterContext); // Get the counters object from context

    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [title, setTitle] = useState('Sign in');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setTitle("Sign in");
        setIsModalOpen(true); // Open the modal when the button is clicked
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const hasSelectedProducts = Object.values(counters).some((count) => count > 0);

    return (
        <div className='border-b shadow-lg transition-shadow duration-300'>
            {/* Desktop Navbar */}
            <div className='hidden lg:flex justify-between items-center px-32 py-5'>
                <img className='max-w-15 h-15 rounded-full' src='/logo.webp' alt="Logo" />
                <ul className='space-x-6 text-neutral-500 font-medium'>
                    <a className='hover:text-neutral-700' href="/">Home</a>
                    <a className='hover:text-neutral-700' href="#menu">Menu</a>
                    <a className='hover:text-neutral-700' href="#product">Products</a>
                    <a className='hover:text-neutral-700' href="#footer">Contact Us</a>
                </ul>
                <div className='flex items-center gap-10'>
                    {hasSelectedProducts ? (
                        <div className='relative'>
                            <img src={assets.basket_icon} alt="Basket" />
                            <div className='absolute min-w-3 min-h-3 ml-[24px] bg-red-500 rounded-full top-[-10px] items-left'></div>
                        </div>
                    ) : (
                        <img src={assets.basket_icon} alt="Basket" />
                    )}

                    <img src={assets.search_icon} alt="Search" />
                    <button onClick={handleClick} className="border border-orange-600 px-4 py-2 rounded-full">
                        {title}
                    </button>
                    {/* Show the SignInpop modal when isModalOpen is true */}
                    {isModalOpen && <SignInpop title={title} setTitle={setTitle} setIsModalOpen={setIsModalOpen} />}
                </div>
            </div>

            {/* Mobile Navbar (Hamburger Menu) */}
            <div className='flex justify-between items-center lg:hidden px-16 py-5'>
                <img className='max-w-15 h-15 rounded-full' src='/logo.webp' alt="Logo" />
                <IoMenu className='cursor-pointer' size={30} onClick={toggleMenu} />
            </div>

            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <ul className='flex flex-col items-center space-y-4 bg-white p-5'>
                    <a className='hover:text-neutral-700' href="/">Home</a>
                    <a className='hover:text-neutral-700' href="#menu">Menu</a>
                    <a className='hover:text-neutral-700' href="#product">Products</a>
                    <a className='hover:text-neutral-700' href="#footer">Contact Us</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
