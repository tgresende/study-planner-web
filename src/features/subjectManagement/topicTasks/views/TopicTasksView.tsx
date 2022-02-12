import React, { FunctionComponent } from "react";

import { Divider, IconButton } from "@mui/material";

import TopicTaskCard from "../cards/TopicTaskCard";
import { getAllTopicTasks } from "../api/TopicTasksViewApi";
import { ITopicTask } from "../api/TopicTasksViewApiInterface";
import { SimpleDialog } from "../../../../shared/components/dialogs/simpleDialog/SimpleDialog";
import NewTopicTaskForm from "../forms/NewTopicTaskForm";


type TopicTasksViewEntries = {
  subjectId: number;
  subjectName: string;
};

const TopicTasksView : FunctionComponent<TopicTasksViewEntries> = ({
  subjectId,
  subjectName
}) => {
  const [topics, setTopics] = React.useState<ITopicTask[] | []>([]);
  const [isNewTaskTopicDialogOpen, setIsNewTaskTopicDialogOpen] = React.useState<boolean>(false);

  async function getTopics() {
    const topics = await getAllTopicTasks(subjectId);
    setTopics(topics);
  }
  
  React.useEffect(() => {
    getTopics();
  }, []);

  return (
    <div>
       <IconButton>
        V
        </IconButton>
          Ciclos
        <IconButton onClick={()=>setIsNewTaskTopicDialogOpen(true)}>
        +
        </IconButton>
      <Divider/>
      <div>
        {topics.map((topic) => (
        <TopicTaskCard topicInfo={topic} />
        ))}
        <SimpleDialog
            open={isNewTaskTopicDialogOpen}
            onClose={() => setIsNewTaskTopicDialogOpen(false)}
            title={"Inserir Nova Tarefa"}
            childComponent={
              <NewTopicTaskForm
                closeParent = {() => setIsNewTaskTopicDialogOpen(false)}
                subjectName = {subjectName}
                addtopicToView = {()=>null}
              />
            }
          />
      </div>
    </div>
  );
}

export default TopicTasksView;