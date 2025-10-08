import React from "react";

import bannerImg from "../../assets/hero.png";
import { Link } from "react-router";
import AppHeader from "../Installation/AppHeader";
import LoadAllApps from "./LoadAllApps";
import googleplayIcon from '../../assets/googleplay.png'
import appstoreIcon from '../../assets/appstore.png'


const Banner = () => {
    return (
        <section >
            <div className="text-center flex flex-col items-center justify-center px-6 md:px-20 pt-16 ">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    We Build <br /> <span className="bg-clip-text text-transparent bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"> Productive </span> Apps
                </h1>
                <p className="text-[#627382] text-base md:text-lg  mb-8">
                    At <span className="font-semibold">HERO.IO</span>, we craft innovative
                    apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make
                    an impact.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Link
                        to="https://play.google.com/store"
                        target="_blank"
                        className="btn bg-base-100  border-gray-300 hover:bg-gray-100"
                    >
                       <div className="flex items-center gap-2">
                        <img src={googleplayIcon} alt="" />
                        <p> Google Play</p>
                        </div>
                    </Link>
                    <Link
                        to="https://www.apple.com/app-store/"
                        target="_blank"
                        className="btn bg-base-100  border-gray-300 hover:bg-gray-100"
                    ><div className="flex items-center gap-2">
                        <img src={appstoreIcon} alt="" />
                        <p> App Store</p>
                        </div>
                    </Link>
                </div>
                <img
                    src={bannerImg}
                    alt="Banner"
                />
                {/* TRUSTED SECTION */}
                <div className="w-[100vw] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white py-14 px-6 md:px-20 text-center">

                    <h2 className="text-2xl md:text-3xl font-bold mb-10">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto ">
                        <div className="space-y-2">
                            <p className="text-gray-200 mb-1">Total Downloads</p>
                            <h3 className="text-4xl font-bold">29.6M</h3>
                            <p className="text-sm text-gray-300">
                                21% More Than Last Month
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-200 mb-1">Total Reviews</p>
                            <h3 className="text-4xl font-bold">906K</h3>
                            <p className="text-sm text-gray-300">
                                46% More Than Last Month
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-200 mb-1">Active Apps</p>
                            <h3 className="text-4xl font-bold">132+</h3>
                            <p className="text-sm text-gray-300">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            <AppHeader/>
            

            
         
        </section>
        
    );
};

export default Banner;
