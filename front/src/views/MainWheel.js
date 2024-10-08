import React from 'react'
import Wheel from '../components/Wheel'
import './page.css'
import { ContextProvider } from '../context/ContextProvider'


export const MainWheel = ()=> {
  return (
    
    <ContextProvider>
      <div className = {"page-main"}>
        <Wheel />
      </div>
    </ContextProvider>
  )
}
