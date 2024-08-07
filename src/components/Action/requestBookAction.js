import axios from "axios"
import {
    ADMIN_REQUEST_BOOK_FAIL,
    ADMIN_REQUEST_BOOK_REQUEST,
    ADMIN_REQUEST_BOOK_SUCCESS,
    ALL_REQUEST_BOOK_FAIL,
    ALL_REQUEST_BOOK_REQUEST,
    ALL_REQUEST_BOOK_SUCCESS,
    DELETE_REQUEST_BOOK_FAIL,
    DELETE_REQUEST_BOOK_REQUEST,
    DELETE_REQUEST_BOOK_SUCCESS,
    NEW_REQUEST_BOOK_FAIL,
    NEW_REQUEST_BOOK_REQUEST,
    NEW_REQUEST_BOOK_SUCCESS,
    NEW_REQUEST_DETAILS_FAIL,
    NEW_REQUEST_DETAILS_REQUEST,
    NEW_REQUEST_DETAILS_SUCCESS
} from "../Constant/bookRequestConstant"


export const getAllRequestBooks = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_REQUEST_BOOK_REQUEST
        })
        const { data } = await axios.get(`http://localhost:5000/api/v1/request/books`)
        dispatch({
            type: ALL_REQUEST_BOOK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_REQUEST_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
// post new sell book 
export const postNewBookRequest = (BookRequestData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REQUEST_BOOK_REQUEST })
        // console.log(sellBookData)
        const data = await axios.post(`http://localhost:5000/api/v1/request/book`, BookRequestData)
        dispatch({
            type: NEW_REQUEST_BOOK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_REQUEST_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
};

export const getSingleRequestBookDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: NEW_REQUEST_DETAILS_REQUEST
        })
        const { data } = await axios.get(`http://localhost:5000/api/v1/request/book/${id}`)
        dispatch({
            type: NEW_REQUEST_DETAILS_SUCCESS,
            payload: data.requestBook,
        })
    } catch (error) {
        dispatch({
            type: NEW_REQUEST_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
};


// get all request book admin 

// get all product by admin  
export const getAdminRequestBook = () => async (dispatch) => {

    try {
        dispatch({ type: ADMIN_REQUEST_BOOK_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/admin/request/books`)
        dispatch({
            type: ADMIN_REQUEST_BOOK_SUCCESS,
            payload: data.requestBook,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_REQUEST_BOOK_FAIL,
            payload: error.response.data.message
        })
    }

}

// delete product by admin 
export const deleteRequestBook = (id) => async (dispatch) => {

    try {

        dispatch({
            type: DELETE_REQUEST_BOOK_REQUEST
        })
        const { data } = await axios.delete(`http://localhost:5000/api/v1/request/book/${id}`)
        dispatch({
            type: DELETE_REQUEST_BOOK_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_REQUEST_BOOK_FAIL,
            payload: error.response.data.message
        })
    }

}