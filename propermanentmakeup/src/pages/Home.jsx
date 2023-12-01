import React from 'react';
import SmallBoxes from '../Components/SmallBoxes';
import Box from '../Components/Box';

const detal = () => {
    return (<>
        <p className='lead'>test test test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h4>Lorem ipsum</h4>
    </>)
}

const detal2 = () => {
    return (<>
        <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h4>Lorem ipsum</h4>
    </>)
}

const Home = () => {
    return (<>
        <Box 
            imgOnLeft={false} 
            h2={"Lorem ipsum"} 
            h3={"dolor sit amet"}
            p={""}
            imgSrc={"./images/pic1.jpeg"}
            imgClass={"img-groove"}
            imgTitle={"pic1"}
            imgAlt={"pic1"}
            children={detal}
        />

        <hr className="featurette-divider"></hr>
        <Box 
            imgOnLeft={true} 
            h2={"Lorem ipsum"} 
            h3={"dolor sit amet"}
            p={""}
            imgSrc={"./images/pic2.jpeg"}
            imgClass={"img-groove"}
            imgTitle={"pic2"}
            imgAlt={"pic2"}
            children={detal2}/>
            
        <hr className="featurette-divider"></hr>
        <SmallBoxes/>
    </>);
};

export default Home;