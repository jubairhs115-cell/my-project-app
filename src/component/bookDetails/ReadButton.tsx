 'use client'

import { BookContext } from '@/context/BookContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {

    const { readBooks, setReadBooks } = useContext(BookContext);

    const handle = () => {

        console.log("Clicked book:", book);
        console.log("Current read books:", readBooks);

        const isExist = readBooks.some(
            (item) => item.bookId === book.bookId
        );

        if (isExist) {
            toast.error("This book is already in your read list!");
            return;
        }

        setReadBooks((prev) => [...prev, book]);

        toast.success(`You have read ${book.bookName}`);
    };

    return (
        <button
            className="btn btn-success flex-1 rounded-full text-white"
            onClick={handle}
        >
            Read Book
        </button>
    );
};

export default ReadButton;