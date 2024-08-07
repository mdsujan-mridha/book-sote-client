import React, { Fragment, useEffect, useState } from 'react';
import loginImg from "../images/login.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors, login } from '../Action/userAction';
import Loader from '../Layout/Loader';

const Login = () => {
    const dispatch = useDispatch();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword))
        // console.log(loginEmail, loginPassword)
    }
    const navigate = useNavigate();
    //    get location 
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : "/account";
    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            toast.success("You are logged in!")
            navigate(redirect)
        }
    }, [dispatch, error, isAuthenticated, redirect, navigate])

    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <Fragment>
                            <div className="lg:min-h-screen">
                                <div className="flex flex-col gap-5 lg:justify-center md:justify-center lg:items-center md:items-center">
                                    <img src={loginImg} alt="Login" />
                                    <div className='w-96 px-12'>
                                        <form
                                            className='flex flex-col justify-center items-center gap-5'
                                            onSubmit={loginSubmit}
                                        >
                                            <input
                                                type="email"
                                                required
                                                value={loginEmail}
                                                placeholder="Enter your email"
                                                className="input input-bordered input-primary w-full text-white text-md font-bold placeholder-gray-100"
                                                style={{ backgroundColor: "#589BFF", outline: 'none' }}
                                                onChange={(e) => setLoginEmail(e.target.value)}

                                            />
                                            <input
                                                type="password"
                                                value={loginPassword}
                                                required placeholder="Enter your password"
                                                className="input input-bordered input-primary w-full text-white text-md font-bold placeholder-gray-100"
                                                style={{ backgroundColor: "#589BFF", outline: 'none' }}
                                                onChange={(e) => setLoginPassword(e.target.value)}
                                            />
                                            <input
                                                type="submit"
                                                value="Login"
                                                className="input input-bordered input-primary w-full text-white text-md font-bold placeholder-gray-100 bg-primary"
                                            />
                                        </form>
                                        <div className='flex justify-between items-center mt-5'>
                                            <Link className='text-md font-bold text-primary'> Forgot password </Link>
                                            <Link to="/register" className='text-md font-bold text-primary'> No account yet? </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    );
};

export default Login;