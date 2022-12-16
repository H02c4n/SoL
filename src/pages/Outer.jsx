import React from 'react'
import { Outlet } from 'react-router-dom'
import LangCategory from '../components/LangCategory'

const Outer = () => {
  return (
    <div className='d-flex flex-column align-items-center mt-2'>
        <div className="row">
             <LangCategory/>
        </div>
        <Outlet/>
        
    </div>
  )
}

export default Outer