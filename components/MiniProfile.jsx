import React from 'react'
import { useSession, signOut } from 'next-auth/react'

function MiniProfile() {

  const { data: session } = useSession();
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img src={session?.user?.image} 
        alt="profilePicture" 
        className='w-16 h-16 rounded-full border p-[2px] mt-14 ml-10' />

        <div className=''>
            <h2 className='font-bold mx-4 '>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>

        <button className='text-blue-400 text-sm font-semibold' onClick={signOut}>Sign Out</button>
    
    </div>
  )
}

export default MiniProfile

// https://ta.azureedge.net/p/images/usuarios/l/FfQbeg5V2Ej3XUnxffkrT7rJPa9ZHbjq0.jpg/300x300cut/