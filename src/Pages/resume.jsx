import React from "react";
import Layout from "../Layouts/Layout.jsx";
import Button from "../components/button.jsx";

const Resume = () => {
  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
          }
          .content {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Changed from 'left' to 'flex-start' */
            overflow: hidden; /* Ensure no overflow issues */
          }
          .btn-container {
            margin: 2rem;
          }
          embed {
            flex: 1; /* Allow embed to take available space */
            width: 100%;
            height: calc(100vh - 4rem); /* Adjust height to account for button container margin */
            border: none;
          }
        `}
      </style>
      <Layout title="Resumé">
        <div className="content">
          <div className="btn-container">
            <Button
              label="Back"
              href="/"
              icon='<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="white" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13m8 9l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'
            />
          </div>
          <embed src="https://jmp.sh/6Bd4UN55"/>
        </div>
      </Layout>
    </>
  );
};

export default Resume;
