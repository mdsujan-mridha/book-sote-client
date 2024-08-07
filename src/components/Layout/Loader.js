import React from 'react';

const Loader = () => {
    return (
        <div className='w-96 h-96' style={{ margin: '0 auto' }}>
            <button className="btn btn-square">
                <span className="loading loading-spinner"></span>
            </button>
        </div>
    );
};

export default Loader;