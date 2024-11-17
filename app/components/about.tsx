import { div } from "framer-motion/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About(){
    return (
        <div id="about">
            <section className="text-gray-600 body-font bg-yellow-50">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-full mx-auto"
        alt="hero"
        src={require("../../images/girl-with-long-hair-being-happy.jpg")}
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Myself
        <br className="hidden lg:inline-block" />
       
      </h1>
      <p className="mb-8 leading-relaxed">
      Designing digital experiences that stand out! As a UI/UX designer with 
      expertise in Tailwind CSS, HTML, CSS, React, and Next.js, I blend 
      creativity with code to build sleek, responsive, and engaging websites.
       Let's create something amazing together!
      </p>
      <div className="flex justify-center">
        <Link href={require("../../images/Resume.png")}>
        <button className="inline-flex text-white bg-yellow-600 border-2 py-2 px-6 focus:outline-none hover:bg-white hover:border-yellow-600 hover:text-yellow-600 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

        </div>

    )
}