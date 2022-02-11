import { API_BASE_ADDRESS } from "../../../../../configuration/api/apiConfiguration";
import { HTTPGet } from "../../../../../shared/api/apiHandle";
import { ITopicTask } from "./TopicTasksViewApiInterface";

export async function getAllTopicTasks(subjectId: number = 0): Promise<ITopicTask[]> {
  const URL = mountURLgetAllTopicsFromProject(subjectId);
  const topics = await HTTPGet(URL);
  return topics;
}

const mountURLgetAllTopicsFromProject = (subjectId: number): string =>
  API_BASE_ADDRESS + `/Topics/GetTopicsFromSubject/${subjectId}`;
