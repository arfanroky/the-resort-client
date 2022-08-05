import React from 'react';
import ExperienceContainer from '../Pages/Homepage/Experiences/ExperienceContainer';
import HomeContainer from '../Pages/Homepage/Homes/HomeContainer';


const RootContainer = () => {
    return (
        <>
        <div className="grid md:grid-cols-3 grid-cols-1">
            <div className='md:col-span-1'>

            </div>
            <div className='md:col-span-2'>
        <HomeContainer></HomeContainer>
        <ExperienceContainer></ExperienceContainer>
            </div>
        </div>
            
        </>
    );
};

export default RootContainer;