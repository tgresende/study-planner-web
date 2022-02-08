import { Button, CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { SimpleDialog } from "../../../shared/components/dialogs/simpleDialog/SimpleDialog";
import ProjectForm from "../../projectEdition/forms/projectForm/ProjectForm";
import { getAllProjects } from "../api/projectViewApi";
import { IProject } from "../api/projectViewApiInterface";
import ProjectCard from "../cards/projectCard/ProjectCard";

function ProjectView() {
  const [projects, setProjects] = React.useState<IProject[] | []>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function getProjects() {
      setIsLoading(true);
      const projectsAPI = await getAllProjects();
      setProjects(projectsAPI);
      setIsLoading(false);
    }
    getProjects();
  }, []);

  function onCloseParentFunction(project: IProject): void {
    setIsDialogOpen(false);
    setProjects([project, ...projects]);
  }

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
        childComponent={<ProjectForm closeParent={onCloseParentFunction} />}
        title={"Inserir Novo Projeto"}
      />
    </Card>
  );
}

export default ProjectView;
