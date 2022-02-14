import { updateTopicTaskService } from "../../../../../shared/api/updateTopicTaskUseCaseApi/updateTopicTaskUseCaseApi";


export function updateTopicTask(topicTaskId: number, actionDescription:string, actionSource:string){

    updateTopicTaskService({
        topicTaskId,
        actionDescription,
        actionSource
    });

  
}