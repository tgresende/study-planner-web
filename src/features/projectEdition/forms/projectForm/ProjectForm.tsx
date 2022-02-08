import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import { Button, TextField } from "@mui/material";
import { saveProject } from "../../functions/projectViewUtils";
import { IProjectRequestModel } from "../../api/projectEditionApiInterface";
import { ERROR_SAVE_MESSAGE } from "../../../../shared/constants/Messages";

interface InputProjectInfo {
  projectId?: number;
  name?: string;
  closeParent: Function;
}

export const ProjectForm: FunctionComponent<InputProjectInfo> = ({
  name = "",
  projectId = 0,
  closeParent,
}) => {
  const [projectName, setProjectName] = React.useState<string>(name);

  const save = async () => {
    const inputProjectData: IProjectRequestModel = {
      id: projectId,
      name: projectName,
    };

    const result = await saveProject(inputProjectData);

    if (result) {
      closeParent(result);
      return;
    }

    alert(ERROR_SAVE_MESSAGE);
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
      <Button onClick={save}>Salvar</Button>
    </Card>
  );
};

export default ProjectForm;
