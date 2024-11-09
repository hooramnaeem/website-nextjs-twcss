import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fleet from "../../../image/fleet.jpg"
import carleasing from "../../../image/carleasing.jpg"
import maintanence from "../../../image/maintanence.jpg"
import customercare from "../../../image/customercare.jpg"


const Services = () => {
  return (
    <div className="bg-white mb-20 min-h-screen p-8">
      <h1 className="text-5xl font-extrabold mt-24 text-center  mb-8 bg-gradient-to-r from-black to-red-900 bg-clip-text text-transparent animate-pulse">Our Services</h1>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Service 1 - Car Sales */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <Image
            src={fleet} 
            alt="Car Sales"
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="md:w-2/3">
            <h2 className="text-3xl underline decoration-red-700 font-bold"> Wide Range of Cars</h2>
            <p className="text-gray-700 mt-2">
              Explore a vast collection of high-quality new and pre-owned vehicles suited to every need and budget. We are committed to providing vehicles that meet our customers' expectations with top-notch performance and reliability.
            </p>
            <Link href="/carcollection"> <button className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-lg transform transition duration-300 ease-in-out hover:bg-red-900 hover:scale-105 hover:rotate-6 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Explore Cars</button></Link>
          </div>
        </div>

        {/* Service 2 - Car Leasing */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <Image
            src={carleasing} 
            alt="Car Leasing"
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="md:w-2/3">
            <h2 className="text-3xl underline decoration-red-700 font-bold">Car Leasing</h2>
            <p className="text-gray-700 mt-2">
              Flexible and affordable leasing options tailored to meet your personal or business needs. Drive the latest models with low monthly payments and easy terms, giving you the freedom to upgrade whenever you desire.
            </p>
            <Link href="/about"> <button className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-lg transform transition duration-300 ease-in-out hover:bg-red-900 hover:scale-105 hover:rotate-6 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Learn more</button></Link>
           
          </div>
        </div>

        {/* Service 3 - Customization & Upgrades */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <Image
            src={maintanence}
            alt="Customization & Upgrades"
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="md:w-2/3">
            <h2 className="text-3xl underline decoration-red-700 font-bold">Customization & Upgrades</h2>
            <p className="text-gray-700 mt-2">
              Transform your vehicle with our premium customization and upgrade services. From performance enhancements to interior modifications, we help you create a car that’s uniquely yours.
            </p>
            <Link href="/about"> <button className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-lg transform transition duration-300 ease-in-out hover:bg-red-900 hover:scale-105 hover:rotate-6 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Check out</button></Link>
          </div>
        </div>

        {/* Service 4 - Maintenance & Support */}
        <div className="bg-white p-6 rounded-lg shadow-lg  flex flex-col md:flex-row items-center">
          <Image
            src={customercare}
            alt="customer care & Support"
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="md:w-2/3">
            <h2 className="text-3xl underline decoration-red-700 font-bold">Customer Care</h2>
            <p className="text-gray-700 mt-2">
            Behind every car is a team of dedicated professionals who bring expertise, passion, and a commitment to excellence. We’re here to answer your questions, help with selections, and guide you through the process, so you feel confident every step of the way.

.
            </p>

            <Link href="/contact">
  <button className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-lg transform transition duration-300 ease-in-out hover:bg-red-900 hover:scale-105 hover:rotate-6 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
    Meet Our Team
  </button>
</Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
