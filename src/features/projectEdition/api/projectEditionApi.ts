import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPPost } from "../../../shared/api/apiHandle";
import { IProjectRequestModel } from "./projectEditionApiInterface";

export async function persistProject(project: IProjectRequestModel) {
  const URL = mountURLgetAllProjects();
  const savedProject = await HTTPPost(URL, project);
  return savedProject;
}

const mountURLgetAllProjects = (): string => API_BASE_ADDRESS + "/Project";
