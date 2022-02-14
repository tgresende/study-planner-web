import React, { FunctionComponent } from "react";
import { Button, Card, Typography } from "@mui/material";
import { ITopicTask } from "../../../../context/TopicTasksContext";
import { SimpleDialog } from "../../../../shared/components/dialogs/simpleDialog/SimpleDialog";
import TopicTaskEditionForm from "../forms/topicTaskEditionForm/TopicTaskEditionForm";
import TopicTaskFinalizeForm from "../forms/topicTaskFinalizeForm/TopicTaskFinalizeForm";

type topicCardEntries = {
  topicTaskInfo: ITopicTask;
};

export const TopicTaskCard: FunctionComponent<topicCardEntries> = ({
  topicTaskInfo,
}) => {
  const { action, topicName } = topicTaskInfo;
  const [isEditionTaskTopicDialogOpen, setIsEditionTaskTopicDialogOpen] = React.useState<boolean>(false);
  const [isFinalizeTaskTopicDialogOpen, setIsFinalizeTaskTopicDialogOpen] = React.useState<boolean>(false);

  return (
    <Card style={styles.root}>
        <Typography>
          {action}
        </Typography>
        <Typography>
          {topicName}
        </Typography>
        <Typography>
            i:30 min
        </Typography>
        <Button onClick={()=>setIsEditionTaskTopicDialogOpen(true)}>
          info
        </Button>
        <Button onClick={()=>setIsFinalizeTaskTopicDialogOpen(true)}>
          Finish
        </Button>
        <SimpleDialog
          open={isEditionTaskTopicDialogOpen}
          onClose={() => setIsEditionTaskTopicDialogOpen(false)}
          title={"Editar Tarefa"}
          childComponent={
            <TopicTaskEditionForm
              closeParent = {() => setIsEditionTaskTopicDialogOpen(false)}
              topicTaskData ={topicTaskInfo}
            />
          }
        />
          <SimpleDialog
            open={isFinalizeTaskTopicDialogOpen}
            onClose={() => setIsFinalizeTaskTopicDialogOpen(false)}
            title={"Finalizar Tarefa"}
            childComponent={
              <TopicTaskFinalizeForm
                closeParent = {() => setIsFinalizeTaskTopicDialogOpen(false)}
                topicTaskData ={topicTaskInfo}
              />
          }
        />
        
    </Card>
  );
};

const styles = {
  root: {
    padding: 8, 
    margin: 8, 
    width: 180,
  }
}

export default TopicTaskCard;
