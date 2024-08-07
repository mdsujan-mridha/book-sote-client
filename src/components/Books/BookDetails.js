import React, { Fragment, useEffect, useState } from 'react';
import Loader from '../Layout/Loader';
import { Rating } from '@mui/material';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, getSingleSellBookDetails } from '../Action/sellBookAction';
import Carousel from "react-material-ui-carousel";
import { addItemToCart } from '../Action/cartAction';

const BookDetails = () => {
    const { id } = useParams();
    // console.log(id)
    const dispatch = useDispatch();
    const { loading, book, error } = useSelector((state) => state.book);
    const [quantity, setQuantity] = useState(1);
    const options = {
        size: "large",
        readOnly: true,
        precision: 0.5,
        name: "uncontrolled-rating"

    }
    // increase quantity 
    const increaseQuantity = () => {

        if (book?.Stock <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    }
    const decreaseQuantity = () => {

        if (1 >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);

    }

    const addToCartHandler = () => {
        dispatch(addItemToCart(id, quantity))
        toast.success("Item added to cart");
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(getSingleSellBookDetails(id))

    }, [id, dispatch, error])

    console.log(book)
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
                                                book?.images &&
                                                book?.images.map((item, i) => (
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
                                    <p className='text-3xl pb-3 font-bold'> {book?.title} </p>
                                    <p className='text-xl font-bold opacity-60 border-b border-gray-500 w-full'>  productID: #{book?._id} </p>

                                    <div className="w-full flex items-center justify-start py-10 border-b border-gray-500">
                                        <Rating
                                            {...options}
                                        /> <span className='text-lg font-semibold text-gray-600'> ({book?.numOfReviews} Reviews) </span>
                                    </div>
                                    <div>
                                        <h1 className='text-4xl font-bold py-7'> BDT {book?.price} /- </h1>
                                        <div className='flex justify-start items-center border-b border-gray-500 pb-7'>
                                            <button
                                                className='text-white font-bold text-2xl'
                                                style={{
                                                    width: 45, height: 45, backgroundColor: '#1c1c1c'
                                                }}
                                                onClick={decreaseQuantity}
                                            > - </button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                readOnly
                                                style={{ width: 60, height: 45, textAlign: 'center', outline: 'none' }}
                                            />
                                            <button
                                                className='text-white font-bold text-2xl' style={{
                                                    width: 45, height: 45, backgroundColor: '#1c1c1c'
                                                }}
                                                onClick={increaseQuantity}
                                            > + </button>
                                            <button
                                                className='btn btn-primary ml-7 rounded-full text-md'
                                                disabled={book?.Stock <= 1 ? true : false}
                                                onClick={addToCartHandler}
                                            > Add to cart </button>
                                        </div>
                                        <div className='py-7 border-b border-gray-500'>
                                            <p className=' text-2xl font-bold text-gray-500'> status:
                                                <span className={book?.Stock <= 1 ? "text-red-700" : "text-primary"}> {book?.Stock <= 1 ? "OutOfStock" : "InStock"} </span> </p>
                                        </div>
                                        <div className='py-7'>
                                            <p className='text-xl font-bold text-gray-600'> Description </p>
                                            <p className='py-4 text-justify font-semibold opacity-70'> {book?.description} </p>
                                        </div>
                                        <button
                                            className='btn w-52 bg-primary text-white outline-none border-0 rounded-full'> Submit Review </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Fragment>)
            }
        </Fragment>
    );
};

export default BookDetails;