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
            <Eyelids />
            <Lips />
            <Cover />
            <Removal />
            <MedicalPigmentation />
        </>
    );
};

export default Services;