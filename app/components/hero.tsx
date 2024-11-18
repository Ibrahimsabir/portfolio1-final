"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextEffect from "./texteffect";

export default function Hero() {
  return (
    <div id="hero">
      <section className="text-gray-600 body-font bg-yellow-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-left text-center mx-auto">
            <h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              {/* <span className="animate-fadeIn">
                UI/UX Designer
              </span> */}
              <TextEffect/>
            </h1>
            
            <div className="w-[100px] h-[2px]  bg-gray-500 mb-3">

            </div>

            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              tenetur dolorem quasi hic, fugiat rerum neque. Nihil molestias
              rerum obcaecati voluptate tenetur, eius, accusamus explicabo
              debitis, harum exercitationem ducimus inventore!
            </p>
            <div className="flex justify-center space-x-4">
              <Link href={"#contact"}>
              <button className="inline-flex items-center border-2 text-white border-yellow-500 bg-yellow-500 py-1 px-3 
          focus:outline-none hover:bg-gray-200 hover:border-yellow-500 hover:text-yellow-500  rounded text-base mt-4 md:mt-0">
                Contact
              </button>
              </Link>
              <Link href={"#projects"}>
              <button className="inline-flex items-center border-2 text-gray-600 border-gray-300 bg-gray-300 space-mr-3 py-2 px-5 
          focus:outline-none hover:bg-gray-200 hover:border-yellow-500 hover:text-yellow-500  rounded text-base mt-4 md:mt-0">
                Projects
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
              className="object-cover object-center rounded-full mx-auto w-[20rem]"
              alt="hero"
              src="/images/girl-with-long-hair-being-happy.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
