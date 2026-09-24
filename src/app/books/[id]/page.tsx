
import WishListButton from "@/app/wishList/WishListButton";
import ReadButton from "@/component/bookDetails/ReadButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface IBookDetail {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async (): Promise<IBook[]> => {
 

     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);


    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    const data: IBook[] = await res.json();

    return data;
};

const BookDetail = async ({ params }: IBookDetail) => {
    const { id } = await params;

    const books = await getBooks();

    const book = books.find(
        (bo: IBook) => bo.bookId === Number(id)
    );

    if (!book) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 py-10 md:py-16">
            <div className="max-w-6xl mx-auto px-4">

                {/* Breadcrumb */}
                <div className="mb-8 text-sm text-slate-500">
                    Home <span className="mx-2">/</span>
                    Books <span className="mx-2">/</span>
                    <span className="text-emerald-600 font-medium">
                        {book.bookName}
                    </span>
                </div>

                {/* Main Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden p-6 md:p-10">

                    {/* Book Image */}
                    <div className="flex items-center justify-center bg-slate-50 rounded-2xl p-8 min-h-96">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            width={500}
                            height={300}
                            className="w-full max-w-sm h-auto max-h-[450px] object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Book Information */}
                    <div className="flex flex-col justify-center">

                        {/* Category & Rating */}
                        <div className="flex items-center gap-3 flex-wrap mb-4">
                            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                                {book.category}
                            </span>

                            <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 text-sm font-semibold px-3 py-2 rounded-full">
                                <span>★</span>
                                {book.rating}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                            {book.bookName}
                        </h1>

                        {/* Author */}
                        <p className="text-slate-500 mt-3 text-lg">
                            Written by{" "}
                            <span className="font-semibold text-slate-700">
                                {book.author}
                            </span>
                        </p>

                        {/* Review */}
                        <p className="text-slate-600 leading-7 mt-6">
                            {book.review}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {book.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="text-sm font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Book Details */}
                        <div className="grid grid-cols-2 gap-4 mt-8 border-y border-slate-100 py-6">

                            <div>
                                <p className="text-sm text-slate-400">
                                    Total Pages
                                </p>
                                <p className="font-bold text-slate-700 mt-1">
                                    {book.totalPages}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-400">
                                    Published
                                </p>
                                <p className="font-bold text-slate-700 mt-1">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-400">
                                    Publisher
                                </p>
                                <p className="font-bold text-slate-700 mt-1">
                                    {book.publisher}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-400">
                                    Book ID
                                </p>
                                <p className="font-bold text-slate-700 mt-1">
                                    #{book.bookId}
                                </p>
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-8">
                            <ReadButton book={book}/>

                           <WishListButton book={book}/>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookDetail;