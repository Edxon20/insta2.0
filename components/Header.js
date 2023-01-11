import React from 'react'
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'

// import {
//     SearchIcon,
//     PlusCircleIcon,
//     UserGroupIcon,
//     HeartIcon,
//     PaperAirplaneIcon,
//     MenuIcon,
// } from "@heroicons/react/outline";

function Header() {
    return (
        <div
      className='shadow-sm border-b bg-white sticky top-0 z-50'
    >
      <div        
        className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'
      >
        {/* Left */}
        <div
          className='relative hidden lg:inline-grid w-24 cursor-pointer'
        >
          <Image 
            src='https://links.papareact.com/ocw'            
            fill
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
            style={{objectFit: 'contain'}}
          />
        </div>

        <div          
          className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'
        >
          <Image 
            src='https://links.papareact.com/jjm'            
            fill
            className='sm:hidden inline-grid'
            style={{objectFit: 'contain'}}
          />
        </div>


        {/* Middle / search input field */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <MagnifyingGlassCircleIcon className='w-5 text-gray-500' />
            </div>
            <input
              type='text'
              placeholder='Search'
              className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
              />
          </div>
        </div>

        </div>
        </div>
    )
}

export default Header