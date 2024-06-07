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
              icon='<path fill="#2c55d3" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m.2-9l-.9.9q-.275.275-.275.7t.275.7t.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l.9.9H9q-.425 0-.712.288T8 12t.288.713T9 13z"/>'
            />
          </div>
          <embed src="https://jmp.sh/6Bd4UN55"/>
        </div>
      </Layout>
    </>
  );
};

export default Resume;
