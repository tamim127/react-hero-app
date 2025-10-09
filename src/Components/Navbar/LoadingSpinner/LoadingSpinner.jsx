import React from 'react';
import { HashLoader } from 'react-spinners';
const LoadingSpinner = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#FAF8F1]">
            <HashLoader color="#6B46C1" size={70} />
        </div>
    );
};

export default LoadingSpinner;