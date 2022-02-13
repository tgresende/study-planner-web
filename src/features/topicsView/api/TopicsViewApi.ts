import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { ITopic } from "../../../context/TopicsContext";
import { HTTPGet } from "../../../shared/api/apiHandle";

export async function getAllTopics(subjectId: number = 0): Promise<ITopic[]> {
  const URL = mountURLgetAllTopicsFromProject(subjectId);
  const topics = await HTTPGet(URL);
  return topics;
}

const mountURLgetAllTopicsFromProject = (subjectId: number): string =>
  API_BASE_ADDRESS + `/Topics/GetTopicsFromSubject/${subjectId}`;
