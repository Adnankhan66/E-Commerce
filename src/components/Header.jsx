import React from 'react'

const Header = () => {
  return (
    <div className="relative px-8 sm:px-16 lg:px-32 my-10">
      <img className="w-full h-auto" src="/Header-Img.jpg" alt="Header Image" />
  
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center sm:left-[10%] sm:translate-x-0 sm:max-w-[60%] md:max-w-[50%]">
        <h2 className="text-xl text-left pl-5 sm:text-2xl md:text-3xl lg:text-5xl font-normal sm:font-semibold lg:font-extrabold text-white mb-4">
          Order your favourite Product here
        </h2>
        
        <div className='pl-5'>
        <button className="flex items-start justify-start max-w-xs sm:max-w-sm md:max-w-md p-2 bg-white rounded-full">
          View Menu
        </button>
        </div>
      </div>
    </div>

  )
}

export default Header
