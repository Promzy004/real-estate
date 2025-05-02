import { IoLocationSharp } from "react-icons/io5";

const ServiceCard = () => {
    return (
        <div className="flex gap-2">
            <IoLocationSharp className="text-2xl text-primaryColor p-1 h-7 w-14 bg-primaryColor/10" />
            <div className="flex flex-col gap-2">
                <span className="text-base font-medium">Buy & Sell Properties</span>
                <span className="text-xs font-light">There are many variations of passages of Lorem Ipsum available but the majoritysuffered</span>
            </div>
        </div>
    );
}
 
export default ServiceCard;