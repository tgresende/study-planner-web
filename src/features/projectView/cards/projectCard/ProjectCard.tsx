import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";

type CardProps = {
  projectId: number;
  name: string;
};

export const ProjectCard: FunctionComponent<CardProps> = ({
  name,
  projectId,
}) => (
  <Card>
    <h2>{name}</h2>
    <p>{projectId}</p>
  </Card>
);

export default ProjectCard;
