import { API_BASE_ADDRESS } from "../../configuration/api/apiConfiguration";

//Topics
export const getURLInsertTopic = (): string => API_BASE_ADDRESS + "/Topics/InsertTopic";

//TopicTask
export const getURLInsertTopicTask = (): string => API_BASE_ADDRESS + "/TopicTasks/InsertNewTopicTask";