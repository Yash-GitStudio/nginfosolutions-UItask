import React from 'react'
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";

export default function Nav() {
  return (
    <nav className='flex w-full h-12 justify-between px-5 py-2 '>
        <div className="flex gap-10 ">

            <div className="flex relative items-center gap-1.5 text-sm text-gray-500 group">
                <GoGraph/>
                <p>Dashboard</p>
                <div className="bg-green-500  h-0.5 rounded-full absolute -bottom-[8px] ease-in-out duration-700 -left-2 w-0 group-hover:w-28"></div>
            </div>

            <div className="flex relative items-center gap-1.5 text-sm text-gray-500 group">
                <IoMdSettings/>
                <p>Settings</p>
                <div className="bg-green-500  h-0.5 rounded-full absolute -bottom-[8px] ease-in-out duration-700 -left-2 w-0 group-hover:w-24"></div>
            </div>


        </div>




        <div className="flex gap-3 ">
            <div className="flex items-center gap-1.5 text-slate-300 text-[10px]">
            <FaRegClock />
            <p>TIME SETTINGS</p>
            </div>
            <button className= 'bg-orange-500 text-white text-[10px] px-5 rounded-md hover'>MULTI-LOCATION SETTINGS</button>
            <button className='bg-green-500 text-white text-[10px] px-5 rounded-md'>BACK</button>
        </div>



    </nav>
  )
}
