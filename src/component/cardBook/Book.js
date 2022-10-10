import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Book = () => {
    const lodar = useLoaderData();
    const data = lodar.books;
    console.log(lodar.books);
    return (
        <div className='mt-20 container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(book => 
                    <div className="w-[350px] shadow-xl text-center mx-auto z-50 relative">
                    <div
                     className="aspect-video cursor-pointer rounded-xl relative group"
                 >
                     <div
                         className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black to-transparent bg-gradient-to-t inset-x-0 -bottom-0 pt-30 text-white text-lg font-bold"
                     >    
                     <div>
                             <div
                                 className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                             >
                                <Link to={`details/${book.isbn13}`}>
                                    <div className='text-center'>
                                    <div className="font-bold">{book.title}</div>
            
                                    <div className="opacity-100 text-sm">
                                        {book.price}
                                    </div>
                                    </div>
                                </Link>
                                
                             </div>
                         </div>
                     </div>
                    
                      <img className='mx-auto group-hover:scale-100 transition duration-300 sm:-opacity-1 sm:z-1 ease-in-out' src={book.image} alt="Book" />
                 </div>
                     </div>
                    )
            }

        </div>
    );
};

export default Book;