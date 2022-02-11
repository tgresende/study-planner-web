import React from "react";

import { Divider, IconButton, Typography } from "@mui/material";

import { getAllTopics } from "../api/TopicsViewApi";
import { ITopic } from "../api/TopicsViewApiInterface";
import TopicCard from "../cards/TopicCard";


function TopicsView(){

  const [topics, setTopics] = React.useState<ITopic[] | []>([]);

  async function getTopics() {
    const topics = await getAllTopics(2012);
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