import {getURLUpdateSubjectAnnotations} from "../../../shared/constants/ApiURL";
import { HTTPPost } from "../../../shared/api/apiHandle";

export function saveAnnotations(subjectId:number, annotations:string){
    const body = {
        subjectId,
        annotations
    };
    const url = getURLUpdateSubjectAnnotations();

    HTTPPost(url, body);
}