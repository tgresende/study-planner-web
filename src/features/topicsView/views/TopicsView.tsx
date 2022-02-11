import React from "react";

import { Divider, Typography } from "@mui/material";

import { getAllTopics } from "../api/TopicsViewApi";
import { ITopic } from "../api/TopicsViewApiInterface";
import TopicCard from "../cards/TopicCard";


function TopicsView(){

  const [topics, setTopics] = React.useState<ITopic[] | []>([]);

  const topicA : ITopic= {
    name : "Aula 0 -  Estratégia",
    subjectId : 1,
    topicId: 1
  }

  const topicsMock = [topicA]
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
        V Topicos
      </Typography>
      <Divider/>
      {topicsMock.map((topic) => (
        <TopicCard topicInfo={topic} />
      ))}
    </div>
  );
}

export default TopicsView;