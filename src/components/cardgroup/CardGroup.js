import React from "react";
import { CardComponent } from "../card/Card";
import data from "../../data/projects.json";
import { useNavigate } from "react-router-dom";

export function CardGroupComponent() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/projects/${e.target.id}`, { replace: true });
  };

  return (
    <div className="cards">
      {data.projects.map((project) => (
        <CardComponent
          project={project}
          key={project.key}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
