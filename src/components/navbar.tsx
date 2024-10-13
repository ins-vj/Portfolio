"use client"
import React from 'react'

const Navbar = () => {
  return (
<nav className="flex items-center justify-between bg-[#272729] p-10 shadow-lg">
  {/* Left side: VIKRANT */}
  <div className="text-2xl font-bold text-white tracking-wide">VIKRANT</div>

  {/* Right side: buttons */}
  <div className="space-x-6">
    <button className="text-white font-medium hover:text-gray-300 transition duration-200">
      Home
    </button>
    <button className="text-white font-medium hover:text-gray-300 transition duration-200">
      About
    </button>
    <button className="text-white font-medium hover:text-gray-300 transition duration-200">
      Projects
    </button>
    <button className="text-white font-medium hover:text-gray-300 transition duration-200">
      Contact
    </button>
  </div>
</nav>

  )
}

export default Navbar