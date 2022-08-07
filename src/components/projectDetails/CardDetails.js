import React from "react";
import { Badge, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export function CardDetailsComponent({ project }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/`, { replace: true });
  };
  return (
    <div className="detailCard">
      <img
        className="detailImg"
        src={process.env.PUBLIC_URL + "/" + project.source}
        alt=""
      />
      <div className="card-body">
        <h2>{project.title}</h2>
        <p>{project.longDescription}</p>
        {project.technologies.split(" ").map((technology) => (
          <Badge className="techBadge" color="success" key={technology} pill>
            {technology}{" "}
          </Badge>
        ))}
        <br />
        <Badge className="techBadge" color="danger" pill>
          {project.date}
        </Badge>
        <br />
        {project.pdf && (
          <h6 className="techBadge" color="secondary">
            <a href={process.env.PUBLIC_URL + "/" + project.pdf} className = "detailA" target="blank">
              Read The Paper
            </a>
          </h6>
        )}
        {project.live && (
          <h6 className="techBadge" color="secondary">
            <a href={project.live} target="blank" className = "detailA">
              Open The App
            </a>
          </h6>
        )}
        {project.github && (
          <h6 className="techBadge" color="secondary">
            <a href={project.github} target="blank" className = "detailA">
              See The Source Code
            </a>
          </h6>
        )}
        <br />
        <Button
          className="seeDetailsButton"
          color="warning"
          id={project.key}
          onClick={handleClick}
        >
          BackPage
        </Button>
      </div>
    </div>
  );
}
