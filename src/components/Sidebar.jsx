import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { RxGlobe } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { TbDeviceMobileShare } from "react-icons/tb";
import { FaWalkieTalkie } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdTv } from "react-icons/md";
import { MdOutlineTableBar } from "react-icons/md";
import { list } from 'postcss';



const tabs =[{icon:<AiOutlineHome/>,Name:"Home"},
            {icon:<RxGlobe/>,Name:"Website builder"},
            {icon:<IoCartOutline/>,Name:"Online Order"},
            {icon:<RxGlobe/>,Name:"CRM"},
            {icon:<TbDeviceMobileShare/>,Name:"tap"},
            {icon:<RxGlobe/>,Name:"POS"},
            {icon:<FaWalkieTalkie />,Name:"VN"},
            {icon:<BsCashCoin/>,Name:"Payments Integrations"},
            {icon:<TiDocumentText/>,Name:"TPAI"},
            {icon:<CiDeliveryTruck/>,Name:"Delivery Integrations"},
            {icon:<RxGlobe/>,Name:"Pulse"},
            {icon:<MdTv/>,Name:"Ofder Relay Products"},
            {icon:<MdOutlineTableBar/>,Name:"Table Reservations"},
            {icon:<MdTv/>,Name:"Offers"}
            ]



export default function Sidebar() {
  return (
   <section className = "bg-slate-950 w-[200px] h-full text-white font-extralight">

    <ul>
        {tabs.map((item, index) => ( 
          <li key={index} className='relative group flex items-center text-sm gap-2 py-3 px-6 hover:bg-slate-800 duration-300'>
            {item.icon}
            <p>{item.Name}</p>
            <div className="bg-green-500  w-1 rounded-full absolute left-0 ease-in-out duration-300 h-0 group-hover:h-10"></div>
        </li>
      ))}
    </ul>
       
   </section>
  )
}
