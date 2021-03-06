import React, { FunctionComponent } from "react";

import { Divider, IconButton } from "@mui/material";

import TopicTaskCard from "../cards/TopicTaskCard";
import { getActiveTopicTasks } from "../api/TopicTasksViewApi";
import { SimpleDialog } from "../../../../shared/components/dialogs/simpleDialog/SimpleDialog";
import NewTopicTaskForm from "../forms/NewTopicTaskForm";
import {
  ITopicTask,
  TopicTasksContext,
  TopicTasksContextType,
} from "../../../../context/TopicTasksContext";
import CycleGeneratorForm from "../forms/cycleGeneratorForm/CycleGeneratorForm";
import { TopicTaskActions } from "../../../../shared/constants/TopicTaskConstants";

type TopicTasksViewEntries = {
  subjectId: number;
  subjectName: string;
};

const TopicTasksView: FunctionComponent<TopicTasksViewEntries> = ({
  subjectId,
  subjectName,
}) => {
  const { setTopicTasksList, topicTasks } = React.useContext(
    TopicTasksContext
  )! as TopicTasksContextType;
  const [isNewTaskTopicDialogOpen, setIsNewTaskTopicDialogOpen] =
    React.useState<boolean>(false);
  const [isCycleGeneratorOpen, setIsCycleGeneratorOpen] =
    React.useState<boolean>(false);
  const [showTopicTask, setShowTopicTasks] = React.useState<boolean>(false);

  function addTopicTaskContext(topicTask: ITopicTask) {
    setTopicTasksList([...topicTasks, topicTask]);
  }

  React.useEffect(() => {
    getTopicTasks();
  }, []);

  async function getTopicTasks() {
    const tasks = await getActiveTopicTasks(subjectId);
    const ordered = tasks.sort((t1, t2) => t1.topicTaskId - t2.topicTaskId);
    setTopicTasksList(ordered);
  }

  function showStatusAccordion() {
    if (showTopicTask) return "V";
    return ">";
  }

  return (
    <div>
      <IconButton
        onClick={() => {
          setShowTopicTasks(!showTopicTask);
        }}
      >
        {showStatusAccordion()}
      </IconButton>
      Ciclos
      <IconButton onClick={() => setIsNewTaskTopicDialogOpen(true)}>
        +
      </IconButton>
      <IconButton onClick={() => setIsCycleGeneratorOpen(true)}>+++</IconButton>
      <Divider />
      <div>
        {showTopicTask && (
          <div style={styles.topicTaskCardContainer as React.CSSProperties}>
            {topicTasks.map((task) => (
              <TopicTaskCard topicTaskInfo={task} />
            ))}
          </div>
        )}
        <SimpleDialog
          open={isNewTaskTopicDialogOpen}
          onClose={() => setIsNewTaskTopicDialogOpen(false)}
          title={"Inserir Nova Tarefa"}
          childComponent={
            <NewTopicTaskForm
              closeParent={() => setIsNewTaskTopicDialogOpen(false)}
              subjectName={subjectName}
              addTopicTaskContext={addTopicTaskContext}
            />
          }
        />
        <SimpleDialog
          open={isCycleGeneratorOpen}
          onClose={() => setIsCycleGeneratorOpen(false)}
          title={"Gerar novo ciclo"}
          childComponent={
            <CycleGeneratorForm
              closeParent={() => setIsCycleGeneratorOpen(false)}
            />
          }
        />
      </div>
    </div>
  );
};

export default TopicTasksView;

const styles = {
  topicTaskCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};
