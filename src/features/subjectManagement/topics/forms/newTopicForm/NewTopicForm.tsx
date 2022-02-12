import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import { Button, TextField, Typography } from "@mui/material";
import { ERROR_SAVE_MESSAGE } from "../../../../../shared/constants/Messages";
import { buildErrorMessages, ITopicRequestModel, saveTopic } from "./newTopicFormUtils";
import { SUCCESS } from "../../../../../shared/api/apiHandle";

interface InputTopicInfo {
  subjectId: number;
  subjectName: string;
  closeParent: Function;
  addtopicToView: Function;
}

export const NewTopicForm: FunctionComponent<InputTopicInfo> = ({
  subjectId,
  subjectName,
  closeParent,
  addtopicToView
}) => {
  const [topicName, setTopicName] = React.useState<string>("");
  const [topicAnotations, setTopicAnotations] = React.useState<string>("");

  const save = async () => {

    const inputTopicData: ITopicRequestModel = {
      subjectId: subjectId,
      anotations: topicAnotations,
      name: topicName,
    };

    const result = await saveTopic(inputTopicData);

    if (result.status === SUCCESS){
      addtopicToView(result.data);
      closeParent();
      return;
    }

    const messageError = buildErrorMessages(result.data);
    alert(messageError);
  };

  return (
    <Card>
      <Typography>
        inserir tópico - {subjectName}
      </Typography>
      <TextField
        id="standard-basic"
        label="Nome do Tópico"
        variant="standard"
        value={topicName}
        onChange={(e) => setTopicName(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Anotações"
        variant="standard"
        value={topicAnotations}
        onChange={(e) => setTopicAnotations(e.target.value)}
      />
      <Button onClick={save}>Salvar</Button>
    </Card>
  );
};

export default NewTopicForm;
