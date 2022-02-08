import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import { Button, TextField } from "@mui/material";

interface InputProjectInfo {
  projectId?: number;
  name?: string;
}

export const ProjectForm: FunctionComponent<InputProjectInfo> = ({
  name = "",
  projectId = 0,
}) => {
  const [projectName, setProjectName] = React.useState<string>(name);

  const save = () => {
    const body = { projectId: projectId, name: projectName };
    alert(JSON.stringify(body));
  };

  return (
    <Card>
      <TextField
        id="standard-basic"
        label="Nome do Projeto"
        variant="standard"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <h2>{projectName}</h2>
      <Button onClick={save}>Salvar</Button>
    </Card>
  );
};

export default ProjectForm;
