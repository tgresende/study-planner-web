import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { FunctionComponent } from "react";
import { ITopic, TopicsContext, TopicsContextType } from "../../../../../context/TopicsContext";
import { ITopicTask, TopicTasksContext, TopicTasksContextType } from "../../../../../context/TopicTasksContext";
import { generateCycleTaskService, IGenerateCycleTaskRequestModel } from "../../../../../shared/api/generateCycleTaskUseCaseApi/generateCycleTaskUseCaseApi";
import { calcScoreTopic } from "../../../../../shared/functions/topicFunctions";
import { generateNewCycle } from "../../views/topicsTasksView/functions/topicTasksViewFunctions";

type cycleGeneratorFormEntries={
    closeParent: Function
}

const CycleGeneratorForm: FunctionComponent<cycleGeneratorFormEntries> = ({
    closeParent
}) =>{
    const { topics } = React.useContext(TopicsContext)! as TopicsContextType;
    const { setTopicTasksList } = React.useContext(TopicTasksContext)! as TopicTasksContextType;


    const [selectedTopicB, setSelectedTopicB] = React.useState<ITopic|null>(null);
    const [selectedTopicC, setSelectedTopicC] = React.useState<ITopic|null>(null);

    function setTopicB(topicId:Number|null){
        const topic : ITopic|null = topics.find(topic => topic.topicId ===topicId) || null;
        setSelectedTopicB(topic);
    }

    function setTopicC(topicId:Number|null){
        const topic : ITopic|null = topics.find(topic => topic.topicId ===topicId) || null;
        setSelectedTopicC(topic);
    }


    function showSelectiontopicsB(){
        const topicsB = topics.filter(topic => 
            topic.totalCorrectQuestion*100/topic.totalDoneQuestion > 60 &&
            topic.totalCorrectQuestion*100/topic.totalDoneQuestion < 80);

        if (topicsB.length === 0)
            return null;
        
        return (
            <>
                <InputLabel id="demo-simple-select-label">Tópico B</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedTopicB?.topicName}
                    label="Tópico B"
                    onChange={(event)=>setTopicB(parseInt(event.target.value!.toString()))}
                >
                    {topicsB.map((topic) =>  
                        <MenuItem 
                            value={topic.topicId}
                        >
                            {topic.topicName}
                        </MenuItem>
                    )}
                </Select>
            </>
        )
    }

    function showSelectiontopicsC(){
        const topicsC = topics.filter(topic => 
            topic.totalCorrectQuestion*100/(topic.totalDoneQuestion||1) <= 60);

        if (topicsC.length === 0)
            return null;
        
        return (
            <>
                <InputLabel id="demo-simple-select-label">Tópico C</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedTopicC?.topicName}
                    label="Tópico C"
                    onChange={(event)=>setTopicC(parseInt(event.target.value!.toString()))}
                >
                    {topicsC.map((topic) =>  
                        <MenuItem 
                            value={topic.topicId}
                        >
                            {topic.topicName}
                        </MenuItem>
                    )}
                </Select>
            </>
        )
    }

    async function generateCycle(){
        const topicsA = topics.filter(topic => 
            topic.totalCorrectQuestion*100/topic.totalDoneQuestion >= 80);

        const cycle = generateNewCycle(selectedTopicB, selectedTopicC, topicsA);

        let topicsApi : IGenerateCycleTaskRequestModel[] = [];

        cycle.forEach(topic => {
            topicsApi.push({
                topicId: topic.topicId,
                score: calcScoreTopic(topic.totalCorrectQuestion, topic.totalDoneQuestion)
            });
        });
        const newCycle : ITopicTask[] = await generateCycleTaskService(topicsApi)
        setTopicTasksList(newCycle);
    }

    return(
        <div>
            {showSelectiontopicsB()}
            {showSelectiontopicsC()}
            <Button onClick={generateCycle}>
                Gerar
            </Button>
        </div>
    )
}

export default CycleGeneratorForm;