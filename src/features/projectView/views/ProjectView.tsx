import { Button, CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { sleep } from "../../../shared/api/awaiter";
import { SimpleDialog } from "../../../shared/components/dialogs/simpleDialog/SimpleDialog";
import ProjectForm from "../../projectEdition/forms/projectForm/ProjectForm";
import ProjectCard from "../cards/projectCard/ProjectCard";

const projectArrayMock = [
  { projectId: 1, name: "teste" },
  { projectId: 2, name: "teste2" },
  { projectId: 3, name: "teste3" },
];

interface IProject {
  name: string;
  projectId: number;
}

function ProjectView() {
  const [projects, setProjects] = React.useState<IProject[] | []>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function getProjects() {
      setIsLoading(true);
      await sleep(3000);
      setProjects(projectArrayMock);
      setIsLoading(false);
    }
    getProjects();
  }, []);

  return (
    <Card>
      <h1>Projects</h1>
      <Button onClick={() => setIsDialogOpen(true)}>
        Adicionar Novo Projeto
      </Button>
      {isLoading ? (
        <CircularProgress />
      ) : (
        projects.map((project) => (
          <ProjectCard projectId={project.projectId} name={project.name} />
        ))
      )}
      <SimpleDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        childComponent={<ProjectForm />}
      />
    </Card>
  );
}

export default ProjectView;
