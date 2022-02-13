import { Button, Card, TextField, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { ITopicTask } from "../../../../../context/TopicTasksContext";


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
  } = topicTaskData;

  const [actionDescription, setActionDescription] = React.useState<string>(description);
  const [actionSource, setActionSource] = React.useState<string>(source);

  const save = async () => {
    // const inputTopicTaskData: IAddTopicTaskRequestModel = {
    //   actionDescription: actionDescription,
    //   actionSource: actionSource,
    //   topicTaskid: topicTaskData.topicTaskid
    // };

    // const result = await saveTopicTask(inputTopicTaskData);

    // if (result.status === SUCCESS){
    //   closeParent();
    //   return;
    // }
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
