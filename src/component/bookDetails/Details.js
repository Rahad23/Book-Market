import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const bookDetails = useLoaderData();
    console.log(bookDetails);
    return (
        <div>
           <div className="card lg:card-side w-4/5 mt-20 mx-auto bg-base-100 shadow-xl">
                <figure><img src={bookDetails.image} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#583eeb]">New album is released!</h2>
                    <h1 className='text-xl font-bold text-slate-900'>Book-Name: <span className='text-black'>{bookDetails.title}</span></h1>
                    <h1 className='text-xl font-bold text-slate-900'>Language: <span className='text-red-500'>{bookDetails.language}</span></h1>
                    <h1 className='text-xl font-bold text-slate-900'>Author: <span className='text-green-500'>{bookDetails.authors}</span></h1>  

                    <h1 className='text-xl font-bold text-slate-900'>Publisher: <span className='text-green-500'>{bookDetails.publisher}</span></h1>
                    <h1 className='text-xl font-bold text-slate-900'>Subtitle: <span className='text-teal-800'>{bookDetails.subtitle}</span></h1>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy-Now</button>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default Details;