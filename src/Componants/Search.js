import React from 'react'
import Dropdowns from './Dropdowns'


const Search = () => {
  return (
    <div className='border-2 items-center  mb-5  rounded-md  border-black flex justify-between'>
        <input type="text" name="" id="" placeholder="Search" className='w-[80%] ring-0 focus:outline-none pl-5' />
        <Dropdowns />
    </div>
  )
}

export default Search