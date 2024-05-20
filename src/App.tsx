// import { useEffect } from 'react'
import "../src/App.css"
import "./utils/Fetch_data.js"
import Navbar from './component/Navbar'
import {  BrowserRouter, } from 'react-router-dom'
import Home from './component/Home'
import Recipe from './component/Recipe'
import Footer from './component/Footer.js'
import AdView from './component/AdView.js'
import About from './component/About.js'


// useEffect(() => {
//   FetchData()
// }, [])


const App = () => {
  return (
    <BrowserRouter basename=''>
      <div className='bg-base-100 text-base-content'>
        <Navbar />
        <Home />
        <Recipe/>
        <AdView />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App