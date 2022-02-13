import { Button, Card, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { ITopicTask } from "../../../../context/TopicTasksContext";

type topicCardEntries = {
  topicTaskInfo: ITopicTask;
};

export const TopicTaskCard: FunctionComponent<topicCardEntries> = ({
  topicTaskInfo,
}) => {
  const { action, actionDescription, actionSource } = topicTaskInfo;
  return (
    <Card style={styles.root}>
        <Typography>
          {action}
        </Typography>
        <Typography>
          {actionDescription}
        </Typography>
        <Typography>
          {actionSource}
        </Typography>
        <Typography>
            i:30 min
        </Typography>
        <Button>
          info
        </Button>
        <Button>
          Finish
        </Button>
        
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
