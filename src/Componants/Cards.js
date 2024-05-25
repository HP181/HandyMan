import React from 'react'

const Cards = () => {
  return (
    <div className='h-48 bg-[#d9d9d9] rounded-md flex w-full p-3 gap-2 justify-around items-center border border-black'>
        <div className='bg-cyan-400 h-40 flex-[10%] justify-between items-center'>
            <div className='bg-[#a57dfc] '>
            </div>
        </div>
        <div className='flex-[40%] p-1 h-40 flex flex-col gap-2'>
            <p>service name</p>
            <p>service category</p>
            <p>service description</p>
            <p>...</p>
            <p>Rating: 0.0/5.0 (0 reviews)</p>
        </div>
        <div className='flex-[20%] p-2 h-40 flex flex-col justify-between items-end'>
            <p>$10/hr</p>
            <p>view profile</p>
        </div>
    </div>
  )
}

export default Cards