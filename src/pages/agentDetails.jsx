import { useParams } from "react-router-dom";
import PagesHero from "../compoents/pagesHero";

const AgentDetails = () => {

    const { id } = useParams()
    
    return (
        <div>
            <PagesHero title='Agent Details' page='Agent' />
            <div className="md:py-20 py-14 lg:w-[60%] md:w-[80%] sm:w-[75%] w-[90%] mx-auto">
                agent details - {id}
            </div>
        </div>
    );
}
 
export default AgentDetails;