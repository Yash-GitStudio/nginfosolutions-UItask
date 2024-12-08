import React from 'react'
import logo from "../assets/logo.png"
import BKimg from "../assets/BKimg.png"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


export default function Header() {
  return (
    <header className = "flex justify-between items-center border-b-2 ">
            <div className="w-[200px] h-9 bg-slate-100 flex justify-center items-center"> 
                <img className = "w-32" src={logo} alt="" />
            </div>
            
        <div className="flex gap-5">
            <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <p>Help</p>
            </div>


            <div className=" flex items-center gap-2" >
                <img src={BKimg} alt="" className = "w-5 " />
                <p>Burger King</p>
                <IoMdArrowDropdown />
            </div>
        </div>

    </header>
  )
}
