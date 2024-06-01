import React from "react";
import FlickrCarousel from "../components/FlickrCaraousel";
import Button from "../components/ForwardButton";

const Certificates = () => {
  const apiKey = process.env.REACT_APP_FLICKR_API_KEY; // Adjusted to use React environment variable
  const userId = process.env.REACT_APP_FLICKR_USER_ID; // Adjusted to use React environment variable

  return (
    <>
      <div className="title">
        <h2>Certificates</h2>
      </div>
      <div className="content">
        <FlickrCarousel apiKey={apiKey} userId={userId} />
      </div>
      <style jsx>{`
        :root {
          --card-title: #94b8f9;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          list-style-type: none;
          width: 100%;
          margin: 1rem;
          padding: 1rem;
          gap: 2.5rem;
        }
      `}</style>
    </>
  );
};

export default Certificates;
