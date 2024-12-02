import React,{useState,useEffect} from "react";
import Hero from "../screen/hero";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import LoadingIndicator from './loadingIndicator';

export default function Home() {
  
const [isLoaded, setIsLoaded] = useState(true);
   useEffect(()=>{
    setTimeout(()=>{
      setIsLoaded(false)
    },5000)
   },[])
   if(isLoaded){
    return(
      <>
      <LoadingIndicator loading={isLoaded}/>
      </>
    )
  }
  return (
    <div className="bg-slate-800">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-center bg-slate-800">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Welcome to AirTrust
        </h2>
        <p className="font-sans text-lg text-white">
          At AirTrust, we provide seamless and affordable data, airtime, and utility
          payment solutions to keep you connected. Our platform is designed to deliver
          speed and reliability at your fingertips.
        </p>
        <img
          src={require("../images/ful.jpg")}
          alt="About AirTrust"
          className="mx-auto mt-8 rounded-lg shadow-lg"
        />
      </section>

      {/* Features Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-center bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-3xl font-bold text-slate-700">Our Features</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
            <img
              src={require("../images/ful2.jpg")}
              alt="Fast Transactions"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Fast Transactions
            </h3>
            <p className="mt-2 text-gray-600">
              Enjoy lightning-fast airtime and data purchases that save you time.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
            <img
              src={require("../images/ful.jpg")}
              alt="Secure Payments"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Secure Payments</h3>
            <p className="mt-2 text-gray-600">
              Your security is our priority with state-of-the-art encryption for payments.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
            <img
              src={require("../images/ful1.jpg")}
              alt="24/7 Support"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
            <p className="mt-2 text-gray-600">
              We're here for you anytime, anywhere. Customer satisfaction is our goal.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 py-16 text-center text-white bg-slate-600">
        <h2 className="mb-6 text-3xl font-bold">Get Started with AirTrust</h2>
        <p className="mb-8 text-lg">
          Experience the easiest way to stay connected. Sign up today and explore our
          seamless VTU services.
        </p>
        <button onClick={()=>window.location.href=window.location.href+="auth"} className="px-6 py-3 font-semibold text-gray-800 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500">
          Sign Up Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="py-12 text-white bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h3 className="mb-4 text-2xl font-bold">Connect with Us</h3>
          <div className="flex justify-center mb-6 space-x-6">
            <a
              href="https://web.facebook.com/Ephraim5407"
              className="text-gray-400 transition-transform transform hover:text-blue-400 hover:scale-110"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-transform transform hover:text-blue-400 hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-transform transform hover:text-pink-400 hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.instagram.com/pawpawkeys/"
              className="text-gray-400 transition-transform transform hover:text-blue-500 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AirTrust. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
