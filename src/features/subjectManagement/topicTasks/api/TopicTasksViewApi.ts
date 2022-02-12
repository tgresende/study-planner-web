import { API_BASE_ADDRESS } from "../../../../configuration/api/apiConfiguration";
import { ITopicTask } from "../../../../context/TopicTasksContext";
import { HTTPGet } from "../../../../shared/api/apiHandle";
import { getURLGetActiveTopicTask } from "../../../../shared/constants/ApiURL";

export async function getActiveTopicTasks(topicId: number = 0): Promise<ITopicTask[]> {
  const URL = getURLGetActiveTopicTask(topicId);
  const topicTasks = await HTTPGet(URL);
  return topicTasks;
}


