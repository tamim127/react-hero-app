import React from "react";

import bannerImg from "../../assets/hero.png";
import { Link } from "react-router";
import AppHeader from "../Installation/AppHeader";
import LoadAllApps from "./LoadAllApps";
import googleplayIcon from '../../assets/googleplay.png'
import appstoreIcon from '../../assets/appstore.png'
import StatsSection from "./StatsSection";
const Banner = () => {
    return (
        <section >
            <div className="text-center flex flex-col items-center justify-center px-6 md:px-20 pt-16 ">
                <h1 className="text-4xl poppins md:text-6xl font-bold leading-tight mb-4">
                    We Build <br/> <span className="bg-clip-text text-transparent bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"> Productive </span> Apps
                </h1>
                <p className="text-[#627382] inter text-base md:text-lg  mb-8">
                    At <span className="font-semibold">HERO.IO</span>, we craft innovative
                    apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make
                    an impact.
                </p>
                <div className="flex flex-wrap justify-center  gap-4 mb-12">
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
                <StatsSection/>
            </div>
            <AppHeader/>
        </section>
        
    );
};

export default Banner;

