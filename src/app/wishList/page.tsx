 'use client'

import { BookContext } from '@/context/BookContext';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const WishList = () => {
    const { wishList } = useContext(BookContext);

    const [sortBy, setSortBy] =
        useState<"rating" | "pages" | "year">("rating");

   

    const sortedWishList = [...wishList].sort((a, b) => {

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        if (sortBy === "pages") {
            return b.totalPages - a.totalPages;
        }

        if (sortBy === "year") {
            return b.yearOfPublishing - a.yearOfPublishing;
        }

        return 0;
    });

    return (
        <div className="container mx-auto px-4 py-10">

            {/* Header */}
            <div className="mb-8">

                <h2 className="text-3xl font-bold">
                    My Wishlist
                </h2>

                {/* Sort */}
                <div className="text-center">

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(
                                e.target.value as "rating" | "pages" | "year"
                            )
                        }
                        className="select select-warning mt-4"
                    >
                        <option value="rating">
                            Rating
                        </option>

                        <option value="pages">
                            Number of Pages
                        </option>

                        <option value="year">
                            Publishing Year
                        </option>
                    </select>

                </div>

                <p className="mt-2 text-gray-500">
                    Books you want to read later.
                </p>

            </div>

            {/* Wishlist Books */}
            {sortedWishList.length > 0 ? (

                <div className="grid grid-cols-1 gap-6">

                    {sortedWishList.map((book: IBook) => (

                        <div
                            key={`${book.bookId}-${book.bookName}`}
                            className="group flex min-h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* Book Image */}
                            <div className="relative h-64 w-52 shrink-0 overflow-hidden bg-slate-100">

                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    fill
                                    sizes="208px"
                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Wishlist Badge */}
                                <div className="absolute right-3 top-3">

                                    <span className="badge badge-warning">
                                        ♥ Wishlist
                                    </span>

                                </div>

                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-between p-6">

                                <div>

                                    {/* Category + Rating */}
                                    <div className="mb-3 flex items-center justify-between">

                                        <span className="text-sm font-medium text-emerald-600">
                                            {book.category}
                                        </span>

                                        <div className="rounded-full bg-white px-3 py-1.5 shadow-sm">

                                            <span className="text-yellow-500">
                                                ★
                                            </span>

                                            <span className="ml-1 font-semibold text-slate-700">
                                                {book.rating}
                                            </span>

                                        </div>

                                    </div>

                                    {/* Book Name */}
                                    <h3 className="text-2xl font-bold text-slate-800">
                                        {book.bookName}
                                    </h3>

                                    {/* Author */}
                                    <p className="mt-1 text-sm text-slate-500">
                                        by{" "}
                                        <span className="font-medium text-slate-700">
                                            {book.author}
                                        </span>
                                    </p>

                                    {/* Description */}
                                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                                        {book.review}
                                    </p>

                                </div>

                                {/* Bottom Section */}
                                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                                    {/* Status */}
                                    <div>

                                        <p className="text-xs text-slate-400">
                                            Status
                                        </p>

                                        <p className="font-semibold text-orange-500">
                                            ♥ Want to Read
                                        </p>

                                    </div>

                                    {/* Pages */}
                                    <div>

                                        <p className="text-xs text-slate-400">
                                            Pages
                                        </p>

                                        <p className="font-semibold text-slate-700">
                                            {book.totalPages}
                                        </p>

                                    </div>

                                    {/* Published */}
                                    <div>

                                        <p className="text-xs text-slate-400">
                                            Published
                                        </p>

                                        <p className="font-semibold text-slate-700">
                                            {book.yearOfPublishing}
                                        </p>

                                    </div>

                                    {/* Details */}
                                    <Link
                                        href={`/books/${book.bookId}`}
                                        className="btn btn-success btn-sm rounded-full px-5"
                                    >
                                        View Book
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            ) : (

                /* Empty State */
                <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-gray-300">

                    <div className="text-center">

                        <div className="mb-3 text-5xl">
                            ❤️
                        </div>

                        <h3 className="text-xl font-bold">
                            Your Wishlist is Empty
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Add some books to your wishlist.
                        </p>

                    </div>

                </div>

            )}

        </div>
    );
};

export default WishList;