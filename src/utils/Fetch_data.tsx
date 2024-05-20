// import { useQuery } from '@tanstack/react-query'
// import './App.css'
// import { useState } from 'react'

// export default function FetchData() {

//   const [recipes, setRecipes] = useState([])
//   const [selectedRecipes, setSelectedRecipes] = useState('')

//   const Query = () => {
//     const { data, isLoading, isError } = useQuery({
//       queryFn : () => {
//         fetch('https://dummyjson.com/recipes').then(
//           (res) => res.json()
//         ),
//       queryKey: ['data'],
//     });

//     if (isLoading) return <div>Loading...</div>
//     if (isError) return <div>Error: error fetching data...</div>

//     const filteredRecipes = selectedRecipes ? recipes.filter((product)=> product.categories === selectedRecipes)
//       : recipes

//   return (
//     <>
//       <div>
        
//       </div>
//     </>
//   )
// }