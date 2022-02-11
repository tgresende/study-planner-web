import { Button, Card, IconButton, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { ITopicTask } from "../api/TopicTasksViewApiInterface";

type topicCardEntries = {
  topicInfo: ITopicTask;
};

export const TopicTaskCard: FunctionComponent<topicCardEntries> = ({
  topicInfo,
}) => {
  const { name } = topicInfo;
  return (
    <Card style={styles.root}>
        <Typography>
          Leitura
        </Typography>
        <Typography>
          {name}
        </Typography>
        <Typography>
          descricao da tarefa
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
