import { BiChevronRight, BiChevronsRight } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa6";
import { HiMiniChevronRight } from "react-icons/hi2";
import { PiGreaterThan, PiGreaterThanLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-color4 flex justify-center items-center py-3 text-neutral-300 text-sm">
            <p>All Right Reserve By Edwin Promise 2025</p>
        </div>
    );
}
 
export default Footer;


export const Footer1 = () => {
    return (
        <></>
    );
}


export const Footer2 = () => {
    return (
        <footer className="px-56 bg-color4">
            <div className="relative text-white grid grid-cols-3 justify-items-center py-10 gap-7">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">Brand name</h2>
                        <p className="text-sm text-neutral-300">There are many variations of passages Lorem Ipsum available, but the majority is have suffered alteration.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base font-medium">Business Hour</h3>
                        <p className="text-sm text-neutral-300">Monday - Friday 10:00am - 06:00pm</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">Important Links</h2>
                    <div className="flex flex-col gap-1 text-neutral-300">
                        <Link className="flex items-center gap-1 text-sm">
                            <HiMiniChevronRight />
                            Our Services
                        </Link>
                        <Link className="flex items-center gap-1 text-sm">
                            <HiMiniChevronRight />
                            Privacy
                        </Link>
                        <Link className="flex items-center gap-1 text-sm">
                            <HiMiniChevronRight />
                            Contact
                        </Link>
                        <Link className="flex items-center gap-1 text-sm">
                            <HiMiniChevronRight />
                            Meet Our Teams
                        </Link>
                        <Link className="flex items-center gap-1 text-sm">
                            <HiMiniChevronRight />
                            Help Desk
                        </Link>
                    </div>
                </div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ipsam id ipsum deserunt consequatur? Nisi.</div>
                <div className="bg-color5 h-[1px] w-full absolute bottom-0 left-0"></div>
            </div>
            <Footer />
        </footer>
    );
}