import { IoFastFood } from 'react-icons/io5'
import { RiTeamLine } from 'react-icons/ri'
import { GrWorkshop } from 'react-icons/gr'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <div className='lg:my-2 py-14' id='about'>
      <div className='text-center px-6 md:px-12'>
        <h1 className='text-3xl md:text-5xl font-bold tracking-wide'>About <span className='text-orange-500'>Recipe Whisperer.</span></h1>
        <p className='text-base-content px-4 sm:px-6 md:px-8 sm text-sm md:text-lg font-semibold'>Learn more about our recipe company and our charge!</p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center md:gap-20 mt-10 px-10'>
        <div className='flex flex-col items-center md:w-1/2'>
          <IoFastFood className="text-3xl font-extrabold w-48 md:w-64 mb-6"/>
          <h2 className='text-xl font-semibold'>About</h2>
          <p className='text-base-content text-sm md:text-lg'>Recipe Whisperer is your go-to source for delectable, health-conscious recipes from around the globe.</p>
        </div>

        <div className='flex flex-col items-center md:w-1/2'>
          <RiTeamLine className='text-3xl font-extrabold w-48 md:w-64 mb-6'/>
          <h2 className='text-xl font-semibold'>The Whisperers</h2>
          <p className='text-base-content text-sm md:text-lg'>Our dedicated team of culinary experts and food enthusiasts is passionate about bringing you the best in home cooking</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center md:gap-20 mt-10 px-10'>
        <div className='flex flex-col items-center md:w-1/2'>
          <GrWorkshop className='text-3xl font-extrabold w-48 md:w-64 mb-6' />
          <h2 className='text-xl font-semibold'>Our Job</h2>
          <p className='text-base-content text-sm md:text-lg'>Our mission is to transform cooking into a joyous, accessible experience for everyone, everywhere</p>
        </div>

        <div className='flex flex-col items-center md:w-1/2'>
          <FaAward className='text-3xl font-extrabold w-48 md:w-52 mb-6'/>
          <h2 className='text-xl font-semibold'>Our Values</h2>
          <p className='text-base-content text-sm md:text-lg'>We uphold quality, innovation, and sustainability, ensuring every recipe inspires and delights.</p>
        </div>
      </div>
    </div>
  )
}

export default About