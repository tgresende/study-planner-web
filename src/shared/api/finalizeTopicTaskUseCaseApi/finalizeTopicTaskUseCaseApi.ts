import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPPost } from "../apiHandle";


const URL = API_BASE_ADDRESS + "/TopicTasks/FinalizeTopicTask";

export interface IFinalizeTopicTaskRequestModel {
    topicTaskId: number;
    actionDescription: string;
    actionSource: string;
    revisionItem: string;
    doneQuestionQuantity: number;
    correctQuestionQuantity: number;
}


export function finalizeTopicTaskService(requestModel : IFinalizeTopicTaskRequestModel){
    HTTPPost(URL, requestModel);
}



