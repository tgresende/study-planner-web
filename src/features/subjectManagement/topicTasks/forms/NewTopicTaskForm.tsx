import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import { Button, TextField, Typography } from "@mui/material";
import { IAddTopicTaskRequestModel, saveTopicTask } from "./newTopicTaskFormUtils";
import { SUCCESS } from "../../../../shared/api/apiHandle";

interface InputTopicInfo {
  subjectName :string;
  closeParent: Function;
  addtopicToView: Function;
}

export const NewTopicTaskForm: FunctionComponent<InputTopicInfo> = ({
  subjectName,
  closeParent,
  addtopicToView
}) => {
  const [action, setAction] = React.useState<string>("");
  const [actionDescription, setActionDescription] = React.useState<string>("");
  const [actionSource, setActionSource] = React.useState<string>("");
  const [topicId, setTopicId] = React.useState<number>(0);


  const save = async () => {
    const inputTopicTaskData: IAddTopicTaskRequestModel = {
      action: action,
      actionDescription: actionDescription,
      actionSource: actionSource,
      correctQuestionQuantity: 0,
      doneQuestionQuantity: 0,
      revisionItem: "",
      topicId: topicId,
    };

    const result = await saveTopicTask(inputTopicTaskData);

    if (result.status === SUCCESS){
      addtopicToView(result.data);
      closeParent();
      return;
    }

    alert(result.data);
  };

  return (
    <Card>
      <Typography>
        inserir Tarefa - {subjectName}
      </Typography>
      <TextField
        id="standard-basic"
        label="Tópico - fazer select depois"
        variant="standard"
        type="number"
        value={topicId}
        onChange={(e) => setTopicId(parseInt(e.target.value))}
      />
      <TextField
        id="standard-basic"
        label="Ação - fazer select depois"
        variant="standard"
        value={action}
        onChange={(e) => setAction(e.target.value)}
      />
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

export default NewTopicTaskForm;
