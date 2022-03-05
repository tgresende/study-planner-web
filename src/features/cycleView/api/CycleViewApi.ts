import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { ICycleItem } from "../../../context/SubjectTasksContext";
import { HTTPDelete, HTTPGet, HTTPPost } from "../../../shared/api/apiHandle";

export async function getActiveSubjectTasks(
  projectId: number = 0
): Promise<ICycleItem[]> {
  const URL = mountURLgetActiveSubjectTasks(projectId);
  const subjects = await HTTPGet(URL);

  return subjects;
}

export async function finalizeSubjectTaskService(
  subjectTaskId: number = 0
): Promise<ICycleItem[]> {
  const URL = mountURLDeleteSubjectTask(subjectTaskId);
  const subjects = await HTTPDelete(URL);

  return subjects;
}

export async function generateNewCycle(projectId: number = 0): Promise<void> {
  const URL = mountURLGenerateNewCycle(projectId);
  await HTTPPost(URL, {});
}

const mountURLGenerateNewCycle = (projectId: number): string =>
  API_BASE_ADDRESS + `/Subjects/GenerateSubjectCycleUseCase/${projectId}`;

const mountURLgetActiveSubjectTasks = (projectId: number): string =>
  API_BASE_ADDRESS + `/Subjects/GetActiveSubjectTasks/${projectId}`;

const mountURLDeleteSubjectTask = (subjectTaskId: number): string =>
  API_BASE_ADDRESS + `/SubjectTasks/FinalizeSubjectTask/${subjectTaskId}`;
