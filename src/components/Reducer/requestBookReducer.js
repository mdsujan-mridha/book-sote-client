import {
    ADMIN_REQUEST_BOOK_FAIL,
    ADMIN_REQUEST_BOOK_REQUEST,
    ADMIN_REQUEST_BOOK_SUCCESS,
    ALL_REQUEST_BOOK_FAIL,
    ALL_REQUEST_BOOK_REQUEST,
    ALL_REQUEST_BOOK_SUCCESS,
    CLEAR_ERRORS,
    DELETE_REQUEST_BOOK_FAIL,
    DELETE_REQUEST_BOOK_REQUEST,
    DELETE_REQUEST_BOOK_RESET,
    DELETE_REQUEST_BOOK_SUCCESS,
    NEW_REQUEST_BOOK_FAIL,
    NEW_REQUEST_BOOK_REQUEST,
    NEW_REQUEST_BOOK_RESET,
    NEW_REQUEST_BOOK_SUCCESS,
    NEW_REQUEST_DETAILS_FAIL,
    NEW_REQUEST_DETAILS_REQUEST,
    NEW_REQUEST_DETAILS_SUCCESS,
    UPDATE_REQUEST_BOOK_FAIL,
    UPDATE_REQUEST_BOOK_REQUEST,
    UPDATE_REQUEST_BOOK_RESET,
    UPDATE_REQUEST_BOOK_SUCCESS
} from "../Constant/bookRequestConstant"

export const requestBookReducer = (state = { requestBooks: [] }, action) => {
    switch (action.type) {
        case ALL_REQUEST_BOOK_REQUEST:
        case ADMIN_REQUEST_BOOK_REQUEST:
            return {
                loading: true,
                requestBooks: []
            }
        case ALL_REQUEST_BOOK_SUCCESS:
            return {
                loading: false,
                requestBooks: action.payload.requestBooks,
                totalBooks: action.payload.totalBooks,
                resultPerPage: action.payload.resultPerPage,
                filteredBooks: action.payload.filteredBooks
            }
        case ADMIN_REQUEST_BOOK_SUCCESS:
            return {
                loading: false,
                requestBook: action.payload,
            }
        case ALL_REQUEST_BOOK_FAIL:
        case ADMIN_REQUEST_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }

}

export const newRequestBookReducer = (state = { requestBook: {} }, action) => {
    switch (action.type) {
        case NEW_REQUEST_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEW_REQUEST_BOOK_SUCCESS:
            return {
                loading: false,
                success: action.payload,
            }
        case NEW_REQUEST_BOOK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case NEW_REQUEST_BOOK_RESET:
            return {
                loading: false,
                requestBook: {}
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const newRequestDetailsReducer = (state = { requestBook: {} }, action) => {

    switch (action.type) {
        case NEW_REQUEST_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEW_REQUEST_DETAILS_SUCCESS:
            return {
                loading: false,
                requestBook: action.payload,
            }
        case NEW_REQUEST_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }

}



// delete product by admin 
export const updateRequestBook = (state = {}, action) => {
    switch (action.type) {
        case DELETE_REQUEST_BOOK_REQUEST:
        case UPDATE_REQUEST_BOOK_REQUEST:

            return {
                ...state,
                loading: true
            }
        case DELETE_REQUEST_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
        case UPDATE_REQUEST_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdate: action.payload,
            }

        case DELETE_REQUEST_BOOK_FAIL:
        case UPDATE_REQUEST_BOOK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case DELETE_REQUEST_BOOK_RESET:
            return {
                ...state,
                isDeleted: false,
            }
        case UPDATE_REQUEST_BOOK_RESET:
            return {
                ...state,
                isUpdate: false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}
