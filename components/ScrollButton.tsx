"use client";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import React from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-24 right-[8.7rem] z-50">
      {isVisible && (
        <button
          className="bg-blue-400 hover:bg-gray-800 rounded-full p-3"
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} color="white" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
