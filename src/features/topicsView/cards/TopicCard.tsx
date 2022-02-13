import { Card, IconButton, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { ITopic } from "../../../context/TopicsContext";

type topicCardEntries = {
  topicInfo: ITopic;
};

export const TopicCard: FunctionComponent<topicCardEntries> = ({
  topicInfo,
}) => {
  const { name } = topicInfo;
  return (
    <Card style={styles.root}>
      <div>
        <Typography>
          {name}
        </Typography>
        <Typography>
          {'28/30'}
        </Typography>
      </div>
      <div>
        <Typography>
          <IconButton>
            {'A'}
          </IconButton>
        </Typography> 
      </div>
    </Card>
  );
};

const styles = {
  root: {
    padding: 8, 
    margin: 8, 
    width: 180,
    display: "flex",
    displayDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
}

export default TopicCard;
