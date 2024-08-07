

import React, { Fragment, useEffect } from 'react';
import Loader from '../Layout/Loader';
import Carousel from 'react-material-ui-carousel';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getExchangeBookDetails } from '../Action/exchangeBookAction';
import { toast } from 'react-toastify';


const BookDetailsModal = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, exchangeBook, error } = useSelector((state) => state.exchangeBookDetails);

    console.log(exchangeBook);

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(getExchangeBookDetails(id))
    }, [dispatch, id,error])

    return (
        <Fragment>

            {
                loading ? (<Loader />)
                    :
                    (<Fragment>
                        <div>
                            <div className='w-full bg-gray-300 flex flex-col lg:flex-row justify-evenly lg:items-center px-12' style={{ minHeight: '90vh' }}>
                                <div className='w-full lg:w-1/2 pb-5 lg:pb-0'>
                                    <div
                                        className='flex lg:justify-center lg:items-center shadow-xl rounded-md'
                                        style={{
                                            width: '600px', height: '600px', border: '2px solid #fff'
                                        }}>
                                        <Carousel className='w-full h-full'>
                                            {
                                                exchangeBook?.images &&
                                                exchangeBook?.images.map((item, i) => (
                                                    <img
                                                        key={item.url}
                                                        src={item?.url}
                                                        alt={`${i} Slide`}
                                                        className='w-full h-full'
                                                    />
                                                ))
                                            }

                                        </Carousel>
                                    </div>
                                </div>
                                <div className='w-full lg:w-1/2 flex flex-col  justify-start items-start p-5'>
                                    <p className='text-3xl pb-3 font-bold'> {exchangeBook?.title} </p>
                                    <p className='text-xl font-bold opacity-60 border-b border-gray-500 w-full'>  productID: #{exchangeBook?._id} </p>
                                    <div>

                                        <div className='py-7'>
                                            <p className='text-xl font-bold text-gray-600'> Description </p>
                                            <p className='py-4 text-justify font-semibold opacity-70'> {exchangeBook?.description} </p>
                                            <p className='text-xl font-semibold'> Category: {exchangeBook?.category} </p>
                                            <p className='text-xl font-semibold'> Author: {exchangeBook?.author} </p>
                                            <p className='text-xl font-semibold'> Edition: {exchangeBook?.edition} </p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </Fragment>)
            }
        </Fragment>
    );
};

export default BookDetailsModal;