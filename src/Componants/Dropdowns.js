import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Dropdowns = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left w-[20%] !m-0 !p-0 h-10 rounded-md ">
    <div>
      <button
        type="button"
        className="inline-flex justify-center items-center w-full !m-0 !p-0 rounded-r-md bg-[#d9d9d9] border-gray-300 shadow-sm h-10 text-sm font-medium text-black hover:bg-[#d9d9d9] hover:cursor-pointer focus:outline-none"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        All Categories
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

    {isOpen && (
      <div
        className="origin-top-right absolute right-0 border-t-2 text-center shadow-lg bg-[#d9d9d9]  ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="" role="none">
          <Link
            to="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#e2e0e0]"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Account settings
          </Link>
          <Link
            to="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#e2e0e0]"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            Support
          </Link>
          <Link
            to="#"
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#e2e0e0]"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            License
          </Link>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-[#e2e0e0]"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    )}
  </div>
  
  )
}

export default Dropdowns