import { Link } from 'react-router-dom';
import '../index.css';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { IoFastFood } from 'react-icons/io5';

export default function Nav (){
    return (
        <nav className="fixed top-0 left-0 navbar bg-base-300 bg-opacity-50 backdrop-blur-lg justify-between py-3 border-b-1 shadow-md w-full">
            <div className=' flex container px-4 mx-auto relative justify-between items-center text-sm'>
                <div className="flex items-center flex-shrink-0">
                    <IoFastFood className="w-9 mr-1 h-8"/>
                    <Link to="#">
                        <header className="lobster-regular font-extrabold text-3xl">
                            Recipe Whisperer
                        </header>
                    </Link>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 roboto-medium text-lg poetsen-one-regular">
                    <li className=' hover:underline duration-300 ease-in'><Link to="#hero">Home</Link></li>
                    <li className=' hover:underline duration-300 ease-in'><Link to="#recipe">Recipes</Link></li>
                    <li className=' hover:underline duration-300 ease-in'><Link to="#about">About Us</Link></li>
                </ul>
                <div className="hidden lg:flex font-medium text-accent-content text-xl justify-center items-center btn btn-warning rounded-3xl hover:scale-110 duration-500 ease-linear">
                    <BsTelephoneInboundFill className='ml-3'/>
                    <Link to="#contact" className='py-1 px-2'>
                        Connect
                    </Link>
                </div>
            </div>
        </nav>
    )
}