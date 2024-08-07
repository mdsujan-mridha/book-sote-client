import axios from "axios"
import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO } from "../Constant/cartConstant";

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {

    const { data } = await axios.get(`http://localhost:5000/api/v1/book/${id}`)
    
    dispatch({
        type: ADD_TO_CART,
        payload: {
            book: data.book._id,
            title: data.book.title,
            price: data.book.price,
            image: data.book.images[0].url,
            stock: data.book.Stock,
            quantity,
        },
    });

    localStorage.setItem("cartItems",JSON.stringify(getState().cart?.cartItems));

}
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//   save shipping info 
export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });
    localStorage.setItem("shippingInfo", JSON.stringify(data));
};