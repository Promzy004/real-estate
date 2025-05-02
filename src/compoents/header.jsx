import { Link } from "react-router-dom";
import { FaUser, FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white z-50">
            <div className="flex justify-between py-2 px-48 bg-primaryColor text-white">
                <div className="flex justify-center items-center gap-5">
                    <a href="mailto:" className="flex justify-center items-center gap-2">
                        <FaTelegramPlane className="text-2xl" />
                        <span className="font-light">mail.uremail.com</span>
                    </a>
                    <a href="tel:+" className="flex justify-center items-center gap-2">
                        <FaPhone className="text-xl" />
                        <span className="font-light">mail.uremail.com</span>
                    </a>
                </div>
                <a href="" className="flex justify-center items-center gap-2">
                    <FaUser className="text-xl" />
                    <span className="font-light">Login/Signup</span>
                </a>
            </div>
            <div className="flex justify-between items-center py-4 px-48">
                <h2>Brand name</h2>
                <nav className="flex gap-7 items-center justify-center">
                    <Link to="" className="hover:text-primaryColor">Home</Link>
                    <Link to="" className="hover:text-primaryColor">About Us</Link>
                    <Link to="" className="hover:text-primaryColor">Property</Link>
                    <Link to="" className="hover:text-primaryColor">Agents</Link>
                    <Link to="" className="hover:text-primaryColor">Pages</Link>
                    <Link to="" className="hover:text-primaryColor">Contact Us</Link>
                    <div className="bg-primaryColor p-2">
                        <FiMenu className="text-xl text-white"/>
                    </div>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;