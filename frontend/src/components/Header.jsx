import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className='h-20 shadow-md'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className='ml-0'>
            <Logo w={80} h={70} />
        </div>

        <div>
           <input type="search" placeholder='search producet...' />
           <div>
            <CiSearch/>
           </div>
        </div>

        <div>
          user icon and cards
        </div>
      </div>
    </header>
  )
}

export default Header
