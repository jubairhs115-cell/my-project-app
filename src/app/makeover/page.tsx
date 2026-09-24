 'use client'

import React, { useContext } from 'react';

import WishList from '../wishList/page';
import ListedBooks from '../listBook/page';

import { BookContext } from '@/context/BookContext';

const Page = () => {

    const {  readBooks,  wishList } = useContext(BookContext);

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="tabs tabs-lift">

                {/* Read Books Tab */}
                <input
                    type="radio"
                    name="my_tabs_5"
                    className="tab"
                    aria-label={`Read List (${readBooks.length})`}
                    defaultChecked
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">

                    <ListedBooks />

                </div>


                {/* Wishlist Tab */}
                <input
                    type="radio"
                    name="my_tabs_5"
                    className="tab"
                    aria-label={`Wish List (${wishList.length})`}
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">

                    <WishList />

                </div>

            </div>

        </div>
    );
};

export default Page;