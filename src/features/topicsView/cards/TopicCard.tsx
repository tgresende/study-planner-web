import { Card } from "@mui/material";
import { FunctionComponent } from "react";
import { ITopic } from "../api/TopicsViewApiInterface";

type topicCardEntries = {
  topicInfo: ITopic;
};

export const TopicCard: FunctionComponent<topicCardEntries> = ({
  topicInfo,
}) => {
  const { name } = topicInfo;
  return (
    <Card style={{padding: 8, margin: 8}}>
      {name}
    </Card>
  );
};

export default TopicCard;
