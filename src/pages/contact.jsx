import PagesHero from "../compoents/pagesHero";

const Contact = () => {
    return (
        <>
            <PagesHero title='Contact Us' page='Contact' />
            <div className="md:py-20 py-14 lg:w-[70%] md:w-[80%] sm:w-[75%] w-[90%] flex flex-col items-center gap-12 mx-auto">
                Contact page
            </div>
        </>
    );
}
 
export default Contact;