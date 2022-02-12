import React, { FunctionComponent } from "react";

import { Divider, IconButton } from "@mui/material";

import TopicTaskCard from "../cards/TopicTaskCard";
import { getActiveTopicTasks } from "../api/TopicTasksViewApi";
import { SimpleDialog } from "../../../../shared/components/dialogs/simpleDialog/SimpleDialog";
import NewTopicTaskForm from "../forms/NewTopicTaskForm";
import { TopicTasksContext, TopicTasksContextType } from "../../../../context/TopicTasksContext";


type TopicTasksViewEntries = {
  subjectId: number;
  subjectName: string;
};

const TopicTasksView : FunctionComponent<TopicTasksViewEntries> = ({
  subjectId,
  subjectName
}) => {
  const { setTopicTasksList, topicTasks } = React.useContext(TopicTasksContext)! as TopicTasksContextType;
  const [isNewTaskTopicDialogOpen, setIsNewTaskTopicDialogOpen] = React.useState<boolean>(false);

  async function getTopicTasks() {
    const tasks = await getActiveTopicTasks(subjectId);
    setTopicTasksList(tasks);
  }
  
  React.useEffect(() => {
    getTopicTasks();
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
        {topicTasks.map((task) => (
        <TopicTaskCard topicTaskInfo={task} />
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