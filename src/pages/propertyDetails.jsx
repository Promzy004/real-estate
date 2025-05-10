import { useParams } from "react-router-dom";
import { properties } from "../assets/data/data";
import PagesHero from "../compoents/pagesHero";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { RiSofaFill } from "react-icons/ri";
import { BiArea } from "react-icons/bi";
import { useEffect, useState } from "react";

const PropertyDetails = () => {

    const { id } = useParams()
    const [previewImage, setPreviewImage] = useState(false)
    const [currentImage, setCurrentImage] = useState('')

    const handleShowImage = (src) => {
        setPreviewImage(true);
        setCurrentImage(src)
    }

    const closePreview = () => {
        setPreviewImage(false)
        setCurrentImage('')
    }

    useEffect(() => {
        if(previewImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }
    }, [previewImage])

    const property = properties.filter(property => property.id == id);

    return (
        <div>

            {previewImage && (
                <div className="fixed flex flex-col justify-center items-center top-0 left-0 right-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.91)]">
                    <div className="md:w-[70%] w-[90%] flex flex-col gap-2">
                        <button className="text-white self-end" onClick={closePreview}>cancel</button>
                        <img src={currentImage} alt="" className="w-full max-h-[90%]"/>
                    </div>
                </div>
            )}

            <PagesHero title='Property Details' page='Property' />
            <div className="md:py-20 py-14 lg:w-[60%] md:w-[80%] sm:w-[75%] w-[90%] mx-auto">
                {property.map((prop, index) => (
                    <div key={index} className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                            <img src={prop.image} onClick={() => handleShowImage(prop.image)} alt="property image" />
                            <div className="flex justify-between">
                                <h2 className="md:text-2xl text-xl font-medium">Duples Pent house</h2>
                                <p className="text-primaryColor font-medium md:text-xl text-lg">${prop.price}</p>
                            </div>
                            <div className="w-full h-[1px] bg-neutral-200"></div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="md:text-xl text-lg font-medium">Property Overview</h3>
                            <p className="md:text-base text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere culpa similique doloribus, incidunt illum? Ex minima architecto veniam ducimus.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="md:text-xl text-lg font-medium">Property Features</h3>
                            <div className="flex md:gap-6 gap-3 flex-wrap">
                                <span className="flex justify-center items-center gap-2 md:py-5 md:px-10 py-3 px-4 border">
                                    <IoBed className="text-primaryColor" />
                                    <span className="sm:text-sm text-xs font-light">
                                        {prop.bed} Bed
                                    </span>
                                </span>
                                <span className="flex justify-center items-center gap-2 md:py-5 md:px-10 py-3 px-4 border">
                                    <FaBath className="text-primaryColor" />
                                    <span className="sm:text-sm text-xs font-light">
                                        {prop.bath} Bath
                                    </span>
                                </span>
                                <span className="flex justify-center items-center gap-2 md:py-5 md:px-10 py-3 px-4 border">
                                    <RiSofaFill className="text-primaryColor" />
                                    <span className="sm:text-sm text-xs font-light">
                                        {prop.rooms} Rooms
                                    </span>
                                </span>
                                <span className="flex justify-center items-center gap-2 md:py-5 md:px-10 py-3 px-4 border">
                                    <BiArea className="text-primaryColor" />
                                    <span className="sm:text-sm text-xs font-light">
                                        {prop.sq} sq
                                    </span>
                                </span>
                            </div>
                        </div>

                        {prop.gallery && (
                            <div className="flex flex-col gap-4">
                                <h3 className="md:text-xl text-lg font-medium">Property Gallery</h3>
                                <div className="grid grid-cols-3 sm:gap-5 gap-3">
                                    {prop.gallery.map((gal, index) => {
                                        return <img onClick={() => handleShowImage(gal)} key={index} src={gal} alt="property images" className=" hover:border-2 hover:p-[2px] hover:border-primaryColor hover:scale-110" />
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default PropertyDetails;