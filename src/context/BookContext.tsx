
'use client'

import { IBook } from '@/types/books.type';
import React, { createContext, useState } from 'react';


interface ICheck{
     readBooks: IBook[] ; 
        setReadBooks:React.Dispatch<React.SetStateAction<IBook[]>> ; 

        wishList:IBook[] ; 
        setWishList:React.Dispatch<React.SetStateAction<IBook[]>> ;
}

export const BookContext = createContext<ICheck>({
     readBooks:[],
        setReadBooks:()=>{},
        wishList:[] , 
        setWishList:()=>{} , 
});

const BookProvider = ({ children }: { children: React.ReactNode }) => {

    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishList, setWishList] = useState<IBook[]>([]);

    const shareData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList,
    };

    return (
        <BookContext.Provider value={shareData}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;