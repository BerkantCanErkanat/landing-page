import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CardDetailsComponent } from "./CardDetails";
import data from "../../data/projects.json";
export function ProjectDetail() {
  let { projectKey } = useParams(); // bunla anlıcaz hangi productIdsinden geliyoruz
  const [project] = useState(data.projects.find((project) => project.key === projectKey));
  return (
    <div>
      <CardDetailsComponent project={project} />
    </div>
  );
}
