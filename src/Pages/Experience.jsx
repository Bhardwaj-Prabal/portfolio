import React from "react";
import { Routes, Route } from "react-router-dom";
import ForwardButton from "../components/ForwardButton";

import "./experience.css";

const Experience = () => {
  return (
    <>
      <div className="title">
        <h2>Experience</h2>
      </div>
      <ul className="main-list">
        <li className="main-list-item">
          <div className="main-list-header">
            <h3>Fourth Rev Edu Pvt Ltd</h3>
            <p>
              <i>Intern</i>
            </p>
          </div>
          <ul className="sub-list">
            <li className="sub-list-item">
              <p>
                Verified and created high-quality educational content for
                secondary classes, focusing on IIT JEE preparation.
              </p>
            </li>
            <li className="sub-list-item">
              <p>
                Ensured accuracy and relevance of e-content to align with
                curriculum standards and educational goals.
              </p>
            </li>
          </ul>
        </li>

        <ForwardButton
          label="View Resume"
          href="/Resume/"
          icon='<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M16 3a3 3 0 0 1 2.995 2.824L19 6v10h.75c.647 0 1.18.492 1.244 1.122l.006.128V19a3 3 0 0 1-2.824 2.995L18 22H8a3 3 0 0 1-2.995-2.824L5 19V9H3.25a1.25 1.25 0 0 1-1.244-1.122L2 7.75V6a3 3 0 0 1 2.824-2.995L5 3zm3 15h-9v1c0 .35-.06.687-.17 1H18a1 1 0 0 0 1-1zm-7-6h-2a1 1 0 0 0-.117 1.993L10 14h2a1 1 0 0 0 .117-1.993zm2-4h-4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2M5 5a1 1 0 0 0-1 1v1h1z"/></g></svg>'
        />
      </ul>
    </>
  );
};

export default Experience;
