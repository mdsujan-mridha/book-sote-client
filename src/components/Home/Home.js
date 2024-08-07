import React, { Fragment } from 'react';
import Hero from './Hero';
import ExchangeBook from './ExchangeBook';
import BuyBook from "./BuyBook";
import RequestBook from './RequestBook';

const Home = () => {
    return (
        <Fragment>
            <div>
                <Hero />
                <ExchangeBook />
                <BuyBook />
                <RequestBook />
            </div>
        </Fragment>
    );
};

export default Home;