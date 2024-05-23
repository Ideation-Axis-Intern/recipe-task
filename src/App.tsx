import "../src/App.css";
import { ErrorInfo, useEffect, useState } from "react";
import {  BrowserRouter, } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home.js";
import Recipe from "./component/Recipe";
import AdView from "./component/AdView.js";
import About from "./component/About.js";
import Footer from "./component/Footer.js";

const App = () => {
  const [error, setError] = useState();
  const [ isLoading, setIsLoading ] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipes] = useState('');

  useEffect(() => {

    setIsLoading(true);

    try {
      fetch('https://dummyjson.com/recipes')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
      /* typescript-eslint-disable @typescript-eslint/no-explicit-any */
    } catch (err: any) {
      setError(err);
    }finally{
      setIsLoading(false);
    }
    
  }, []);
  
    if(isLoading) return <div className="items-center text-center">Loading data...</div>;
    if(error) return <div className="items-center text-center">Error fetching data...</div>;



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