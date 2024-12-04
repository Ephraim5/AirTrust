import React from 'react';
import { motion } from 'framer-motion';
import mtnLogo from  '../images/mtn.png';
import aitelLogo from  '../images/airtel.jpg';
import gloLogo from   '../images/glo.jpg';
import mobile9 from  '../images/9mobile.jpg';
import ele from '../images/bill.png' ;
import gotv from '../images/gotv.png' ;
import show from '../images/show.png' ;
import bille from '../images/bill.png' ;
import {img1,img2,img3,img4} from '../images/index';
const images = [img1,img2,img3,img4]; // Update paths as needed

const services = {
    Network: [
        { name: 'MTN', img: mtnLogo},
        { name: 'Airtel', img:aitelLogo  },
        { name: 'Glo', img: gloLogo },
        { name: '9mobile', img: mobile9},
    ],
   
    Bill: [
        { name: 'Electricity Bill', img:ele },
        { name: 'Water Bill', img: bille },
        { name: 'ShowMax', img:show },
        { name: 'GoTV', img: gotv },
        // Add more bill services here
    ],
};
const handleSelect= (here)=>{
    if(window.location.href.includes("service") &&! window.location.href.includes("service#Network")){
        window.location.href= window.location.href.replace("service",here.toLowerCase())
    }else{
        window.location.href= window.location.href.replace("service#Network",here.toLowerCase())
    }
}

const VTUScreen = () => {
   
    return (
        <div className="min-h-screen font-sans bg-gray-100">
            {/* Services Section */}
            <div className="p-6 relative top[900px] ">
                {Object.keys(services).map((category, index) => (
                    <div key={index} id={category}>
                        <h2 className="mb-4 text-2xl font-semibold text-center  text-slate-700 " >{category}</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {services[category].map((service, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center p-4 transition-shadow duration-300 bg-white rounded-lg shadow hover:shadow-lg"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <img
                                        src={service.img}
                                        alt={service.name}
                                        className="object-contain w-20 h-20 mb-2"
                                    />
                                    <span className="text-lg font-medium">{service.name}</span>
                                    <button onClick={(e)=>handleSelect(service.name)} className="px-4 py-2 mt-4 text-white rounded hover:animate-pulse bg-gradient-to-r bg-gradient-to-r from-slate-500 to-slate-800 animate-bounce">
                                        Select
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VTUScreen;
