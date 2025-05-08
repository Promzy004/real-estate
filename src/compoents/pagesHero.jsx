import { useParams } from "react-router-dom";
import hero from "../assets/images/pageshero.png";

const PagesHero = () => {

    return (
            <>
                <div className="test relative md:py-16 sm:py-12 sm:mt-[105px] mt-[100px] py-8 flex justify-center items-center gap-7 before:content-[''] before:absolute before:h-full before:w-full before:bg-[#33485C] before:opacity-80" style={{background: `url(${hero})`, backgroundPosition: 'Center', backgroundSize: 'cover', backgroundRepeat : 'no-repeat'}}>
                    <div className="z-20 flex flex-col gap-2">
                        <h2 className="text-white text-3xl font-semibold">Our Talented Agents</h2>
                        <div className="text-color2 flex justify-center items-center gap-3 py-1">
                            <h3>Home</h3>
                            <div className="w-[1px] h-4 bg-neutral-200"></div>
                            <h3 className="text-primaryColor">Agents</h3>
                        </div>
                    </div>
                    
                </div>
            </>
    );
}
 
export default PagesHero;