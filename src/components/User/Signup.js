import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from "../images/login.png"
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../Action/userAction';
import { toast } from 'react-toastify';
import Loader from '../Layout/Loader';


const Signup = () => {
    const dispatch = useDispatch();
    // call action
    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",

    });
    const { name, email, password } = user;
    const [avatar, setAvatar] = useState(loginImg);
    const [avatarPreview, setAvatarPreview] = useState(loginImg);


    // navigate user 
    const navigate = useNavigate();
    //    get location 
    const location = useLocation();
    // submit register info
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        dispatch(register(myForm));
        // console.log(name, email, password)
    }
    // register data change

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[[0]]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }

    };

    //  redirect user 
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
                                    <div className='w-96 px-5'>
                                        <form
                                            className='flex flex-col items-center gap-5'
                                            onSubmit={registerSubmit}
                                        >

                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your name"
                                                className="input input-bordered input-primary w-full text-white text-md font-bold placeholder-gray-100"
                                                style={{ backgroundColor: "#589BFF", outline: 'none' }}
                                                onChange={registerDataChange}
                                                value={name}
                                                name='name'
                                            />
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email"
                                                className="input input-bordered input-primary w-full text-white text-md font-bold placeholder-gray-100"
                                                style={{ backgroundColor: "#589BFF", outline: 'none' }}
                                                onChange={registerDataChange}
                                                name='email'
                                                value={email}

                                            />


                                            <input
                                                type="password"
                                                required
                                                placeholder="Enter your password"
                                                className="input input-bordered input-primary w-full text-white text-md font-bold placeholder-gray-100"
                                                style={{ backgroundColor: "#589BFF", outline: 'none' }}
                                                onChange={registerDataChange}
                                                name='password'
                                                value={password}

                                            />
                                            <input
                                                type="submit"
                                                value="Register"
                                                className="input input-bordered input-primary w-full text-white text-md font-bold placeholder-gray-100 bg-primary"
                                            />

                                        </form>
                                        <div className='flex justify-between items-center mt-5'>
                                            <Link className='text-md font-bold text-primary'> Forgot password </Link>
                                            <Link to="/login" className='text-md font-bold text-primary'> Already have an account? </Link>
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

export default Signup;