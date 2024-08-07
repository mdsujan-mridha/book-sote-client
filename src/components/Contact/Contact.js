import { Email, FlightTakeoff, Home, Instagram, LinkedIn, Phone, Twitter } from '@mui/icons-material';
import React, { Fragment } from 'react';

const Contact = () => {
    return (
        <Fragment>
            <div className='w-full min-h-screen relative '>
                <div className='w-full bg-primary opacity-75 h-96 px-12 z-50'>
                    <h1 className='lg:px-32 lg:pt-28 text-5xl font-bold text-white'> Get in Touch </h1>
                    <p className='lg:px-32 text-xl pt-5'> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Omnis, ipsam. </p>
                </div>
                <div className='flex justify-center items-center mt-14'>
                    <div className='w-3/5 h-96 mt-14 mx-auto z-40 bg-slate-50 absolute shadow-xl rounded-md flex justify-between'>
                        <div className='px-12 py-5 w-3/4'>
                            <h1 className='text-2xl font-semibold'> Send us a Message </h1>
                            <div className='mt-5'>
                                <form className='w-full flex-col gap-5'>
                                    <div className='w-full flex flex-col gap-5'>
                                        <div className='flex justify-between items-center w-full gap-5'>
                                            <input className='w-full h-14 border-2 outline-none rounded-xl px-10' type="text" placeholder="Name" />
                                            <input className='w-full h-14 border-2 outline-none rounded-xl px-10' type="text" placeholder="Address" />
                                        </div>
                                        <div className='flex justify-between items-center w-full gap-5'>
                                            <input className='w-full h-14 border-2 outline-none rounded-xl px-10' type="email" placeholder="Email" />
                                            <input className='w-full h-14 border-2 outline-none rounded-xl px-10' type="text" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <input className='w-full h-20 border-2 outline-none rounded-xl px-12' type="text" placeholder="Message" />
                                    </div>

                                    <input className='w-16 h-16 bg-primary rounded-full text-white mt-2' type="submit" value="Send" />


                                </form>
                            </div>
                        </div>
                        <div className='w-1/3 h-full bg-slate-900 px-12'>
                            <h1 className='pt-5 text-2xl font-bold text-center text-white'> Contact Information </h1>
                            <div className='mt-5 flex gap-4 items-center'>
                                <Home style={{ fontSize: 50, color: '#fff' }} />
                                <p className='text-white'> Mirpur-12,Dhaka-1216,Bangladesh </p>
                            </div>
                            <div className='mt-5 flex gap-4 items-center'>
                                <Phone style={{ fontSize: 50, color: '#fff' }} />
                                <p className='text-white'> Phone : +8801615000000 </p>
                            </div>
                            <div className='mt-5 flex gap-4 items-center'>
                                <Email style={{ fontSize: 50, color: '#fff' }} />
                                <p className='text-white'> abcd@gmail.com </p>
                            </div>
                            <div className='flex justify-between items-center mt-10'>
                                <Twitter style={{fontSize:30,color:"#fff" }}/>
                                <LinkedIn style={{fontSize:30,color:"#fff" }}/>
                                <Instagram style={{fontSize:30,color:"#fff" }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
};

export default Contact;