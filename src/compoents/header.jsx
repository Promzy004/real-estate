import { Link } from "react-router-dom";
import { FaUser, FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

const Header = () => {

    const [breakPoint, setBreakPoint] = useState(window.innerWidth < 768);
    const [navlinks, setNavLinks] = useState(false);
    console.log(breakPoint)

    useEffect(() => {

        const handleResize = () => {
            if(window.innerWidth < 768){
                setBreakPoint(true);
            } else {
                setBreakPoint(false);
            }
        }

        window.addEventListener('resize', handleResize)
    })


    return (
        <header className="fixed top-0 w-full bg-white z-50">
            {
                !breakPoint && (
                    <>
                        <div className="flex justify-between py-2 lg:px-48 px-10 bg-primaryColor text-white">
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
                        <div className="flex justify-between items-center py-4 lg:px-48 px-10">
                            <h2>Brand name</h2>
                            <nav className="flex lg:gap-7 gap-4 items-center justify-center">
                                <Link to="" className="hover:text-primaryColor">Home</Link>
                                <Link to="" className="hover:text-primaryColor">About Us</Link>
                                <Link to="" className="hover:text-primaryColor">Property</Link>
                                <Link to="" className="hover:text-primaryColor">Agents</Link>
                                <Link to="" className="hover:text-primaryColor">Pages</Link>
                                <Link to="" className="hover:text-primaryColor">Contact Us</Link>
                                <div className="bg-primaryColor p-2 cursor-pointer" onClick={() => setNavLinks(!navlinks)}>
                                    <FiMenu className="text-xl text-white"/>
                                </div>
                            </nav>
                        </div>
            
                        {
                            navlinks && (
                                <div className="px-20 py-5 absolute right-[10%] flex flex-col gap-5 bg-red-200">
                                    <Link to='' className="hover:text-primaryColor">about</Link>
                                    <Link to='' className="hover:text-primaryColor">contact</Link>
                                    <Link to='' className="hover:text-primaryColor">link1</Link>
                                    <Link to='' className="hover:text-primaryColor">link2</Link>
                                    <Link to='' className="hover:text-primaryColor">link3</Link>
                                    <Link to='' className="hover:text-primaryColor">link4</Link>
                                </div>
                            )
                        }
                    </>
                )
            }

            {
                breakPoint && (
                    <>
                        <div className="flex justify-between py-2 sm:px-20 px-5 bg-primaryColor text-white">
                            <a href="mailto:promiseedwin242@gmail.com" className="flex justify-center items-center gap-2">
                                <FaTelegramPlane className="sm:text-2xl text-lg" />
                                <span className="font-light sm:text-sm text-xs">mail.uremail.com</span>
                            </a>
                            <a href="tel:" className="flex justify-center items-center gap-2">
                                <FaPhone className="sm:text-xl text-base" />
                                <span className="font-light sm:text-sm text-xs">mail.uremail.com</span>
                            </a>
                        </div>
                        <div className="flex justify-between items-center py-4 sm:px-20 px-5">
                            <h2>Brand name</h2>
                            <nav className="flex lg:gap-7 gap-4 items-center justify-center">
                                <div className="bg-primaryColor p-2 cursor-pointer" onClick={() => setNavLinks(!navlinks)}>
                                    <FiMenu className="text-xl text-white"/>
                                </div>
                            </nav>
                        </div>
            
                        {
                            navlinks && (
                                <div className="px-20 py-5 absolute right-[10%] flex flex-col gap-5 bg-red-200">
                                    <Link to='' className="hover:text-primaryColor">Agency</Link>
                                    <Link to='' className="hover:text-primaryColor">Testimonials</Link>
                                    <Link to='' className="hover:text-primaryColor">Blog</Link>
                                    <Link to='' className="hover:text-primaryColor">Pricing</Link>
                                    <Link to='' className="hover:text-primaryColor">Gallery</Link>
                                    <Link to='' className="hover:text-primaryColor">Services</Link>
                                    <Link to='' className="hover:text-primaryColor">Coming Soon</Link>
                                    <Link to='' className="hover:text-primaryColor">FAQ</Link>
                                    <Link to='' className="hover:text-primaryColor">Login</Link>
                                    <Link to='' className="hover:text-primaryColor">SignUp/Register</Link>
                                    <Link to='' className="hover:text-primaryColor">Career</Link>
                                </div>
                            )
                        }
                    </>
                )
            }
        </header>
    );
}
 
export default Header;