import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const useError = useRouteError();
    console.log(useError);
    return (
        <div className='flex justify-center items-center h-[550px]'>
            <div>
                <h1 className='text-6xl text-zinc-900 font-bold'>OOPS!</h1>
                <h1 className='text-xl text-red-600 font-semibold text-center mt-6'>status: {useError.status}</h1>
                <h1 className='text-center text-green-900 font-semibold mt-3'>statusText: {useError.statusText}</h1>
            </div>
        </div>
    );
};

export default Error;