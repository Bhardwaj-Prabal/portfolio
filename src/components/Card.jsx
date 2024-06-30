  import React from "react";
  import CardButton from "./CardButton";



  const Card = ({ title, description, img, viewBtn, demoBtn }) => {
    return (
      <div className="max-w-xs shadow rounded-xl border-4 border-[#454545]">
        <a
          href={demoBtn}
          aria-label={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="rounded-t-lg" src={img} alt={title} />
        </a>
        <div className="p-5 drop-shadow-lg">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
              {title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
          <div className="flex flex-column gap-4">
            <CardButton label="View Project" href={viewBtn} target="_blank" />
            <CardButton label="Live Demo" href={demoBtn} target="_blank" />
          </div>
        </div>
      </div>
    );
  };

  export default Card;
