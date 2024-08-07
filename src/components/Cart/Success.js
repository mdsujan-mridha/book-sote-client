

import { CheckCircle } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Success.css";



const Success = () => {
    return (
        <div>
            <div className="orderSuccess">
                <CheckCircle />
                <Typography> আপনার অর্ডারটি সফলভাবে গ্রহন করা হয়েছে । </Typography>
                <Link to="/orders"> View orders </Link>
            </div>
        </div>
    );
};

export default Success;