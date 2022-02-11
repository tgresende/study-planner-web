import React from "react";

import { Divider, IconButton, Typography } from "@mui/material";

import { getAllTopicTasks } from "../api/TopicTasksViewApi";
import { ITopicTask } from "../api/TopicTasksViewApiInterface";
import TopicCard from "../cards/TopicTaskCard";


function TopicTasksView(){

  const [topics, setTopics] = React.useState<ITopicTask[] | []>([]);

  async function getTopics() {
    const topics = await getAllTopicTasks(2012);
    setTopics(topics);
  }
  
  React.useEffect(() => {
    getTopics();
  }, []);

  return (
    <div>
       <IconButton>
        V
        </IconButton>
          Ciclos
        <IconButton>
        +
        </IconButton>
      <Divider/>
      {topics.map((topic) => (
        <TopicCard topicInfo={topic} />
      ))}
    </div>
  );
}

export default TopicTasksView;