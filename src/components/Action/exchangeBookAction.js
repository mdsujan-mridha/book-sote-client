import axios from "axios"
import {
    ADMIN_EXCHANGE_BOOK_FAIL,
    ADMIN_EXCHANGE_BOOK_REQUEST,
    ADMIN_EXCHANGE_BOOK_SUCCESS,
    ALL_EXCHANGE_BOOK_FAIL,
    ALL_EXCHANGE_BOOK_REQUEST,
    ALL_EXCHANGE_BOOK_SUCCESS,
    CLEAR_ERRORS,
    DELETE_EXCHANGE_BOOK_FAIL,
    DELETE_EXCHANGE_BOOK_REQUEST,
    DELETE_EXCHANGE_BOOK_SUCCESS,
    NEW_EXCHANGE_BOOK_FAIL,
    NEW_EXCHANGE_BOOK_REQUEST,
    NEW_EXCHANGE_BOOK_SUCCESS,
    NEW_EXCHANGE_DETAILS_FAIL,
    NEW_EXCHANGE_DETAILS_REQUEST,
    NEW_EXCHANGE_DETAILS_SUCCESS
} from "../Constant/exchangeBookConstant"

export const getAllExchangeBooks = (category, currentPage) => async (dispatch) => {

    try {
        dispatch({
            type: ALL_EXCHANGE_BOOK_REQUEST
        })

        let link = `http://localhost:5000/api/v1/exchangebooks?page=${currentPage}`
        if (category) {
            link = `http://localhost:5000/api/v1/exchangebooks?page=${currentPage}&category=${category}`
        }

        const { data } = await axios.get(link)
        dispatch({
            type: ALL_EXCHANGE_BOOK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_EXCHANGE_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}
// post new exchange book 
export const postNewExchangeBook = (exchangeBookData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_EXCHANGE_BOOK_REQUEST })
        const { data } = await axios.post(`http://localhost:5000/api/v1/exchangebook`, exchangeBookData)
        dispatch({
            type: NEW_EXCHANGE_BOOK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_EXCHANGE_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getExchangeBookDetails = (id) => async (dispatch) => {

    try {
        dispatch({ type: NEW_EXCHANGE_DETAILS_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/exchange/${id}`)
        dispatch({
            type: NEW_EXCHANGE_DETAILS_SUCCESS,
            payload: data.exchangeBook,
        })
    } catch (error) {
        dispatch({
            type: NEW_EXCHANGE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}

// get all exchnage book for admin 
// get all product by admin  
export const getAdminExchange = () => async (dispatch) => {

    try {
        dispatch({ type: ADMIN_EXCHANGE_BOOK_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/admin/exchangebook`)
        dispatch({
            type: ADMIN_EXCHANGE_BOOK_SUCCESS,
            payload: data.exchangeBooks,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_EXCHANGE_BOOK_FAIL,
            payload: error.response.data.message
        })
    }

}

// delete product by admin 
export const deleteExchangeBook = (id) => async (dispatch) => {

    try {

        dispatch({
            type: DELETE_EXCHANGE_BOOK_REQUEST
        })
        const { data } = await axios.delete(`http://localhost:5000/api/v1/exchange/${id}`)
        dispatch({
            type: DELETE_EXCHANGE_BOOK_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_EXCHANGE_BOOK_FAIL,
            payload: error.response.data.message
        })
    }

}

// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}