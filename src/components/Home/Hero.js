import React, { Fragment } from 'react';
import heroImg from "../images/banner.png";
import banner from "../images/banner-2.png";
import banner3 from "../images/banner-3.svg";

const Hero = () => {
    return (
        <Fragment>
            <div className='flex flex-col lg:flex-row justify-between items-center px-12 bg-primary opacity-90 pt-5'>
                <div>
                    <img src={banner3} alt="banner" />
                </div>
                <d4v className='flex flex-col'>
                    <h1 className='text-6xl text-white font-bold pb-5'> Digital library </h1>
                    <h3 className='text-white font-semibold text-3xl'> Unlock Knowledge, Anytime, Anywhere, </h3>
                    <h3 className='text-white font-semibold text-3xl'> Your Digital Library Awaits! </h3>
                </d4v>
            </div>
        </Fragment>
    );
};

export default Hero;