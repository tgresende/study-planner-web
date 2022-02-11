import { useNavigate } from "react-router-dom";

import { IconButton, Typography } from "@mui/material";
import TopicsView from "../topicsView/views/TopicsView";
import TopicTasksView from "./views/topicTaskView/views/TopicTasksView";

function SubjectManagement(){

    const navigate = useNavigate();
    function navigateToSubjectsView(){
        navigate('/subject')
    }

    return<>
        <Typography>
            <IconButton onClick={navigateToSubjectsView}>
                menu
            </IconButton>
            Nome da matéria
        </Typography>
        <TopicsView/>
        <TopicTasksView/>

    </>
}

export default SubjectManagement;