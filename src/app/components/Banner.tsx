import React from 'react'
import Image from 'next/image';


export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-tr from-black to-gray-700 font-sans px-6 py-12 mb-7'>
     <div className='absolute inset-0 opacity-20'>
      <Image
      src={'/bannerimg.jpg'}
      alt='delicious burger banner'
      width={300} height={100}
      
      
      className='w-full h-full object-cover'/>
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center text-white '>
        <h2 className='text-white sm:text-5xl font-bold mb-4'>
        Discover Our Menu
        </h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl'>
          Shop Now For Exclusive Burger Discount!
        </p>
        <button type='button'
        className='bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300'>
          Exciting Deals Launch at12PM!

        </button>
        
      

     </div>
     </div>
  )
}


