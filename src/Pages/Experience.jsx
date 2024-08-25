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
            <h3>JMedia Corporation </h3>
            <p>
              <i>Blockchain Development Intern</i>

            </p>
          </div>
          <ul className="sub-list">
            <li className="sub-list-item">
              <p>
                Engaged in the development and deployment of blockchain solutions, particularly focusing on NFTs (Non-Fungible Tokens).
              </p>
            </li>
            <li className="sub-list-item">
              <p>
                Developed and optimized smart contracts for NFT creation and transactions using Solidity.
              </p>
            </li>
            <li className="sub-list-item">
              <p>
                Designed and implemented workflows for minting and distributing NFTs on various blockchain platforms such as Ethereum.
              </p>
            </li>
            <li className="sub-list-item">
              <p>
                Utilized <code>ethers.js</code> for interacting with the Ethereum blockchain, enabling seamless integration and management of smart contracts.
              </p>
            </li>
          </ul>
        </li>
        <li className="main-list-item">
          <div className="main-list-header">
            <h3>IBM SkillsBuild </h3>
            <p>
              <i>Frontend developer Internship Summer Program</i>

            </p>
          </div>
          <ul className="sub-list">
            <li className="sub-list-item">
              <p>
                Developed and implemented web interfaces using HTML, CSS,JavaScript, and React adhering to best practices in responsive design..
              </p>
            </li>
            <li className="sub-list-item">
              <p>
                Demonstrated strong technical skills and a keen eye for design in various web development projects.
              </p>
            </li>
            <li className="sub-list-item">
              <p>
                Quickly learned and applied new technologies and frameworks to enhance project functionality and user experience.
              </p>
            </li>
          </ul>
        </li>
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
          icon='<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="white" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13m8 9l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'
        />
      </ul>
    </>
  );
};

export default Experience;
