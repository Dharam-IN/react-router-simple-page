import React from 'react';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
        <nav className='bg-gray-500 px-8 py-3 flex justify-between'>
            <div className="flex items-center gap-4">
                <IoMenu className='text-3xl text-white cursor-pointer'/>
                <div className="text-white">
                    <h3>Logo</h3>
                </div>
            </div>
            <div className="">
                <div className="w-12 h-12 cursor-pointer rounded-full overflow-hidden">
                    <img src="https://avatars.githubusercontent.com/u/122605883?v=4" alt="user" />
                </div>
            </div>

            {/* Sidebar Menu */}
        </nav>
    </>
  )
}

export default Header