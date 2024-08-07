

import React from 'react';
import "./CashierDashboard.css";
import CahsierSidebar from './CahsierSidebar';
import { Line } from 'react-chartjs-2';

const CashierDashboard = () => {

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, 4000],
            },
        ],
    };
    return (
        <div className='dashboard min-h-screen'>
            <CahsierSidebar />
            <div className="dashboardContainer">
                <h1>Dashboard</h1>
                <div className='px-12 flex gap-5 mb-10'>
                    <div className='w-96 h-52 bg-primary rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-center text-white font-bold text-3xl'> Total Books </h1>
                        <p className='text-xl font-bold text-white text-center'> 200+ </p>
                    </div>
                    <div className='w-96 h-52 bg-orange-500 rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-center text-white font-bold text-3xl'> Total users </h1>
                        <p className='text-xl font-bold text-white text-center'> 100+ </p>
                    </div>
                    <div className='w-96 h-52 bg-red-500 rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-center text-white font-bold text-3xl'> Total Orders </h1>
                        <p className='text-xl font-bold text-white text-center'> 50+ </p>
                    </div>
                    <div className='w-96 h-52 bg-red-500 rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-center text-white font-bold text-3xl'> Total Earn </h1>
                        <p className='text-xl font-bold text-white text-center'> 50+ </p>
                    </div>
                </div>

                <div> <h1 className='text-4xl font-bold text-center border-b-2 py-5'> Total Earned Amount </h1> </div>
                <div className='lineChart'>
                    <Line data={lineState} />
                </div>

            </div>
        </div>
    );
};

export default CashierDashboard;