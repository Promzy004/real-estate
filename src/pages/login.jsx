import { Link } from "react-router-dom";
import PagesHero from "../compoents/pagesHero";

const Login = () => {
    return (
        <>
            <PagesHero title='Account Login' page='Login' />
            <div className="md:py-20 py-14 lg:w-[60%] md:w-[70%] sm:w-[75%] w-[90%] mx-auto">
                <form action="" method="post" className="flex flex-col justify-center items-center md:gap-5 gap-3 border rounded-sm shadow-md shadow-blue-50 md:py-14 sm:py-12 py-8">
                    <h3 className="relative md:pb-7 pb-5 lg:text-4xl md:text-3xl text-2xl font-medium">Login Your Account</h3>
                    <div className="flex flex-col gap-5 sm:w-[80%] w-[90%]">
                        <label className="flex flex-col gap-1 lg:text-base md:text-sm text-sm font-light">
                            Email Address
                            <input type="text" className="hero-input focus:border-primaryColor/50" placeholder="Enter Email Address" />
                        </label>
                        <label className="flex flex-col gap-1 lg:text-base md:text-sm text-sm font-light">
                            Password
                            <input type="password" className="hero-input focus:border-primaryColor/50" placeholder="Enter Password" />
                        </label>
                        <input type="Submit" value='Login Account' className="bg-primaryColor self-center sm:px-7 sm:py-2 px-4 py-2 flex text-sm text-white mt-4 hover:text-color3 cursor-pointer" />
                    </div>
                    <p className="md:text-sm text-xs">Don't have an account? <Link to='/register' className="text-primaryColor hover:underline">Sign Up</Link> </p>
                </form>
            </div>
        </>
    );
}
 
export default Login;