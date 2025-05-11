import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarButton = () => {
  return (
    <div>
      <button className='px-4 py-2 rounded-full text-xl font-bold border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 hover: shadow-orange'>Hire me
        <LuArrowDownRight />
      </button>
    </div>
  )
}

export default NavbarButton
