import {
    ADMIN_SELL_BOOK_FAIL,
    ADMIN_SELL_BOOK_REQUEST,
    ADMIN_SELL_BOOK_SUCCESS,
    ALL_SELL_BOOK_FAIL,
    ALL_SELL_BOOK_REQUEST,
    ALL_SELL_BOOK_SUCCESS,
    CLEAR_ERRORS,
    DELETE_SELL_BOOK_FAIL,
    DELETE_SELL_BOOK_REQUEST,
    DELETE_SELL_BOOK_RESET,
    DELETE_SELL_BOOK_SUCCESS,
    NEW_SELL_BOOK_FAIL,
    NEW_SELL_BOOK_REQUEST,
    NEW_SELL_BOOK_RESET,
    NEW_SELL_BOOK_SUCCESS,
    NEW_SELL_DETAILS_FAIL,
    NEW_SELL_DETAILS_REQUEST,
    NEW_SELL_DETAILS_SUCCESS,
    UPDATE_SELL_BOOK_FAIL,
    UPDATE_SELL_BOOK_REQUEST,
    UPDATE_SELL_BOOK_RESET,
    UPDATE_SELL_BOOK_SUCCESS,


} from "../Constant/sellBookConstant"

export const sellBookReducer = (state = { sellBooks: [] }, action) => {

    switch (action.type) {
        case ALL_SELL_BOOK_REQUEST:
        case ADMIN_SELL_BOOK_REQUEST:
            return {
                loading: true,
                sellBooks: []

            }
        case ALL_SELL_BOOK_SUCCESS:
            return {
                loading: false,
                sellBooks: action.payload.sellBooks,
                totalBooks: action.payload.totalBooks,
                resultPerPage: action.payload.resultPerPage,
                filteredBooks: action.payload.filteredBooks

            }
        case ADMIN_SELL_BOOK_SUCCESS:
            return {
                loading: false,
                books: action.payload,
            }
        case ALL_SELL_BOOK_FAIL:
        case ADMIN_SELL_BOOK_FAIL:
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

// new sell book reducer 
export const newSellBookReducer = (state = { sellBook: {} }, action) => {
    switch (action.type) {
        case NEW_SELL_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEW_SELL_BOOK_SUCCESS:
            return {

                loading: false,
                success: action.payload.success,
                sellBook: action.payload.sellBook,
            }
        case NEW_SELL_BOOK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case NEW_SELL_BOOK_RESET:
            return {
                ...state,
                loading: false,
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

// get a single book reducer 
export const newSellDetailsReducer = (state = { sellBook: {} }, action) => {
    switch (action.type) {

        case NEW_SELL_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            }

        case NEW_SELL_DETAILS_SUCCESS:
            return {
                loading: false,
                book: action.payload,
            }

        case NEW_SELL_DETAILS_FAIL:
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

// delete product by admin 
export const updateSellBookReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_SELL_BOOK_REQUEST:
        case UPDATE_SELL_BOOK_REQUEST:

            return {
                ...state,
                loading: true
            }
        case DELETE_SELL_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }
        case UPDATE_SELL_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdate: action.payload,
            }

        case DELETE_SELL_BOOK_FAIL:
        case UPDATE_SELL_BOOK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case DELETE_SELL_BOOK_RESET:
            return {
                ...state,
                isDeleted: false,
            }
        case UPDATE_SELL_BOOK_RESET:
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
