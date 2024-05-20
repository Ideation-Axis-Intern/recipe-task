import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IoFastFood } from "react-icons/io5"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 mx-auto bg-base-300 text-base-content w-full">
                <small className="font-bold">
                    <IoFastFood className="w-9 h-8"/>
                    <span className="text-yellow-500 hover:underline font-bold"><Link to="#">Recipe Whisperer</Link></span> 
                    Copyright All Rights Reserved 2024
                    <p>Made by <Link to="https://github.com/joe-boadi" target="blank" rel="noopener noreferrer" className="hover:underline text-yellow-500">joe-boadi</Link></p> 
                </small>

                <nav className="font-bold lobster-regular">
                    <h6 className="footer-title text-base-content">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.linkedin.com/in/kwadjo-boadi-mantey-43b670271/" target="blank" rel="noopener noreferrer"><FaLinkedin /></Link>
                        <Link to="www.x.com/joeboadiDev_" target="blank" rel="noopener noreferrer"><FaXTwitter /></Link>
                        <Link to="https://github.com/joe-boadi" target="blank" rel="noopener noreferrer"><FaGithub /></Link>
                    </div>
                </nav>
            </footer>
        </>
    )
}

export default Footer