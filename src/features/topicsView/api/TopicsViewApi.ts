import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPGet } from "../../../shared/api/apiHandle";
import { ITopic } from "./TopicsViewApiInterface";

export async function getAllTopics(projectId: number = 0): Promise<ITopic[]> {
  const URL = mountURLgetAllTopicsFromProject(projectId);
  const topics = await HTTPGet(URL);
  return topics;
}

const mountURLgetAllTopicsFromProject = (subjectId: number): string =>
  API_BASE_ADDRESS + `/Topics/GetTopicsFromProject/${subjectId}`;
