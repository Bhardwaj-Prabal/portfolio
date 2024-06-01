import React from "react";
import Button from "../components/ForwardButton";
import Card from "../components/Card";
import websitev1 from "../images/websitev1.png";
import weatherapp from "../images/weather-app.png";
import todos from "../images/todo.png";
import rps from "../images/rps.png";
import game from "../images/memory-game.png";
import auth from "../images/auth.png";
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
            title="Pokemon memory-game"
            description="Embark on a journey down memory lane with our React-powered Pokémon Memory Game!"
            img={game}
            viewBtn="https://github.com/Bhardwaj-Prabal/memory-game"
            demoBtn="https://memory-game-jsjcx4cfz-bhardwaj-prabals-projects.vercel.app/"
          />
          <Card
            title="Weather App"
            description="My introduction to public APIs. Learned a lot about ES6, asynchronous functions, and await!"
            img={weatherapp}
            viewBtn="https://github.com/Bhardwaj-Prabal/Weather-app"
            demoBtn="https://weather-jeyt5ypv1-bhardwaj-prabals-projects.vercel.app/"
          />
          <Card
            title="To-Do List"
            description="A quick single component To-Do list in React. Was the first project I made in the framework from scratch!"
            img={todos}
            viewBtn="https://github.com/Bhardwaj-Prabal/Todo-App"
            demoBtn="https://todo-app-sigma-pearl.vercel.app/"
          />
          <Card
            title="Authentication App"
            description="A sample authentication system for a full stack program. Stored bcrypt hashed passwords in a MongoDB database."
            img={auth}
            viewBtn="https://github.com/Bhardwaj-Prabal/authentication-app"
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
