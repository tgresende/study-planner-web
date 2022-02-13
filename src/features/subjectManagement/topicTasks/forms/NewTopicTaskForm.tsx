import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import { Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { IAddTopicTaskRequestModel, saveTopicTask } from "./newTopicTaskFormUtils";
import { SUCCESS } from "../../../../shared/api/apiHandle";
import { TopicTaskActions } from "../../../../shared/constants/TopicTaskConstants";
import { TopicsContext, TopicsContextType } from "../../../../context/TopicsContext";

interface InputTopicInfo {
  subjectName :string;
  closeParent: Function;
  addTopicTaskContext: Function;
}

export const NewTopicTaskForm: FunctionComponent<InputTopicInfo> = ({
  subjectName,
  closeParent,
  addTopicTaskContext
}) => {
  const [action, setAction] = React.useState<string>("");
  const [actionDescription, setActionDescription] = React.useState<string>("");
  const [actionSource, setActionSource] = React.useState<string>("");
  const [topicId, setTopicId] = React.useState<number>(0);
  const { topics } = React.useContext(TopicsContext)! as TopicsContextType;

  const save = async () => {
    const inputTopicTaskData: IAddTopicTaskRequestModel = {
      action: action,
      actionDescription: actionDescription,
      actionSource: actionSource,
      topicId: topicId,
    };

    const result = await saveTopicTask(inputTopicTaskData);

    if (result.status === SUCCESS){
      addTopicTaskContext(result.data);
      closeParent();
      return;
    }
  };


  return (
    <Card style={styles.root as React.CSSProperties}>
      <Typography style={{marginBottom: 24}}>
        {subjectName}
      </Typography>
      <InputLabel id="demo-simple-select-label">Tópico</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={topicId}
          label="Age"
          onChange={(event)=>setTopicId(parseInt(event.target.value.toString()))}
        >
            {topics.map((topic) =>  
                <MenuItem value={topic.topicId}>{topic.name}</MenuItem>
            )}
      </Select>
      <InputLabel id="demo-simple-select-label">Ação</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={action}
          label="Age"
          onChange={(event)=>setAction(event.target.value)}
        >
            {TopicTaskActions.map((action) =>  
                <MenuItem value={action}>{action}</MenuItem>
            )}
      </Select>
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
      <Button onClick={save}>Salvar</Button>
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

export default NewTopicTaskForm;
