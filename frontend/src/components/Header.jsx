import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-20 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className='ml-0'>
          <Link to={"/"}>
            <Logo w={80} h={70} />
          </Link>
        </div>
        {/* by default hidden in mobile, show in desktop */}
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type="search" placeholder='search product...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8  flex items-center justify-center rounded-r-full '>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-7'>

          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser />
          </div>

          <div className='text-2xl relative '>
            <span><FaShoppingCart /></span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2'>
              <p className='text-sm '>0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"} className='bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700'>Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
