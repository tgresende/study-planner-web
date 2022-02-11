import { useLocation, useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import TopicsView from "../topicsView/views/TopicsView";
import TopicTasksView from "./views/topicTaskView/views/TopicTasksView";

type SubjectInfo = {
    name: string;
    subjectId: number;
    weight: number;
}

type stateSubject = {
    subject: SubjectInfo;
}

function SubjectManagement(){
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as stateSubject;
    const subject : SubjectInfo = state.subject as SubjectInfo;

    const {name, weight, subjectId} = subject;

    function navigateToSubjectsView(){
        navigate('/subject')
    }

    return<>
        <Typography>
            <IconButton onClick={navigateToSubjectsView}>
                m
            </IconButton>
            assunto {name} - peso {weight} - id {subjectId}
        </Typography>
        <TopicsView/>
        <TopicTasksView/>

    </>
}

export default SubjectManagement;