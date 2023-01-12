import React from 'react'
import Image from "next/image";
import { MagnifyingGlassCircleIcon, 
         HomeIcon,
         Bars3Icon,
         PaperAirplaneIcon,
         PlusCircleIcon,
         HeartIcon,
         UserGroupIcon,
        } from '@heroicons/react/24/outline'

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

        {/* Rigth */}

        <div className='flex items-center justify-end space-x-4'>
            < HomeIcon  className='navBtn' />
            < Bars3Icon  className='h-6 md:hidden cursor-pointer' />
            <div className='relative navBtn'>
                < PaperAirplaneIcon className='navBtn rotate-[315deg]'/>
                <div className='absolute -top-1 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
            </div>
            < PlusCircleIcon className='navBtn' />
            < UserGroupIcon className='navBtn' />
            < HeartIcon className='navBtn' />
            < img 
                src ='https://ta.azureedge.net/p/images/usuarios/l/FfQbeg5V2Ej3XUnxffkrT7rJPa9ZHbjq0.jpg/300x300cut/' 
                alt='profilePicture'  
                className='h-10 rounded-full cursor-pointer'
                />



        </div>

            </div>
        </div>
    )
}

export default Header