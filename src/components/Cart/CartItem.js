import React from 'react';
import { Link } from 'react-router-dom';
import "./cartItem.css";

const CartItem = ({ item, deleteCartItems }) => {
    return (
        <div className="CartItemCard">
            <img src={item.image} alt="ssa" />
            <div>
                <Link to={`/product/${item.product}`}>{item.title}</Link>
                <span>{`Price: ${item.price}`}</span>
                <p onClick={() => deleteCartItems(item.book)}>Remove</p>
            </div>
        </div>
    );
};

export default CartItem;