import { updateTopicTaskService } from "../../../../../shared/api/updateTopicTaskUseCaseApi/updateTopicTaskUseCaseApi";


export function UpdateTopicTask(topicId: number, actionDescription:string, actionSource:string){

    alert(JSON.stringify({
        topicId,
        actionDescription,
        actionSource
    }));

    return;
    
    updateTopicTaskService({
        topicId,
        actionDescription,
        actionSource
    });

  
}