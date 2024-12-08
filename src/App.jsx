import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import GeneralSettings from './components/GeneralSettings'




function App() {

  return (
    <>
      <Header/>
      <div className="flex w-full">
        <div className="w-[200px]">
        <Sidebar/>
        </div>
        <div className="w-full flex flex-col">
          <Nav/>
          <section className='bg-slate-200  p-8 h-full '>
            <GeneralSettings/>
            <div className="flex gap-3 justify-end items-end mt-3">
              <button className= 'border border-slate-600  text-[10px] px-5 py-2.5 rounded-md hover'>CANCEL</button>
              <button className='bg-green-500 text-white text-[10px] px-5 py-2.5 rounded-md'>SAVE CHANGES</button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
