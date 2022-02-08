import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import ConfirmationDialog from "../../../../shared/components/dialogs/confirmationDialog/ConfirmationDialog";
import { deleteProject } from "../../api/projectViewApi";

type CardProps = {
  projectId: number;
  name: string;
  onDelete: Function;
};

export const ProjectCard: FunctionComponent<CardProps> = ({
  name,
  projectId,
  onDelete,
}) => {
  const [showConfirmationDialog, setShowConfirmationDialog] =
    React.useState<boolean>(false);

  const showDialog = () => setShowConfirmationDialog(true);

  const executeDelete = () => {
    onDelete(projectId);
    deleteProject(projectId);
    setShowConfirmationDialog(false);
  };

  const cancelDelete = () => setShowConfirmationDialog(false);

  return (
    <Card>
      <h2>{name}</h2>
      <p>{projectId}</p>
      <Button onClick={showDialog}>Excluir</Button>
      <ConfirmationDialog
        open={showConfirmationDialog}
        onAccept={executeDelete}
        onCancel={cancelDelete}
        message={`Você deseja realmente excluir o projeto - ${name} (${projectId})- e todas suas dependências?`}
        title={"Excluir Projeto"}
      />
    </Card>
  );
};

export default ProjectCard;
