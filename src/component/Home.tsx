import { Link } from "react-router-dom"
import Hero from "/assets/heroImage.png"


const Home = () => {
    return (
      <div className='mb-12 lg:mb-0 text-base-content mt-16' id='hero'>
          <div className='lg:h-[90vh] flex items-center justify-between flex-col-reverse lg:flex-row px-8 lg:px-16 gap-12'>
              <div className='flex flex-col gap-6 w-full lg:w-3/5'>
                  <h1 className='md:text-5xl text-3xl font-bold'>
                    Unleash Flavorful <span className='text-yellow-500/80'>Adventures</span> : Your Culinary Journey <span className='text-yellow-500/80'>Starts Here!</span>
                  </h1>
                  <p className='italic font-medium justify-evenly'>
                    Welcome to a world where every meal is an adventure! At <span className='text-yellow-600'>Recipe Whisperer</span>, we believe that cooking should be a joyous experience, filled with tantalizing 
                    flavors and nourishing ingredients. Our curated collection of recipes is designed to delight your taste buds with a variety of cuisines from around the globe. 
                    But it’s not just about taste; our recipes are  <span className="underline text-yellow-600">crafted with your health in mind</span>, using fresh, wholesome ingredients to help you feel your best. 
                    Whether you're a seasoned chef or just starting out, our step-by-step guides and expert tips will help you grow your culinary skills and confidence in the kitchen. 
                    Join us on this delicious journey and transform the way you <span className='text-yellow-600'>cook and eat</span>!
                    </p>
                  <Link to="#recipe" className='btn btn-warning w-fit px-10 py-2 lg:mt-4 rounded-3xl font-medium tracking-wide hover:scale-110 duration-500 ease-linear'><i>Dive in...</i></Link>
              </div>
              <div className="hidden lg:block lg:w-2/5">
                  <img src={Hero} alt="" className='lg:w-[1070px] object-cover h-full rounded-lg w-20'/>
              </div>
          </div>
      </div>
    )
  }
  
  export default Home