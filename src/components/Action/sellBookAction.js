import axios from "axios"
import {
    ALL_SELL_BOOK_FAIL,
    ALL_SELL_BOOK_REQUEST,
    ALL_SELL_BOOK_SUCCESS,
    CLEAR_ERRORS,
    NEW_SELL_BOOK_FAIL,
    NEW_SELL_BOOK_REQUEST,
    NEW_SELL_BOOK_SUCCESS,
    NEW_SELL_DETAILS_FAIL,
    NEW_SELL_DETAILS_REQUEST,
    NEW_SELL_DETAILS_SUCCESS,
    UPDATE_SELL_BOOK_FAIL,
    UPDATE_SELL_BOOK_REQUEST,
    UPDATE_SELL_BOOK_SUCCESS,
    DELETE_SELL_BOOK_FAIL,
    DELETE_SELL_BOOK_REQUEST,
    DELETE_SELL_BOOK_SUCCESS,
    ADMIN_SELL_BOOK_FAIL,
    ADMIN_SELL_BOOK_REQUEST,
    ADMIN_SELL_BOOK_SUCCESS,
} from "../Constant/sellBookConstant"


export const getAllSellBooks = (category, currentPage = 1) => async (dispatch) => {
    try {
        dispatch({ type: ALL_SELL_BOOK_REQUEST });

        let link = `http://localhost:5000/api/v1/books?page=${currentPage}`;

        if (category) {
            link = `http://localhost:5000/api/v1/books?page=${currentPage}&category=${category}`;
        }

        const { data } = await axios.get(link);
        dispatch({
            type: ALL_SELL_BOOK_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ALL_SELL_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};


// post new sell book 
export const postNewSellBook = (sellBookData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_SELL_BOOK_REQUEST })
        console.log(sellBookData)
        const data = await axios.post(`http://localhost:5000/api/v1/book/sell`, sellBookData)
        dispatch({
            type: NEW_SELL_BOOK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_SELL_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
};

// get a single book details 
export const getSingleSellBookDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: NEW_SELL_DETAILS_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/book/${id}`)
        dispatch({
            type: NEW_SELL_DETAILS_SUCCESS,
            payload: data.book
        })

    } catch (error) {
        dispatch({
            type: NEW_SELL_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


// get all product by admin  
export const getAdminProduct = () => async (dispatch) => {

    try {
        dispatch({ type: ADMIN_SELL_BOOK_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/books/admin`)
        dispatch({
            type: ADMIN_SELL_BOOK_SUCCESS,
            payload: data.books,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_SELL_BOOK_FAIL,
            payload: error.response.data.message
        })
    }

}


// delete product by admin 
export const deleteProduct = (id) => async (dispatch) => {

    try {

        dispatch({
            type: DELETE_SELL_BOOK_REQUEST
        })
        const { data } = await axios.delete(`http://localhost:5000/api/v1/book/${id}`)
        dispatch({
            type: DELETE_SELL_BOOK_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_SELL_BOOK_FAIL,
            payload: error.response.data.message
        })
    }

}

export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_SELL_BOOK_REQUEST })
        const { data } = await axios.put(`http://localhost:5000/api/v1/book/${id}`, productData)
        dispatch({
            type: UPDATE_SELL_BOOK_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: UPDATE_SELL_BOOK_FAIL,
            payload: error.response.data.message
        })
    }
}


// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}