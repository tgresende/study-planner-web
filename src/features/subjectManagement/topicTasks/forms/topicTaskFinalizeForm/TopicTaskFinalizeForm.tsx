import { Button, Card, TextField, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { 
  ITopicTask, 
  TopicTasksContext, 
  TopicTasksContextType 
} from "../../../../../context/TopicTasksContext";
import { finalizeTopicTask } from "./topicTaskFinalizeFormFunctions";


interface IFinalizeTopicTaskInfo {
  closeParent: Function;
  topicTaskData: ITopicTask;
}

export const TopicTaskFinalizeForm: FunctionComponent<IFinalizeTopicTaskInfo> = ({
  closeParent,
  topicTaskData
}) => {
  const {
    actionDescription : description, 
    actionSource : source, 
    topicName, 
    action,
    topicId,
    topicTaskId
  } = topicTaskData;

  const [actionDescription, setActionDescription] = React.useState<string>(description);
  const [actionSource, setActionSource] = React.useState<string>(source);
  const [revisionItem, setRevisionItem] = React.useState<string>("");
  const [doneQuestionQuantity, setDoneQuestionQuantity] = React.useState<number>(0);
  const [correctQuestionQuantity, setCorrectQuestionQuantity] = React.useState<number>(0);


  const { deleteTopicTask: deleteTopicTaskContext} = React.useContext(TopicTasksContext)! as TopicTasksContextType;


  const save = async () => {
    
    deleteTopicTaskContext(topicTaskId);

    finalizeTopicTask({
      topicTaskId,
      actionDescription,
      actionSource,
      revisionItem,
      doneQuestionQuantity,
      correctQuestionQuantity
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
      <TextField
        id="standard-basic"
        label="Questões Corretas"
        variant="standard"
        type={"number"}
        value={correctQuestionQuantity}
        onChange={(e) => setCorrectQuestionQuantity(parseInt(e.target.value))}
      />
       <TextField
        id="standard-basic"
        label="Questões Feitas"
        variant="standard"
        type={"number"}
        value={doneQuestionQuantity}
        onChange={(e) => setDoneQuestionQuantity(parseInt(e.target.value))}
      />
        <TextField
        id="standard-basic"
        label="Revisão"
        variant="standard"
        value={revisionItem}
        onChange={(e) => setRevisionItem(e.target.value)}
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

export default TopicTaskFinalizeForm;
