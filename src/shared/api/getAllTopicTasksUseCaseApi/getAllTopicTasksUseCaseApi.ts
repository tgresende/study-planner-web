import { API_BASE_ADDRESS } from "../../../configuration/api/apiConfiguration";
import { HTTPGet } from "../apiHandle";


const URL = API_BASE_ADDRESS + "/TopicTasks/GetAllTopicTask/";


export interface IGetAllTopicTaskUseCaseApiRequestModel{
    topicId: number,
}

export interface IGetAllTopicTaskUseCaseApiResponseModel{
      topicTaskId : number,
      dateTimestamp : number,
      action : string,
      actionDescription : string,
      actionSource : string,
      revisionItem : string,
      doneQuestionQuantity : number,
      correctQuestionQuantity : number,
      status : number
}



export async function getAllTopicTasks(requestModel : IGetAllTopicTaskUseCaseApiRequestModel) 
: Promise<IGetAllTopicTaskUseCaseApiResponseModel[] | []> {
    const newURL = URL+requestModel.topicId;
    const result = await HTTPGet(newURL);
    return result as IGetAllTopicTaskUseCaseApiResponseModel[] | [];
}



