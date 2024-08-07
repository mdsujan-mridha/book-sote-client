import React, { Fragment, useEffect } from 'react';

import LibraryImg01 from "../images/Library/image -1.jpg";
import LibraryImg02 from "../images/Library/image-2.jpg";
import LibraryImg03 from "../images/Library/image-3.jpg";
import AOS from 'aos';

const About = () => {


    useEffect(() => {

        AOS.init();

    }, [])

    const aboutUsData = [
        {
            _id: 1,
            title: "Mission",
            image: LibraryImg02,
            description: " At Book Share, our mission is simple yet profound: to democratize knowledge and foster a lifelong love for learning. We believe that access to information is a fundamental right, and we strive to make quality educational resources accessible to all, regardless of geographical location, socioeconomic status, or background. Our platform is dedicated to empowering individuals to explore diverse perspectives, cultivate critical thinking skills, and unleash their intellectual potential. By curating a vast array of digital content and promoting literacy initiatives, we aim to inspire curiosity, facilitate self-improvement, and contribute to a more informed and enlightened global community."
        },
        {
            _id: 2,
            title: "Vision",
            image: LibraryImg03,
            description: " At Book Share, our vision is to become a beacon of knowledge in the digital age, revolutionizing the way people engage with information and ideas. We envision a world where every individual has unfettered access to a wealth of educational resources, empowering them to pursue their passions, fulfill their potential, and contribute meaningfully to society. Through continuous innovation and collaboration, we aspire to be at the forefront of technological advancements in the field of digital libraries, enriching the lives of millions by fostering a culture of lifelong learning and intellectual exploration. Our ultimate goal is to cultivate a global community bound together by a shared thirst for knowledge and a commitment to intellectual curiosity, innovation, and progress.  "
        }
    ]

    return (
        <Fragment>
            <div className='px-12 min-h-screen'>
                <h1 className='text-5xl font-bold text-center border-b-2 py-10'>  About us </h1>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='w-1/2 mx-auto'>
                    <p className='text-center text-2xl pt-9 font-bold'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam repellendus dicta eligendi mollitia sit magnam! Quisquam, quae, quod, quibusdam, quasi, esse, quos, quibusdam. Quisquam,
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem iste beatae adipisci laborum minima.
                    </p>
                </div>
                <div className='w-1/2 mx-auto'>
                    <img className='rounded-xl py-10' src={LibraryImg01} alt="about us" />
                </div>
                <div className='flex gap-10 flex-col'>
                    {
                        aboutUsData.map((data, index) => (
                            <div data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className={`flex gap-5 justify-center items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`} key={data._id}>
                                <img data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" className='w-1/2' src={data.image} alt="about us" />
                                <div className='w-1/2'>
                                    <h1 className='text-5xl font-bold border-b-2 py-3'> {data.title} </h1>
                                    <p className='text-xl font-bold pt-3'> {data.description} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default About;