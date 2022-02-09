import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPGet } from "../../../shared/api/apiHandle";
import { ISubject } from "./SubjectsViewApiInterface";

export function getAllSubjects(projectId: number = 0): ISubject[] {
  const URL = mountURLgetAllSubjectsFromProject(projectId);
  const subjects = HTTPGet(URL);
  return subjects;
}

const mountURLgetAllSubjectsFromProject = (projectId: number): string =>
  API_BASE_ADDRESS + `/Subject/${projectId}`;
