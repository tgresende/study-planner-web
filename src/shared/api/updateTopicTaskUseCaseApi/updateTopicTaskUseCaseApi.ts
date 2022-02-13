import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPPost } from "../apiHandle";


const URL = API_BASE_ADDRESS + "/TopicTasks/UpdateTopicTask";

interface UpdateTopicTaskRequestModel {
    topicId: number;
    actionDescription: string;
    actionSource: string
}

export function updateTopicTaskService(contract : UpdateTopicTaskRequestModel){
    HTTPPost(URL, contract);
}



