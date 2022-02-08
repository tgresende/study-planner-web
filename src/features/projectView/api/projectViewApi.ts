import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPGet } from "../../../shared/api/apiHandle";
import { IProject } from "./projectViewApiInterface";

export async function getAllProjects(): Promise<IProject[] | []> {
  const URL = mountURLgetAllProjects();
  const projects = await HTTPGet(URL);
  return projects;
}

const mountURLgetAllProjects = (): string => API_BASE_ADDRESS + "/Project";
