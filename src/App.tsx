import "../src/App.css"
import Navbar from './component/Navbar'
import {  BrowserRouter, } from 'react-router-dom'
import Recipe from './component/Recipe'
import Footer from './component/Footer.js'
import AdView from './component/AdView.js'
import About from './component/About.js'
import { useEffect, useState } from "react"
import Home from "./component/Home.js"

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipes] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  }, []);

  const filteredRecipes = selectedRecipes
  ? recipes.filter((product) => (product as { categories: string }).categories === selectedRecipes)
  : recipes;

  return (
    <BrowserRouter>
      <div className='bg-base-100 text-base-content'>
        <Navbar />
        <Home />
        <Recipe meals={filteredRecipes}/>
        <AdView />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App