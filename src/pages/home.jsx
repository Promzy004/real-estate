import Hero from "../compoents/hero";
import img1 from "../assets/images/section1-img.png";
import { FaHome } from "react-icons/fa";
import { MdAddHome } from "react-icons/md";
import ServiceCard from "../compoents/cards/serviceCard";

const Home = () => {
    return (
        <>
            <Hero />
            <section className="flex justify-center items-center md:py-32 py-20">
                <div className="lg:w-[70%] md:w-[80%] sm:w-[75%] w-[80%] flex flex-col gap-14 justify-center items-center">
                    <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-14 justify-items-center items-center mb-6">
                        <div className="relative lg:h-full  justify-center items-center bg-red-300 md:row-start-auto row-start-2 md:mr-0 mr-6">
                            <div className="h-full w-full absolute border-8 border-primaryColor top-6 left-6">
                                <div className="absolute w-[45%] h-[45%] p-2 bg-primaryColor right-0 bottom-0 text-white flex flex-col justify-center items-center text-center gap-2">
                                    <span className="lg:text-4xl md:text-3xl text-2xl font-semibold">38+</span>
                                    <span className="lg:text-xl md:text-lg text-base">Years of experience</span>
                                </div>
                            </div>
                            <img src={img1} alt="" className="h-full w-full" />
                        </div>
                        <div className="flex flex-col lg:gap-5 md:gap-3 gap-4 md:row-start-auto row-start-1">
                            <h3 className="lg:text-2xl md:text-xxl text-lg font-semibold">Are You Looking Best Property Near You? Contact Us</h3>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primaryColor lg:text-lg text-base">Who We Are</h4>
                                <div className="lg:text-base text-sm font-light flex flex-col gap-2">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page When looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex justify-center items-center gap-3">
                                    <MdAddHome  className="text-5xl text-primaryColor p-2 bg-primaryColor/10"/>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium">332+</span>
                                        <span className="text-xs font-light">Property Listed</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <FaHome className="text-5xl text-primaryColor p-2 bg-primaryColor/10" />
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium">158+</span>
                                        <span className="text-xs font-light">Property Sold</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-neutral-300"></div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-7 gap-10">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Home;