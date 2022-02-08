import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPDelete, HTTPGet } from "../../../shared/api/apiHandle";
import { IProject } from "./projectViewApiInterface";

export async function getAllProjects(): Promise<IProject[] | []> {
  const URL = mountURLgetAllProjects();
  const projects = await HTTPGet(URL);
  return projects;
}

export async function deleteProject(projectId: number): Promise<boolean> {
  const URL = mountURLdeleteProject(projectId);

  await HTTPDelete(URL);

  return true;
}

const mountURLgetAllProjects = (): string => API_BASE_ADDRESS + "/Project";
const mountURLdeleteProject = (id: number): string =>
  API_BASE_ADDRESS + `/Project/${id}`;
