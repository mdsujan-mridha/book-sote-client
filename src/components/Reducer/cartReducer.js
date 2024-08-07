import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO } from "../Constant/cartConstant";

export const cartReducer =(state = {cartItems:[] },action) =>{

    switch(action.type){
        case ADD_TO_CART:
          const item = action.payload;
          const isItemExist = state.cartItems.find(
            (i) =>i.book === item.book
          );
           if(isItemExist){
             return {
                ...state,
                cartItems:state.cartItems.map((i)=>
                i.book === isItemExist.book ? item:i
                ),
             };
           } else{
            return{
                ...state,
                cartItems:[...state.cartItems,item],
            };
         }
         case REMOVE_CART_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.filter((i) => i.book !== action.payload),
          }; 
        case SAVE_SHIPPING_INFO:
          return{
            ...state,
            shipping:action.payload,
          }  
        default:
            return state
    }

}