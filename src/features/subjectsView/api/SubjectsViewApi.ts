import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPGet } from "../../../shared/api/apiHandle";
import { ISubject } from "./SubjectsViewApiInterface";

export async function getAllSubjects(projectId: number = 0): Promise<ISubject[]> {
  const URL = mountURLgetAllSubjectsFromProject(projectId);
  //const subjects = await HTTPGet(URL);

  const subject1 : ISubject = {
    name: "assunto",
    subjectId: 1,
    weight: 10
  }
  
  const subjects = [subject1];
  return subjects;
}

const mountURLgetAllSubjectsFromProject = (projectId: number): string =>
  API_BASE_ADDRESS + `/Subjects/GetSubjectsFromProject/${projectId}`;
