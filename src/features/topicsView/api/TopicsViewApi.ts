import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPGet } from "../../../shared/api/apiHandle";
import { ITopic } from "./TopicsViewApiInterface";

export async function getAllTopics(subjectId: number = 0): Promise<ITopic[]> {
  const URL = mountURLgetAllTopicsFromProject(subjectId);
  //const topics = await HTTPGet(URL);

  const topicA : ITopic= {
    name : "Aula 0 -  Estratégia",
    subjectId : 1,
    topicId: 1
  }

  const topics = [topicA]
 


  return topics;
}

const mountURLgetAllTopicsFromProject = (subjectId: number): string =>
  API_BASE_ADDRESS + `/Topics/GetTopicsFromSubject/${subjectId}`;
