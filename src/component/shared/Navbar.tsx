
import React from 'react';
import Image from "next/image";
import logo from "@/assest/book.ico";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="w-full bg-base-100 shadow-md">

            {/* Navbar Content */}
            <div className="navbar max-w-7xl mx-auto px-4">

                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li><a>Home</a></li>
                            <li><a>Books</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="Book Vibe Logo"
                            width={36}
                            height={36}
                        />

                        <a className="btn btn-ghost text-xl font-bold">
                            Book Vibe
                        </a>
                    </div>

                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                       <li><Link href='../books'>Books</Link></li>
                       <li><Link href='../makeover'>CheckOut</Link></li>
                       <li><Link href='../readBooks'>read</Link></li>
                        

                        <li><a>About</a></li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="navbar-end gap-2">
                    <button className="btn btn-success rounded-full">
                        Sign In
                    </button>

                    <button className="btn btn-error rounded-full">
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;