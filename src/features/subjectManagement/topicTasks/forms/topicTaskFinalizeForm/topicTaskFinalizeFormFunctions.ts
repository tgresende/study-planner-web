import { finalizeTopicTaskService, IFinalizeTopicTaskRequestModel } from "../../../../../shared/api/finalizeTopicTaskUseCaseApi/finalizeTopicTaskUseCaseApi";


export function finalizeTopicTask(requestModel : IFinalizeTopicTaskRequestModel){
    finalizeTopicTaskService(requestModel);
}