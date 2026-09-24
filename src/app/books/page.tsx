 import React from "react";

 
import { IBook } from "@/types/books.type";
import BookCard from "@/component/shared/BookCard";

const getBooks = async () => {
    
try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`, );

    const data = await res.json() ; 
    return data ; 
}catch(error){
    console.error('Error fetching books data :' , error) ; 
    return [] ; 
}
};

const Books = async () => {

    const booksData = await getBooks();

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            {/* Section Header */}
            <div className="text-center mb-12">

                <p className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">
                    Our Collection
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
                    Explore All Books
                </h2>

                <p className="text-slate-500 max-w-2xl mx-auto mt-3">
                    Discover your next favorite story from our carefully
                    selected collection of books.
                </p>

            </div>


            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {booksData.map((book:IBook , ind:number) => {

                    return <BookCard book={book} key={ind}/> ; 

                })}

            </div>

        </section>
    );
};

export default Books;