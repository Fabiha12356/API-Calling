import { useState } from 'react'
import React from 'react'
import Navbaar from './assets/Components/Navbaar'
import { BrowserRouter } from 'react-router-dom'
export const App = () => {
  return (
   < BrowserRouter>
   <Navbaar />
   </BrowserRouter>
  )
}


export default App
