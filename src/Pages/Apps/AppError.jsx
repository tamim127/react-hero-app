import React from 'react';
import { Link } from 'react-router';
import apperrorImg from '../../assets/App-Error.png'
const AppError = () => {
    return (
        <div className='flex justify-center text-center my-[50px] '>
            <div className='space-y-3'>
                <img src={apperrorImg} alt="errorImg" />
                <h1 className='font-bold text-4xl'>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <Link className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white border-none hover:opacity-90" to='/apps'>Go Back</Link>
            </div>
        </div>
    );
};

export default AppError;



