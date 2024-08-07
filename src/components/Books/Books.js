import React, { Fragment, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllRequestBooks } from '../Action/requestBookAction';
import { toast } from 'react-toastify';
import { clearErrors } from '../Action/sellBookAction';
import Loader from '../Layout/Loader';
import RequestBookCard from './RequestBookCard';




const Books = () => {

    const dispatch = useDispatch();
    const { requestBooks, loading, error } = useSelector((state) => state.requestBooks);
    console.log(requestBooks);


    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        dispatch(getAllRequestBooks());

    }, [dispatch, error])

    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <div className=' px-12'>
                            <h1 className='text-left text-xl font-bold pt-12'> Book Request </h1>
                            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                                {
                                    requestBooks &&
                                    requestBooks?.map((item) => (
                                        <RequestBookCard
                                            key={item?.id}
                                            item={item}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    )
            }
        </Fragment>
    );
};

export default Books;