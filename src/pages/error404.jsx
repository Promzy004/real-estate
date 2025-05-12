import { useNavigate } from "react-router-dom";

const Error404 = () => {


    const navigate = useNavigate()
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     navigate('/')
    // }

    return (
        <div className="mt-[120px] md:py-20 py-14 bg-primaryColor/10">
            <div className="flex flex-col gap-5 justify-center items-center w-[30%] mx-auto">
                <div className="relative w-full flex justify-center items-end">
                    <h3 className="text-[10rem] leading-none font-semibold">404</h3>
                    <div className="bg-primaryColor w-full h-16 absolute left-0 bottom-0 -z-10"></div>
                </div>
                <div className="flex flex-col justify-center gap-2 items-center">
                    <h4 className="text-xl font-medium">Sorry Page Not Found</h4>
                    <p className="text-center text-sm font-light">
                        We are sorry. The page you are looking for does not exist. <br />
                        It might have been moved or deleted.
                    </p>
                </div>
                <button onClick={() => navigate('/')} className="bg-primaryColor text-white py-2 px-4 hover:text-white/70">Back To Home Page</button>
            </div>
        </div>
    );
}
 
export default Error404;