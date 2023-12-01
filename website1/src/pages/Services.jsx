import Brows from "./services/Brows";
import Eyelids from "./services/Eyelids";
import Lips from "./services/Lips";
import Cover from "./services/Cover";
import Removal from "./services/Removal";
import MedicalPigmentation from "./services/MedicalPigmentation";

const Services = () => {
    return(
        <>
            <Brows />
            <hr className="featurette-divider p-0"/>
            <Eyelids />
            <hr className="featurette-divider p-0"/>
            <Lips />
            <hr className="featurette-divider p-0"/>
            <Cover />
            <hr className="featurette-divider p-0"/>
            <Removal />
            <hr className="featurette-divider p-0"/>
            <MedicalPigmentation />
        </>
    );
};

export default Services;