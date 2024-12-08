import React, { useState } from 'react'
import { GiGears } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import shadowfax from "../assets/shadowfax.png"
import grab from "../assets/grab.png"
import { PiNumberSquareOneBold } from "react-icons/pi";
import { PiNumberSquareTwoBold } from "react-icons/pi";
import ScheduleTable from './Table';
import gg from "../assets/gg.png";
import de from "../assets/de.jpeg";

export default function GeneralSettings() {
    const [isOn, setIsOn] = useState(false);
    const [isOn1, setIsOn1] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [grabbtn, setGrab] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const toggleSwitch1 = () => {
    setIsOn1(!isOn1);
  };
  return (
    <section className='bg-white rounded-sm'>
        <div className="flex justify-between p-3 border-b-2">
            <div className="font-semibold flex gap-1 items-center">
                <GiGears />
                <p>GENERAL SETTINGS</p>
            </div>

            <div className="font-semibold flex gap-1 items-center">
            <IoLocationSharp />
                <p>DWARAKA, <span className='text-green-400'>NEW DELHI</span></p>
            </div>
        </div>

      <div className="pt-7 px-14">

            <h3 className='font-semibold text-slate-700'>Request Services</h3>

            <div className="flex gap-8 items-end py-3 ml-5">

                <div className="flex flex-col items-center">
                    <img className = "w-28" src={shadowfax} alt="" />
                    {
                      !shadow ? (
                        <button 
                        onClick={() => setShadow(!shadow)}
                        className='border-2 border-blue-400 rounded-sm px-3 text-blue-500'>Request Service</button>

                      ) : (
                        <p>Service requested</p>
                      )
                    }
                </div>

                <div className="flex flex-col items-center">
                    <img className = "w-16" src={grab} alt="" />
                    {
                      !grabbtn ? (
                        <button
                        onClick={() => setGrab(!grabbtn)}
                         className='border-2 border-blue-400 rounded-sm px-3 text-blue-500'>Request Service</button>

                      ): (
                        <p>Service requested</p>
                      )
                    }
                </div>

            </div>
            
            <hr className='border-[1.45px]'/>

        </div>

      <div className="pt-7 px-14">

        <h3 className='font-semibold text-slate-700'>Active/Inactive Services</h3>

    <div className="flex gap-8 items-end py-3 ml-5">

    <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between w-[350px]">
            <p>Delhivery</p>
            <div
      className={`w-16 h-4 flex items-center rounded-sm p-1 cursor-pointer ${
        isOn1 ? 'bg-green-500' : 'bg-gray-300'
      }`}
      onClick={toggleSwitch1}
    >
      <div
        className={`bg-white w-6 h-5 rounded-sm shadow-md transform transition-transform ${
          isOn1 ? 'translate-x-8' : ''
        }`}
      ></div>
    </div>
            </div>
        <div className="flex items-center justify-between w-[350px]">
            <p>Grab</p>

            <div
      className={`w-16 h-4 flex items-center rounded-sm p-1 cursor-pointer ${
        isOn ? 'bg-green-500' : 'bg-gray-300'
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`bg-white w-6 h-5 rounded-sm shadow-md transform transition-transform ${
          isOn ? 'translate-x-8' : ''
        }`}
      ></div>
    </div>
                </div>

        
    </div>

    <div className="flex flex-col items-center">
       
    </div>

</div>

<hr className='border-[1.45px]'/>

        </div>

        <div className="pt-7 px-14">

<h3 className='font-semibold text-slate-700'> Priority Settings</h3>
<p className='text-slate-400 text-[8px]'>Drag the service against the priority you want to assign to it</p>

<div className="mt-3 ">

    <div className="flex mb-3 items-center gap-10">
    <PiNumberSquareOneBold className='text-xl' />
    <img className="w-24" src={gg} alt="" />
    </div>

    <div className="flex mb-3 items-center gap-10 ">
    <PiNumberSquareTwoBold className='text-xl' />
    <img className="w-24" src={de} alt="" />
    </div>

</div>

<hr className='border-[1.45px]'/>

        </div>

        <div className="pt-7 px-14">
        <h3 className="text-lg font-semibold text-slate-700">Time Settings</h3>
        <p className='text-orange-400 mt-1.5 font-semibold text-[15px]' >DelhiVery</p>
        <ScheduleTable/>
        </div>

        
    </section>
  )
}
