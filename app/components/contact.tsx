import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57916.958102851444!2d67.3682278!3d24.870342100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727365213255!5m2!1sen!2"
          style={{ filter: "contrast(1.2) opacity(0.4)" }}
        />
      </div>
      <div className=" container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-yellow-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-gray-700">
            For more details feel free to contact
          </p>
          <form action="https://formspree.io/f/xzzbewvn"
           method="POST">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700 ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter yor name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="subject" className="leading-7 text-sm text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter your email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
              required
            />
          </div>
          <button className="text-white bg-yellow-500 border-2 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-yellow-500 rounded text-lg">
            Send Massege
          </button>
          </form>
        </div>
      </div>
    </section>
  );
}
