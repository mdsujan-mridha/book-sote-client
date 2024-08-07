import React from 'react';
import { Link } from 'react-router-dom';
import bookImage from "../images/book/book-01.jpg";
const SellBookCard = ({item}) => {
    
    return (
        <Link to={`/sell/books/${item._id}`} className=' w-full lg:w-96 flex flex-col justify-center  items-center content-center gap-3 shadow-md rounded-md border-2 h-auto hover:shadow-2xl pb-5'>
            <img src={item?.images ? item?.images[0]?.url : bookImage} alt={item?.title} className='pt-5 w-80 h-80 rounded-md' />
            <div>
                <h2 className='font-bold text-lg pt-2'> {item?.title} </h2>
                <p className='text-start font-semibold'> Category: {item?.category} </p>
            </div>
        </Link>
    );
};

export default SellBookCard;