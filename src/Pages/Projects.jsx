import React from "react";
import Button from "../components/ForwardButton";
import Card from "../components/Card";
import isl from "../images/isl.png";
import game from "../images/memory-game.png";
import torro from "../images/torro.jpeg";
import Curvetopia from "../images/Curvetopia.png";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="content">
        <div className="grid">
          <Card
            className="grid-item"
            title="Curvetopia "
            description="Designed to process and analyze various geometric shapes by converting them into cubic Bezier curves.The project leverages several libraries, including NumPy, Matplotlib, Shapely, and SciPy, to facilitate the identification and manipulation of shapes like lines, circles, ellipses, rectangles, and more."
            img={Curvetopia}
            viewBtn="https://github.com/Bhardwaj-Prabal/Gensolve-Curvetopia-Solution"

          />
          <Card
            className="grid-item"
            title="Torro-Split:Torrent based file system"
            description="A secure, decentralized file management system that splits, encrypts, and distributes files across multiple nodes with real-time access and permission-based retrieval."
            img={torro}
            viewBtn="https://github.com/rnbr04/torro-split"
          />
          <Card
            className="grid-item"
            title="Indian Sign Language Detection"
            description="A machine learning model to interpret indian sign language.Uses LSTM and Mediapipe for interpreting."
            img={isl}
            viewBtn="https://github.com/sanskreate/ISL-detection-with-LSTM"
          />
          

          <Card
            className="grid-item"
            title="Pokemon memory-game"
            description="Embark on a journey down memory lane with our React-powered Pokémon Memory Game!"
            img={game}
            viewBtn="https://github.com/Bhardwaj-Prabal/memory-game"
            demoBtn="https://big-brain-pokemon.netlify.app/"
          />
        </div>

        <Button
          label="View All"
          href="/ProjectPage/"
          icon='<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="white" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13m8 9l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'
        />
      </div>
    </>
  );
};

export default Projects;
