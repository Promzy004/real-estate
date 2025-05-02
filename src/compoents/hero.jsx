
const Hero = () => {
    return (
        <div className="hero mt-[105px] relative min-h-[35rem] flex flex-col gap-5 justify-center items-center">
            <h2 className="text-white text-4xl font-semibold">Find Your Dream Properties</h2>
            <div className="bg-white min-w-3/5 p-5 flex flex-col gap-5">
                <h3 className="relative pb-1 text-lg font-medium before:content-[''] before:bg-primaryColor before:absolute before:left-0 before:bottom-0 before:h-1 before:w-10 ">Search Your Properties</h3>
                <form action="" className="flex gap-2">
                    <label className="flex flex-col gap-1">
                        Looking For
                        <input type="text" className="hero-input" placeholder="Property Type" />
                    </label>
                    <label className="flex flex-col gap-1">
                        Property Size
                        <input type="text" className="hero-input" placeholder="Property Size" />
                    </label>
                    <label className="flex flex-col gap-1">
                        Property Location
                        <input type="text" className="hero-input" placeholder="Type Location" />
                    </label>
                    <input type="Submit" value='Search' className="bg-primaryColor px-7 py-2 flex self-end text-sm text-white" />
                </form>
            </div>
        </div>
    );
}
 
export default Hero;