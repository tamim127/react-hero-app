import React from 'react';
import noDataFound from '../../assets/App-Error.png'
const NoAppFound = ({ setSearch }) => {
    return (
        <div className='flex justify-center text-center my-[50px]'>
            <div className='space-y-3'>
                <img src={noDataFound} alt="errorImg" />
                <h1 className='font-bold text-4xl'>Sorry, No App found!</h1>
                <button onClick={() => setSearch('')} className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white border-none hover:opacity-90" >Go Back</button >
            </div>
        </div>
    );
};

export default NoAppFound;