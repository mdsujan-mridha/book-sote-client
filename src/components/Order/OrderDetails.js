import React, { Fragment, useEffect } from 'react';


import "./OrderDetails.css";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, getOrderDetails } from '../Action/orderAction';
import Loader from '../Layout/Loader';
import { Typography } from '@mui/material';


const OrderDetails = () => {

    const { id } = useParams();
    const { order, error, loading } = useSelector((state) => state.orderDetails);
    const dispatch = useDispatch();
     
    console.log(order);

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors());
        }
        dispatch(getOrderDetails(id))

    }, [id, error, dispatch]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    {/* <MetaData title="Order Details" /> */}
                    <div className="orderDetailsPage">
                        <div className="orderDetailsContainer">
                            <Typography component="h1">
                                Order #{order && order._id}
                            </Typography>
                            <Typography>Shipping Info</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p>Name:</p>
                                    <span>{order?.user && order?.user?.name}</span>
                                </div>
                                <div>
                                    <p>Phone:</p>
                                    <span>
                                        {order.shippingInfo && order.shippingInfo.phoneNo}
                                    </span>
                                </div>
                                <div>
                                    <p>Address:</p>
                                    <span>
                                        {order.shippingInfo &&
                                            `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                                    </span>
                                </div>
                            </div>
                            <Typography>Payment</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p
                                        className={
                                            order.paymentInfo &&
                                                order.paymentInfo.status === "succeeded"
                                                ? "greenColor"
                                                : "redColor"
                                        }
                                    >
                                        {order.paymentInfo &&
                                            order.paymentInfo.status === "succeeded"
                                            ? "PAID"
                                            : "NOT PAID"}
                                    </p>
                                </div>

                                <div>
                                    <p>Amount:</p>
                                    <span>{order.totalPrice && order.totalPrice}</span>
                                </div>
                            </div>

                            <Typography>Order Status</Typography>
                            <div className="orderDetailsContainerBox">
                                <div>
                                    <p
                                        className={
                                            order.orderStatus && order.orderStatus === "Delivered"
                                                ? "greenColor"
                                                : "redColor"
                                        }
                                    >
                                        {order.orderStatus && order.orderStatus}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="orderDetailsCartItems">
                            <Typography>Order Items:</Typography>
                            <div className="orderDetailsCartItemsContainer">
                                {order.orderItems &&
                                    order.orderItems.map((item) => (
                                        <div key={item.product}>
                                            <img src={item.image} alt="Product" />
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>{" "}
                                            <span>
                                                {item.quantity} X BDT{item.price} ={" "}
                                                <b>BDT{item.price * item.quantity}</b>
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default OrderDetails;