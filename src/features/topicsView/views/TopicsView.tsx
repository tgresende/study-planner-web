import React, { FunctionComponent } from "react";
import { Divider, IconButton, Typography } from "@mui/material";
import { getAllTopics } from "../api/TopicsViewApi";
import { ITopic } from "../api/TopicsViewApiInterface";
import TopicCard from "../cards/TopicCard";
import { SimpleDialog } from "../../../shared/components/dialogs/simpleDialog/SimpleDialog";
import NewTopicForm from "../../subjectManagement/topics/forms/newTopicForm/NewTopicForm";

type topicViewEntries = {
  subjectId: number;
  subjectName: string;
};

const TopicsView : FunctionComponent<topicViewEntries> = ({
  subjectId,
  subjectName
}) =>
{
  const [topics, setTopics] = React.useState<ITopic[] | []>([]);
  const [isNewDialogTopicOpen, setIsNewDialogTopicOpen] = React.useState<boolean>(false);
  const [showTopics, setShowTopics] = React.useState<boolean>(true);

  function handleShowTopiccs(){
    setShowTopics(!showTopics);
  }

  function addtopicToView(newTopic:ITopic ){
    setTopics([...topics, newTopic ])
  }

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
        <IconButton onClick={handleShowTopiccs}>
        V
        </IconButton>
          Topicos
        <IconButton onClick={()=>setIsNewDialogTopicOpen(true)}>
        +
        </IconButton>
      </Typography>
      <Divider/>
      {showTopics &&
        <>
          {topics.map((topic) => (
            <TopicCard topicInfo={topic} />
            ))}
          <SimpleDialog
            open={isNewDialogTopicOpen}
            onClose={() => setIsNewDialogTopicOpen(false)}
            title={"Inserir Novo Tópico"}
            childComponent={
              <NewTopicForm
                subjectId = {subjectId}
                closeParent = {() => setIsNewDialogTopicOpen(false)}
                subjectName = {subjectName}
                addtopicToView = {addtopicToView}
              />
            }
          />
        </>
      }
    </div>
  );
}

export default TopicsView;