import React from 'react';
import Image from "next/image";
import { IBook } from '@/types/books.type';
import Link from 'next/link';


interface val{
 book:IBook ; 
}
const BookCard = ({book}:val) => {
    return (
        <div
                        key={book.bookId}
                        className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >

                        {/* Book Image */}
                        <div className="relative h-72 bg-slate-100 overflow-hidden">

                            <Image
                                src={book.image}
                                alt={book.bookName}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                            />


                            {/* Category */}
                            <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                {book.category}
                            </span>


                            {/* Rating */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">

                                <span className="text-yellow-500">
                                    ★
                                </span>

                                <span className="font-semibold text-slate-700 ml-1">
                                    {book.rating}
                                </span>

                            </div>

                        </div>


                        {/* Card Content */}
                        <div className="p-6">

                            {/* Book Name */}
                            <h3 className="text-xl font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                                {book.bookName}
                            </h3>


                            {/* Author */}
                            <p className="text-sm text-slate-500 mt-1">
                                by{" "}
                                <span className="font-medium text-slate-700">
                                    {book.author}
                                </span>
                            </p>


                            {/* Review */}
                            <p className="text-sm text-slate-500 leading-6 mt-4 line-clamp-3">
                                {book.review}
                            </p>


                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-4">

                                {book.tags.map((tag: string) => (

                                    <span
                                        key={tag}
                                        className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
                                    >
                                        #{tag}
                                    </span>

                                ))}

                            </div>


                            {/* Bottom Section */}
                            <div className="flex items-center justify-between border-t border-slate-100 mt-5 pt-4">

                                {/* Pages */}
                                <div>

                                    <p className="text-xs text-slate-400">
                                        Pages
                                    </p>

                                    <p className="font-semibold text-slate-700">
                                        {book.totalPages}
                                    </p>

                                </div>


                                {/* Year */}
                                <div>

                                    <p className="text-xs text-slate-400">
                                        Published
                                    </p>

                                    <p className="font-semibold text-slate-700">
                                        {book.yearOfPublishing}
                                    </p>

                                </div>


                                {/* Details */}

                                <Link href={`books/${book.bookId}`}>
                                <button className="btn btn-success btn-sm rounded-full px-5">
                                    Details
                                </button>

</Link>
                            </div>

                        </div>

                    </div>
    );
};

export default BookCard;