import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { IoTimeSharp } from "react-icons/io5"
import Modal from "react-modal"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(254, 215, 170, 1)',
      borderRadius: '10px',
      padding: '20px',
      overflow: 'auto',
      maxHeight: '80vh',
      minWidth: '400px', 
  }
  }

// Define the types for your meals and recipes
interface Meal {
    id: number;
    name: string;
    image: string,
    cuisine: string,
    ingredients: [],
    tags: [],
    instructions: [],
    prepTimeMinutes: number,
  }

  interface RecipeProps {
    meals: Meal[];
  }

const Recipe: React.FC<RecipeProps> = ({ meals }) => {

  const [showAll, setShowAll] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Meal | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
 
  
    const handleShowAll = () => {
      setShowAll(true)
    }
  
    const handleCollapse = () => {
      setShowAll(false)
    }
  
    const handleOpenModal = (recipe: Meal) => {
      setSelectedRecipe(recipe)
      setModalIsOpen(true)
    }
  
    const handleCloseModal = () => {
      setSelectedRecipe(null)
      setModalIsOpen(false)
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(event.target.value);
      };
  
  
    const filteredMeals = meals.filter(meal =>
      meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const renderMeals = () => {
        if (filteredMeals.length === 0) {
          return (
            <div className='flex w-full justify-center items-center h-10'>
              <p className='text-2xl font-semibold text-base-content'>No recipe found!</p>
            </div>
          )
        }
    
        let limitedMeals = filteredMeals
        if (!showAll) {
          const screenWidth = window.innerWidth
          if (screenWidth >= 1224) limitedMeals = limitedMeals.slice(0, 6)
          else if (screenWidth >= 768 && screenWidth < 1224) limitedMeals = limitedMeals.slice(0, 4)
          else if (screenWidth < 768) limitedMeals = limitedMeals.slice(0, 3)
        }
        return limitedMeals.map(item => {
          return (
            <div key={item.id} className='border p-4 shadow-xl hover:scale-105 duration-500 ease-in-out'>
              <img src={item.image} alt={item.name} title={item.name} className='w-full mb-2 object-cover h-64' />
              <div className=' text-lg font-semibold'>{item.name}</div>
              <div className='text-base-content space-x-2'>{item.cuisine}</div>
              <button className='text-base-content mt-7 rounded-full bg-yellow-500 py-2 px-4 hover:scale-110 duration-300 ease-linear font-semibold' onClick={() => handleOpenModal(item)}>
                Read More
              </button>
            </div>
          )
        })
      }
    
      return (
        <div className='lg:my-2 py-14' id='recipe'>
          <div className='text-center px-6 md:px-12'>
            <h1 className='text-3xl font-bold tracking-wider'>Popular <span className='text-yellow-500'>Recipes</span> Available</h1>
            <p className='text-base-content px-4 sm:px-6 md:px-8 sm text-sm md:text-lg font-semibold'>Your recipes Hub, find that delicious meal you tasted...</p>
          </div>
    
          <div className='flex justify-center my-10 gap-1 items-center'>
            <label htmlFor="" className='font-semibold text-lg sm:text-xl'>Search: </label>
            <input
              type='text'
              placeholder='Search recipes...'
              className='md:w-full md:max-w-md px-4 py-2 border rounded-3xl bg-base-100/75 text-base-content focus:outline-none focus:ring-2 focus:ring-yellow-500'
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-10'>
              {renderMeals()}
            </div>
    
            {filteredMeals.length > 0 && (
            <>
              {!showAll && (
                <div className=' w-52 mx-auto cursor-pointer mt-10'>
                  <div className='flex gap-2 items-center justify-center hover:text-yellow-500 text-xl duration-300 ease-linear'>
                    <FaAngleDown className=''/>
                    <button className='' onClick={handleShowAll}>
                      Show All Recipes
                    </button>
                  </div>
                </div>
              )}
    
              {showAll && (
                <div className=' w-52 mx-auto cursor-pointer mt-10'>
                  <div className='flex gap-2 items-center justify-center hover:text-yellow-500 text-xl duration-300 ease-linear'>
                    <FaAngleUp className=''/>
                    <button className='' onClick={handleCollapse}>
                      Collapse
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
          </div>
    
          <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} ariaHideApp={false} style={customStyles}>
            {selectedRecipe && (
              <div className='scroll-smooth'>
                <div className=''>
                  <div className='text-center pt-6 px-6 md:px-12'>
                    <h1 className='text-3xl font-bold tracking-wider'>{selectedRecipe.name}</h1>
                  </div>
    
                  <div className='flex justify-center mt-10'>
                    <img src={selectedRecipe.image} alt={selectedRecipe.name} className='w-full max-w-lg object-cover' />
                  </div>
    
                  <div className='flex flex-col justify-between md:flex-row item-center md:gap-20 md:px-16'>
                  <div className='mt-10 px-3 md:px-6'>
                    <h2 className='text-xl font-semibold'>Ingredients:</h2>
                    <ul className='list-disc ml-4'>
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} className='md:text-lg text-sm'>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='mt-10 px-3 md:px-6'>
                    <h2 className='text-xl font-semibold'>Tags:</h2>
                    <ul className='list-disc ml-4'>
                      {selectedRecipe.tags.map((ingredient, index) => (
                        <li key={index} className='md:text-lg text-sm'>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
    
                  </div>
    
                  <div className='mt-10 px-3 md:px-6'>
                    <h2 className='text-xl font-semibold'>Instructions:</h2>
                    <ol className='list-decimal ml-4'>
                      {selectedRecipe.instructions.map((instruction, index) => (
                        <li key={index} className='md:text-lg text-sm'>{instruction}</li>
                      ))}
                    </ol>
                  </div>
    
    
                  <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mt-10 px-3 md:px-6'>
                      <h2 className='text-xl font-semibold'>Cuisine:</h2>
                      <p>{selectedRecipe.cuisine}</p>
                    </div>
                    <div className='mt-10 px-3 md:px-6 flex flex-col items-center gap-1 '>
                      <div>
                        <p className='text-center'>Estimated Preparation Time:</p>
                      </div>
                      <div className='flex items-center gap-1'>
                        <IoTimeSharp className='font-bold text-2xl'/>
                        <p className='font-bold text-2xl'>{selectedRecipe.prepTimeMinutes}</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className='flex justify-center mt-10'>
                  <button className='text-base-content mt-7 rounded-full bg-yellow-500 py-2 px-4 hover:scale-110 duration-300 ease-linear font-semibold mb-4' onClick={handleCloseModal}>
                  Close
                  </button>
                  </div>
                </div>
    
              </div>
                )}
            </Modal>
        </div>
        )
}

export default Recipe