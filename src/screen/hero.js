// Hero.js
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/auth');
    };

    return (
        <section className="relative bg-slate-800 text-white h-screen flex items-center justify-center pt-20">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto text-center px-4 z-10">
                <FaPhoneAlt className="text-6xl mb-4 mx-auto" />
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
                    Top Up Your Phone with Ease Data Airtime & Gotv
                </h1>
                <p className="text-lg sm:text-xl mb-8">
                    Fast, secure, and convenient way to recharge your mobile network.
                </p>
                <button
                    onClick={handleGetStarted}
                    className="bg-yellow-400 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
                >
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Hero;
