import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {

    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,

} from '@mui/material';

import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Layout/Loader';

import { clearErrors, getAllSellBooks } from '../Action/sellBookAction';
import { toast } from 'react-toastify';
import Pagination from "react-js-pagination"
import SellBookCard from './SellBookCard';

// set category 
const categories = [
    "Romance",
    "History",
    "Philosophy",
    "Poetry",
    "Memoir",
    "Fantasy",
    "Science Fiction",
];

const BuyBooks = () => {
    const dispatch = useDispatch();
    const { sellBooks, loading, error, resultPerPage, filteredBooks, totalBooks } = useSelector((state) => state.sellBooks);

    const [category, setCategory] = useState("");
    const [categoryToggle, setCategoryToggle] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");


    // console.log(category)


    // clear filter 
    const clearFilters = () => {

        setCategory("");

    };

    const count = filteredBooks;

    // pagination 
    const setCurrentPageNo = (page) => {
        setCurrentPage(page);
    }

    const handleSearchBook = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        dispatch(getAllSellBooks(category, currentPage))

    }, [currentPage, category, dispatch, error]);


    const searchedBooks = sellBooks?.filter((book) => {
        return book.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <Fragment>
            <div className='flex justify-center  gap-3 flex-col lg:flex-row px-12'>
                <div className='w-1/4 min-h-screen mt-10 shadow-xl '>

                    {/* filter by category  */}
                    <div className="flex flex-col border-b px-4">
                        <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                            <p className="text-lg font-medium">Filters</p>
                            <span className="uppercase text-primary-blue text-xs cursor-pointer font-medium" onClick={() => clearFilters()}>clear all</span>
                        </div>
                        <div className="flex justify-between cursor-pointer py-2 pb-4 items-center" onClick={() => setCategoryToggle(!categoryToggle)}>
                            <p className="font-bold text-xl uppercase">Category</p>
                            {categoryToggle ?
                                <ExpandLess sx={{ fontSize: "20px" }} /> :
                                <ExpandMore sx={{ fontSize: "20px" }} />
                            }
                        </div>

                        {categoryToggle && (
                            <div className="flex flex-col pb-1">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="category-radio-buttons-group"
                                        onChange={(e) => setCategory(e.target.value)}
                                        name="category-radio-buttons"
                                        value={category}
                                    >
                                        {categories.map((el, i) => (
                                            <FormControlLabel value={el} control={<Radio size="small" />} label={<span className="font-bold opacity-75 cursor-pointer hover:opacity-100" key={i}>{el}</span>} />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        )}

                    </div>
                    {/* filter by price  */}

                </div>

                <div className='w-3/4 min-h-screen mt-10 shadow-xl px-7 pb-5'>
                    <h1 className='text-2xl font-semibold text-center border-b'> Choose Your best books </h1>
                    <input
                        className='w-full h-14 border-2 rounded-full mt-5 px-12 border-gray-900 outline-none'
                        placeholder='Search your book'
                        type="text"
                        onChange={handleSearchBook}
                        value={search}
                    />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                        {
                            loading ?
                                (<Loader />)
                                :
                                (
                                    <Fragment>
                                        {
                                            searchedBooks &&
                                            searchedBooks.map((item) => (
                                                <SellBookCard
                                                    item={item}
                                                    key={item._id}
                                                />
                                            ))
                                        }
                                    </Fragment>
                                )
                        }
                    </div>
                    {
                        resultPerPage < count && (
                            <div className='flex justify-center mt-10'>
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={totalBooks}
                                    onChange={setCurrentPageNo}
                                    nextPageText="Next"
                                    previousPageText="Prev"
                                    firstPageText="First"
                                    lastPageText="Last"
                                    pageRangeDisplayed={5}
                                    innerClass="flex justify-center gap-3 items-center text-center"
                                    itemClass="border p-2 rounded mr-2 page-item w-14 bg-primary hover:opacity-75"
                                    linkClass="text-white no-underline page-link text-lg font-bold"
                                    activeClass="text-white pageItemActive opacity-70"
                                    activeLinkClass="pageLinkActive text-white"
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default BuyBooks;