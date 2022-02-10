import React from "react";
import { getAllTopics } from "../api/TopicsViewApi";
import { ITopic } from "../api/TopicsViewApiInterface";
import TopicCard from "../cards/TopicCard";


function TopicsView(){

  const [topics, setTopics] = React.useState<ITopic[] | []>([]);

  async function getTopics() {
    const topics = await getAllTopics(1002);
    setTopics(topics);
  }

  React.useEffect(() => {
    getTopics();
  }, []);

  return (
    <div>
      view de topicos
      {topics.map((topic) => (
        <TopicCard topicInfo={topic} />
      ))}
    </div>
  );
}

export default TopicsView;