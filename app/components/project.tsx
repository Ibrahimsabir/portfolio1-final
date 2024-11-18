import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiDownloadCloud } from "react-icons/fi";

export default function Project(){
    return(
      <div id="projects" >
        <section  className="text-gray-600 body-font bg-yellow-50 mt-0 pt-16">
        <h1 className="flex justify-center mt-0 title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">My Projects</h1>

        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-80 absolute inset-0"
                src="/images/istockphoto-1469720304-612x612.jpg"
                width={300}
                height={200}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-white font-medium title-font mb-2">
                 Security Services
                </h2>
                <p className="leading-relaxed text-white">
                 Your security is our priority
                </p>
                <Link href="#" className="mt-5 text-indigo-700 font-semibold inline-flex items-center">
                  More Details
                  <FiDownloadCloud className="text-xl ml-2" />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-80 absolute inset-0"
                    src="/images/istockphoto-1431353475-2048x2048.jpg"
                    width={100}
                    height={100}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-white font-medium title-font mb-2">
                      Pharmaceutical 
                    </h2>
                    <p className="leading-relaxed">
                      
                    </p>
                    <Link href={"#"} className="mt-3 text-indigo-700 font-semibold inline-flex items-center">
                      More Details
                      <FiDownloadCloud className="text-xl ml-2" /> 
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-white sm:py-24 py-16 sm:px-10 px-6 relative">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-80 absolute inset-0"
                    src="/images/istockphoto-1396463217-612x612.jpg"
                    width={100}
                    height={100}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-white font-medium title-font mb-2">
                      School Management System
                    </h2>
                    <p className="leading-relaxed">
                      
                    </p>
                    <Link href={"#"} className="mt-3 text-indigo-700 font-semibold inline-flex items-center">
                      Learn More
                      <FiDownloadCloud className="text-xl ml-2" />
          
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div> 

    )
}