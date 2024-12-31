import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 pt-20 pb-8 px-[8vw] mt-24 flex flex-col items-center gap-5" id=' footer'>
      <div className="w-full grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-20">
        <div className=" flex flex-col items-start gap-5">
          <img className='rounded-full' src='./logo.webp' alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit mollitia nihil debitis reprehenderit voluptate ex officia consequatur eos omnis nulla!</p>
          <div className=" flex">
            <img src={assets.facebook_icon} alt="Facebook" className="w-10 mr-4 cursor-pointer" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-10 mr-4 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-10 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white">COMPANY</h2>
          <ul>
            <li className="cursor-pointer hover:underline mb-2">Home</li>
            <li className="cursor-pointer hover:underline mb-2">Menu</li>
            <li className="cursor-pointer hover:underline mb-2">Products</li>
            <li className="cursor-pointer hover:underline mb-2">Contact Us</li>
          </ul>
        </div>
        <div className=" flex flex-col items-start gap-5">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul>
            <li className="cursor-pointer mb-2">+92 7882386236</li>
            <li className="cursor-pointer mb-2">contact@Ecommerece.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 my-5 bg-gray-600 border-none" />
      <p className=" text-center">Copyright 2024 @ Ecommerece.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
