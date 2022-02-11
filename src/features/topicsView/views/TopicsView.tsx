import React, { FunctionComponent } from "react";
import { Divider, IconButton, Typography } from "@mui/material";
import { getAllTopics } from "../api/TopicsViewApi";
import { ITopic } from "../api/TopicsViewApiInterface";
import TopicCard from "../cards/TopicCard";

type topicViewEntries = {
  subjectId: number;
};

const TopicsView : FunctionComponent<topicViewEntries> = ({
  subjectId
}) =>
{
  const [topics, setTopics] = React.useState<ITopic[] | []>([]);

  async function getTopics() {
    const topics = await getAllTopics(subjectId);
    setTopics(topics);
  }

  React.useEffect(() => {
    getTopics();
  }, []);

  return (
    <div>
      <Typography>
        <IconButton>
        V
        </IconButton>
          Topicos
        <IconButton>
        +
        </IconButton>
      </Typography>
      <Divider/>
      {topics.map((topic) => (
        <TopicCard topicInfo={topic} />
      ))}
    </div>
  );
}

export default TopicsView;