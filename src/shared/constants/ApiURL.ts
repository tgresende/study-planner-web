import { API_BASE_ADDRESS } from "../../configuration/api/apiConfiguration";

//Subjects
export const getURLUpdateSubjectAnnotations = (): string => API_BASE_ADDRESS + "/Subjects/UpdateAnnotations";


//Topics
export const getURLInsertTopic = (): string => API_BASE_ADDRESS + "/Topics/InsertTopic";

//TopicTask
export const getURLInsertTopicTask = (): string => API_BASE_ADDRESS + "/TopicTasks/InsertNewTopicTask";
export const getURLGetActiveTopicTask = (topicId:number): string => API_BASE_ADDRESS + "/TopicTasks/GetActiveTopicTasks/"+topicId;
