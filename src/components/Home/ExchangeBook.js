import React, { Fragment, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getAllExchangeBooks } from '../Action/exchangeBookAction';
import BookCard from '../Books/BookCard';
import { toast } from 'react-toastify';
import { clearErrors } from '../Action/sellBookAction';
import Loader from '../Layout/Loader';
import AOS from 'aos';

const ExchangeBook = () => {

    const dispatch = useDispatch();

    const { exchangeBooks, loading, error } = useSelector(state => state.exchangeBooks);

    const exchangeBook = exchangeBooks?.slice(0, 4);

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        dispatch(getAllExchangeBooks());

    }, [dispatch, error]);


    useEffect(() => {

        AOS.init();

    }, [])

    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <Fragment>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="px-12 mt-9 pb-2">
                                <div className='flex justify-between items-center content-center'>
                                    <p className='text-lg font-bold text-gray-500'>Exchange Book</p>
                                    <Link className='text-lg font-bold text-gray-500'> View all </Link>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-9 justify-center items-center content-center gap-5 lg:gap-0'>
                                    {
                                        exchangeBook &&
                                        exchangeBook?.map((item) => (
                                            <BookCard
                                                key={item._id}
                                                item={item}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    );
};

export default ExchangeBook;