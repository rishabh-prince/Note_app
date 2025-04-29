import React from 'react'
import notes_logo from "../assets/note_logo.jpeg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 border-b-2 border-zinc-400 p-5 flex justify-between items-center'>
      <div className="flex items-center gap-4">
       <img src={notes_logo} alt="" width={70} />
       <h1 className='text-3xl font-bold'>Notes</h1>
       </div>
       <div className=" flex w-1/3 justify-around">
        <Link to={"/"} className='text-blue-500'>Home</Link>
        <Link to={"/notes"} className='text-blue-500'>Notes</Link>
       </div>
    </div>
  )
}

export default Navbar