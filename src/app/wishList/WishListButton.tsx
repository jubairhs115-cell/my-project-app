  'use client'
 
 import { BookContext } from '@/context/BookContext';
 import { IBook } from '@/types/books.type';
 import React, { useContext } from 'react';
import { toast } from 'react-toastify';
 
 const WishListButton = ({ book }: { book: IBook }) => {
 
     const { wishList, setWishList} = useContext(BookContext);
 
     const handle = () => {
 
         console.log("the button is activated", book);
 
         const isExist = wishList.find(
             (item) => item.bookId === book.bookId
         );
 
         if (isExist) {
             toast.error("This book is already in your wish list!");
             return;
         }
 
         setWishList([...wishList, book]);
 
         toast.success(`You have listed in a wishlist ${book.bookName}`);
     };
 
     return (
         <button
             className="btn btn-neutral flex-1 rounded-full text-white"
             onClick={handle}
         >
             Wish List
         </button>
     );
 };
 
 export default WishListButton;