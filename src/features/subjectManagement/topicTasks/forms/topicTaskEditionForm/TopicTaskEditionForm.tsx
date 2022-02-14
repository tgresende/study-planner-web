import { Button, Card, TextField, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { 
  ITopicTask, 
  TopicTasksContext, 
  TopicTasksContextType 
} from "../../../../../context/TopicTasksContext";
import { updateTopicTask } from "./topicTaskEditionFormFunctions";


interface EditTopicTaskInfo {
  closeParent: Function;
  topicTaskData: ITopicTask;
}

export const TopicTaskEditionForm: FunctionComponent<EditTopicTaskInfo> = ({
  closeParent,
  topicTaskData
}) => {
  const {
    actionDescription : description, 
    actionSource : source, 
    topicName, 
    action,
    topicTaskId
  } = topicTaskData;

  const [actionDescription, setActionDescription] = React.useState<string>(description);
  const [actionSource, setActionSource] = React.useState<string>(source);

  const { updateTopicTask: updateTopicTaskContext} = React.useContext(TopicTasksContext)! as TopicTasksContextType;


  const save = async () => {
    
    updateTopicTask(
      topicTaskId,
      actionDescription,
      actionSource
    );

    updateTopicTaskContext({
        ...topicTaskData, 
        actionDescription,
        actionSource
      }
    );

    closeParent();
  };


  return (
    <Card style={styles.root as React.CSSProperties}>
      <Typography style={{marginBottom: 24}}>
        {topicName}
      </Typography>
      <Typography >
        {action}
      </Typography>
      <TextField
        id="standard-basic"
        label="Descrição"
        variant="standard"
        value={actionDescription}
        onChange={(e) => setActionDescription(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Fonte"
        variant="standard"
        value={actionSource}
        onChange={(e) => setActionSource(e.target.value)}
      />
      <Button onClick={save}>Salvar Mudanças</Button>
    </Card>
  );
};

const styles ={
    root:{
        display:"flex",
        flexDirection: "column",
        padding: 16
    }

}

export default TopicTaskEditionForm;
