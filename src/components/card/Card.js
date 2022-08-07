import React from "react";
import { Button,Badge } from "reactstrap";
export function CardComponent({ project, onClick }) {
  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL+"/"+ project.source} alt="" />
      <div className="card-body">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.technologies.split(" ").map((technology) => (
          <Badge className = "techBadge" color="success" key={technology} pill>
            {technology}{" "}
          </Badge>
        ))}
        <br/>
         <Badge className = "techBadge" color="danger" pill>
            {project.date}
          </Badge>
        <br/>
        <Button className="seeDetailsButton" color="warning" id={project.key} onClick={onClick}>
          See Details
        </Button>
      </div>
    </div>
  );
}
