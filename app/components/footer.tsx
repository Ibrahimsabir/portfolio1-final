import React from "react";
import Image from "next/image";
import { FaLinkedin, FaSquareFacebook, FaSquareTwitter, FaYoutube} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return(
  <div className="">
    <footer className="bg-gradient-to-r from-yellow-600 to-yellow-300 text-gray-600 body-font">
  <div className="container px-6 py-0 mx-auto flex items-center sm:flex-row flex-col">
  <div className=" ransition-transform duration-300 hover:scale-110">
    <Link href={"#navbar"} className="flex title-font font-medium items-center text-pink-500 ml-16 mb-4 md:mb-0 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
  <Image src={require("../../images/FullLogo_Transparent.png")} alt="Tech Tune" width={75} height={75} mr-8/> 
    
    </Link>
    </div>
    <div className="ransition-transform duration-300 hover:scale-110">
    <span className=" text-gray-200 text-xl ml-4 border-b-2">Tech Tune</span>
    </div>
    <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-100 sm:py-2 sm:mt-0 mt-4">
      © 2024 Tech Tune IT solution
     
    </p>
    
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"#"} className="text-facebook bg-gray-200 ransition-transform duration-300 hover:scale-110">
      <FaSquareFacebook />
      </Link>
      <Link href={"#"} className="ml-3 text-twitter bg-gray-200 ransition-transform duration-300 hover:scale-110">
      <FaSquareTwitter />
      </Link>
      <Link href={"#"} className="ml-3 text-youtube bg-gray-200 ransition-transform duration-300 hover:scale-110">
      <FaYoutube />
  
      </Link>
      <Link href={"https://www.linkedin.com/in/sualeha-khan-70b7972a9/"} 
            className="ml-3 text-linkedin bg-gray-200 ransition-transform 
            -300 hover:scale-110" target="_blank">
       
      <FaLinkedin /> 
      </Link>
    </span>
  </div>
</footer>

  </div>
  )
}