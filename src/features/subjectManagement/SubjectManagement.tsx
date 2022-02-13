import { useLocation, useNavigate } from "react-router-dom";
import { IconButton, TextField, Typography } from "@mui/material";
import TopicsView from "../topicsView/views/TopicsView";
import TopicTasksView from "./topicTasks/views/TopicTasksView";
import React from "react";

type SubjectInfo = {
    name: string;
    subjectId: number;
    weight: number;
    annotations : string;
}

type stateSubject = {
    subject: SubjectInfo;
}

function SubjectManagement(){
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as stateSubject;
    const subject : SubjectInfo = state.subject as SubjectInfo;
    const {name, weight, subjectId, annotations : annot} = subject;
    const [annotations, setAnnotations] = React.useState<string>(annot);
    const [annotationsEditionMode, setAnnotationsEditionMode] = React.useState<boolean>(false);


    function navigateToSubjectsView(){
        navigate('/subject')
    }

    function saveAnnotations(){
        
        setAnnotationsEditionMode(false)
    }

    return<>
        <Typography>
            <IconButton onClick={navigateToSubjectsView}>
                m
            </IconButton>
            assunto {name} - peso {weight} - id {subjectId} 
        </Typography>
        <TextField
            id="standard-basic"
            label="Anotações"
            disabled={!annotationsEditionMode}
            variant="standard"
            value={annotations}
            onChange={(e) => setAnnotations(e.target.value)}
        />
        <IconButton 
            size={"small"} 
            onClick={() => setAnnotationsEditionMode(true)}
            disabled={annotationsEditionMode}
        >
                editar
        </IconButton>
        <IconButton 
            size={"small"} 
            onClick={saveAnnotations}
            disabled={!annotationsEditionMode}
        >
                salvar
        </IconButton>        
        <TopicsView 
            subjectId={subjectId}
            subjectName={name}
        />
        <TopicTasksView 
            subjectId={subjectId}
            subjectName={name}
        />

    </>
}

export default SubjectManagement;