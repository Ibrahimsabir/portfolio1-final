"use client";
import React, { useEffect, useState } from "react";

const texts = [
  "an UI/UX Designer",
  "a Graphic Designer",
  "Expert in react.js", "bootstrap and Next.Js"
];

const TextEffect = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Text ko hide karne ke liye
      setTimeout(() => {
        // Next text par switch karein
        setCurrentTextIndex((prevIndex) =>
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
        setShowText(true); // Text ko dubara dikhayein
      }, 1000); // Ye 500ms ka delay text ko erase hone ke baad aglay text ke show hone se pehle lagata hai
    }, 5000); // Har 3 second ke baad text replace karein

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
     
      <p
        className={`text-3xl text-gray-600 transition-opacity duration-500 ${
          showText ? "opacity-100 animate-fadeIn" : "opacity-0"
        }`}
      >
        {texts[currentTextIndex]}
      </p>
    </div>
  );
};

export default TextEffect;
