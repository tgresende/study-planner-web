import { emptyString } from "../../../shared/utils/string";
import { persistProject } from "../api/projectEditionApi";
import { IProjectRequestModel } from "../api/projectEditionApiInterface";

export async function saveProject(
  projectData: IProjectRequestModel
): Promise<null | IProjectRequestModel> {
  const isValidData = validateProjectData(projectData);

  if (!isValidData) return null;

  const project = await persistProject(projectData);

  return project;
}

function validateProjectData(projectData: IProjectRequestModel): boolean {
  const { name, id } = projectData;

  if (emptyString(name)) return false;
  if (invalidProjectId(id)) return false;

  return true;
}

function invalidProjectId(id: number): boolean {
  return id < 0;
}
