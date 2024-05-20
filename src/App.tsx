// import { useState } from 'react'
import Navbar from './component/Navbar'
import "../src/App.css"
import { BrowserRouter } from 'react-router-dom'
import Home from './component/Home'

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-base-100 text-base-content'>
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  )
}

export default App