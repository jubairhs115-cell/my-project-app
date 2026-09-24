
import React from 'react';
import Image from 'next/image';
import bannerImg from "@/assest/hero_img.jpg";

const Banner = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Main Banner */}
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-6 py-10 md:px-12 md:py-14 lg:px-16">

                    {/* Decorative Background Circle */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl"></div>

                    <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">

                        {/* Left Content */}
                        <div className="space-y-6 text-center md:text-left">

                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                Explore Our Collection
                            </span>

                            {/* Heading */}
                            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
                                Books to
                                <span className="text-emerald-600"> freshen up </span>
                                your bookshelf
                            </h1>

                            {/* Description */}
                            <p className="mx-auto max-w-lg text-base leading-7 text-slate-500 md:mx-0 md:text-lg">
                                Discover inspiring stories, timeless classics,
                                and exciting new reads to make your bookshelf
                                truly special.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-start">

                                <button className="btn btn-success rounded-full px-8 font-semibold shadow-lg shadow-emerald-200 transition-transform duration-300 hover:scale-105">
                                    Explore Books
                                    <span>→</span>
                                </button>

                                <button className="btn btn-ghost rounded-full px-6 font-semibold text-slate-600">
                                    Learn More
                                </button>

                            </div>

                            {/* Small Trust Text */}
                            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 md:justify-start">
                                <span className="text-emerald-600">✓</span>
                                <span>Find your next favorite book</span>
                            </div>

                        </div>

                        {/* Right Image */}
                        <div className="relative flex justify-center">

                            {/* Image Background */}
                            <div className="absolute h-64 w-64 rounded-full bg-emerald-100/70 sm:h-80 sm:w-80"></div>

                            <Image
                                src={bannerImg}
                                alt="A collection of books"
                                priority
                                sizes="(max-width: 768px) 90vw, 45vw"
                                className="relative z-10 w-full max-w-md rounded-2xl object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;