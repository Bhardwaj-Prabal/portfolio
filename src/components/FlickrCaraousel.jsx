import React, { useState } from "react";
import image1 from "../images/javascript-basic.png";
import image2 from "../images/problem-solving.png";
import image3 from "../images/react-dev.png";
import image4 from "../images/software.png";
import "./caraousel.css";
const images = [image3,image4, image1, image2];

const FlickrCarousel = () => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevPhoto = () => {
    setPhotoIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((photo, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === photoIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={photo}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === photoIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === photoIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setPhotoIndex(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevPhoto}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextPhoto}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default FlickrCarousel;
