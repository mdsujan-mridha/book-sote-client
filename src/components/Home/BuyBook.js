import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAllSellBooks } from '../Action/sellBookAction';
import Loader from '../Layout/Loader';
import { toast } from 'react-toastify';
import SellBookCard from '../Books/SellBookCard';
import AOS from 'aos';

const ExchangeBook = () => {

    const dispatch = useDispatch();

    const { sellBooks, loading, error } = useSelector((state) => state.sellBooks);

    const books = sellBooks?.slice(0, 4);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        dispatch(getAllSellBooks());

    }, [dispatch, error]);


    useEffect(() => {

        AOS.init();

    }, [])

    // console.log(sellBooks);

    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <Fragment>
                            <div data-aos="fade-up"
                                data-aos-duration="3000" className="px-12 mt-9 pb-2">
                                <div className='w-full flex justify-between items-center content-center'>
                                    <p className='text-lg font-bold text-gray-500'>Buy Book</p>
                                    <Link className='text-lg font-bold text-gray-500'> View all </Link>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-9 justify-center items-center content-center gap-5 lg:gap-0'>
                                    {
                                        books &&
                                        books?.map((item) => (
                                            <SellBookCard
                                                key={item?._id}
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