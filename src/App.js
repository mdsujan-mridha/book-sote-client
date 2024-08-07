import { Fragment, useEffect, useState, } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Signup from './components/User/Signup';
import Login from "./components/User/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/User/Profile';
import axios from 'axios';
import store from "./store";
import { loadUser } from './components/Action/userAction';
import Books from './components/Books/Books';
import ExChangeBooks from './components/Books/ExChangeBooks';
import Dashboard from './components/Admin/Dashboard';
import BuyBooks from './components/Books/BuyBooks';
import BookDetails from './components/Books/BookDetails';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import BookDetailsModal from './components/Books/BookDetailsModal';
import RequestBookDetails from './components/Books/RequestBookDetails';
import { useSelector } from 'react-redux';
import Payment from './components/Cart/Payment';
import ProtectedRoute from './components/Route/ProtectedRoute';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Success from './components/Cart/Success';
import MyOrder from './components/Order/MyOrder';
import OrderDetails from './components/Order/OrderDetails';
import NewProduct from './components/Admin/NewProduct';
import ProductList from './components/Admin/ProductList';
import UpdateProduct from './components/Admin/UpdateProduct';
import UserList from './components/Admin/UserList';
import UpdateUser from './components/Admin/UpdateUser';
import OrderList from './components/Admin/OrderList';
import UpdateOrder from './components/Admin/UpdateOrder';
import AllRequestBook from './components/Admin/AllRequestBook';
import AllExchnageBook from './components/Admin/AllExchnageBook';
import CashierDashboard from './components/User/CashierDashboard';
import 'aos/dist/aos.css'; // You can also use <link> for styles


function App() {
  axios.defaults.withCredentials = true;
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // console.log(user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("http://localhost:5000/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  // console.log(stripeApiKey);
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Fragment>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Signup />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          {/* it will protected  */}
          <Route path='/book/request' element={<Books />}></Route>
          <Route path='/book/request/:id' element={<RequestBookDetails />}></Route>
          {/* it will protected  */}
          <Route path='/book/exchnage' element={<ExChangeBooks />}></Route>
          <Route path='/sell/books' element={<BuyBooks />}></Route>
          <Route path='/sell/books/:id' element={<BookDetails />}></Route>
          <Route path='/exchange/books/:id' element={<BookDetailsModal />}></Route>
          <Route path='/cashier/dashboard' element={<CashierDashboard />}></Route>
          {/* protected route  user*/}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/account' element={<Profile />} ></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/shipping' element={<Shipping />}></Route>
            <Route path='/order/confirm' element={<ConfirmOrder />}></Route>
            <Route path='/success' element={<Success />}></Route>
            <Route path='/orders' element={<MyOrder />}></Route>
            <Route path='/order/:id' element={<OrderDetails />}></Route>
            <Route>
              {stripeApiKey && (
                <Route
                  path="/process/payment"
                  element={
                    <Elements stripe={loadStripe(stripeApiKey)} >
                      <Payment stripeApiKey={stripeApiKey} />
                    </Elements>
                  }
                >
                </Route>
              )}
            </Route>
          </Route>

          {/* admin route  */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >

                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
          {/* product list */}
          <Route
            path="/admin/books"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <ProductList />
              </ProtectedRoute>
            }
          ></Route>

          {/* create new product by admin  */}
          <Route
            path="/admin/product/new"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <NewProduct />
              </ProtectedRoute>
            }
          ></Route>

          {/* update product  */}
          <Route
            path="/admin/book/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <UpdateProduct />
              </ProtectedRoute>
            }
          ></Route>

          {/* user list  */}
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <UserList />
              </ProtectedRoute>
            }
          ></Route>
          {/* update user list  */}
          <Route
            path="/admin/user/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <UpdateUser />
              </ProtectedRoute>
            }
          ></Route>

          {/* order list  */}
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <OrderList />
              </ProtectedRoute>
            }
          ></Route>
          {/* update order list  */}
          <Route
            path="/admin/order/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <UpdateOrder />
              </ProtectedRoute>
            }
          ></Route>

          {/* request book  */}

          <Route
            path="/admin/allrequestbook"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <AllRequestBook />
              </ProtectedRoute>
            }
          ></Route>

          {/* all exchange book  */}

          <Route
            path="/admin/exchangebook"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user?.role === "admin" ? true : false}
              >
                <AllExchnageBook />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>

    </Fragment >
  );
}

export default App;
