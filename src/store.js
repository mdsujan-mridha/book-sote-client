import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { allUserReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./components/Reducer/userReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { newSellBookReducer, newSellDetailsReducer, sellBookReducer, updateSellBookReducer } from "./components/Reducer/sellBookReducer";
import { newRequestBookReducer, newRequestDetailsReducer, requestBookReducer, updateRequestBook } from "./components/Reducer/requestBookReducer";
import { exchangeBookReducer, newExchangeBookReducer, newExchangeDetailsReducer, updateExchangeBookReducer } from "./components/Reducer/exchangeBookReducer";
import { cartReducer } from "./components/Reducer/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./components/Reducer/orderReducer";


const reducer = combineReducers({
    user: userReducer,
    sellBooks: sellBookReducer,
    sellBook: newSellBookReducer,
    updateSellBook: updateSellBookReducer,
    book: newSellDetailsReducer,
    requestBooks: requestBookReducer,
    requestBook: newRequestBookReducer,
    requestBookDetails: newRequestDetailsReducer,
    exchangeBooks: exchangeBookReducer,
    exchangeBook: newExchangeBookReducer,
    exchangeBookDetails: newExchangeDetailsReducer,
    sellBookDetails: newSellDetailsReducer,
    cart: cartReducer,
    allOrders: allOrdersReducer,
    // update & delete order by admin 
    order: orderReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allUsers: allUserReducer,
    userDetails: userDetailsReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    updateRequestBook: updateRequestBook,
    updateExchangeBook: updateExchangeBookReducer,

});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ?
            JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)),
);



export default store;