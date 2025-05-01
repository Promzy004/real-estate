import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="static top-0 w-full">
            <div className="flex justify-between py-1 px-48 bg-blue-400">
                <div>
                    <a href="mailto:">mail.uremail.com</a>
                    <a href="tel:+">mail.uremail.com</a>
                </div>
                <a href="">Login/Signup</a>
            </div>
            <div className="flex justify-between py-4 px-48">
                <h2>Brand name</h2>
                <nav className="flex gap-7">
                    <Link to="" className="hover:text-blue-400">Home</Link>
                    <Link to="" className="hover:text-blue-400">About Us</Link>
                    <Link to="" className="hover:text-blue-400">Property</Link>
                    <Link to="" className="hover:text-blue-400">Agents</Link>
                    <Link to="" className="hover:text-blue-400">Pages</Link>
                    <Link to="" className="hover:text-blue-400">Contact Us</Link>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;