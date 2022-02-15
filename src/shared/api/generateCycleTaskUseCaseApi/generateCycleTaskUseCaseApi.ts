import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPPost } from "../apiHandle";


const URL = API_BASE_ADDRESS + "/TopicTasks/GenerateCycleTask";


export interface IGenerateCycleTaskRequestModel{
    topicId: number,
    score: string
}


export async function generateCycleTaskService(requestModel : IGenerateCycleTaskRequestModel[]){
    const result = await HTTPPost(URL, requestModel);
    return result.data;
}



