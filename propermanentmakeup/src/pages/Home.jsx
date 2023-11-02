import React from 'react';
import SmallBoxes from '../Components/SmallBoxes';
import Box from '../Components/Box';

const Home = () => {
    return (<>
        <Box 
            imgOnLeft={false} 
            h2={"Akademia Piękna Magdalena Deja"} 
            h3={"Centrum makijażu permanentnego w Jeleniej Górze"}
            p={"Makijaż permanentny, nazywany również makijażem trwałym to innowacyjna procedura kosmetyczna. Zabieg makijażu permanentnego polega na wprowadzeniu do górnej warstwy skóry przeznaczonego do tego pigmentu (hipoalergicznego). Umożliwia to malowanie cienkich lini, pozwala zamaskować blizny, niedoskonałości, ubytki, wyrównać kolor. Makijaż permanentny to zabieg luksusowy, na wysokiej jakości preparatach. Nie oszczędzamy na twarzy i na zdrowiu 🙂 Natomiast po zabiegu zaoszczędzimy CZAS na wykonanie makijażu rano, pieniądze na zbędne kosmetyki, miejsce w torebce i spokój bo makijaż permanentny nie rozmazuje się nawet w ekstremalnych sytuacjach, a zatem wzmacnia poczucie pewności siebie. Jest to zabieg, który pokochały miliony kobiet. Ja jestem jedną z nich 🖤 "}
            imgSrc={"./images/image1.jpeg"}
            imgClass={"img-groove"}
            imgTitle={"Akademia Piękna"}
            imgAlt={"Akademia Piękna"}
        />

        <hr className="featurette-divider"></hr>
        <Box 
            imgOnLeft={true} 
            h2={"Magdalena Deja"} 
            h3={"Linergistka z wieloletnim doświadczeniem"}
            p={"Nagrodzona dyplomem MASTER CLASSName, trener makijażu permanentnego. Właścicielka Centrum Makijażu Permanentnego Akademia Piękna M.Deja w Jeleniej Górze. Założycielka akcji charytatywnej OD SERCA, w której z darmowych zabiegów makijażu permanentnego AREOLI mogą skorzystać kobiety dotknięte nowotworem piersi. Artystyczna dusza, malarka obrazów ściennych, komiksów, kochająca sztukę w każdej postaci."}
            imgSrc={"./images/image2.jpeg"}
            imgClass={"img-groove"}
            imgTitle={"Magdalena Deja"}
            imgAlt={"Magdalena Deja"}/>

        <hr className="featurette-divider"></hr>
        <SmallBoxes/>
    </>);
};

export default Home;