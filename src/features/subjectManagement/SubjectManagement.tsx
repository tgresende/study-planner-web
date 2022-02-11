import { IconButton, Typography } from "@mui/material";
import TopicsView from "../topicsView/views/TopicsView";
import TopicTasksView from "./views/topicTaskView/views/TopicTasksView";

function SubjectManagement(){

    return<>
        <Typography>
            <IconButton>
                menu
            </IconButton>
            Nome da matéria
        </Typography>
        <TopicsView/>
        <TopicTasksView/>

    </>
}

export default SubjectManagement;