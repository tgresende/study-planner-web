import React, { FunctionComponent } from "react";
import { Divider, IconButton, Typography } from "@mui/material";
import { getAllTopics } from "../api/TopicsViewApi";
import TopicCard from "../cards/TopicCard";
import { SimpleDialog } from "../../../shared/components/dialogs/simpleDialog/SimpleDialog";
import NewTopicForm from "../../subjectManagement/topics/forms/newTopicForm/NewTopicForm";
import {
  ITopic,
  TopicsContext,
  TopicsContextType,
} from "../../../context/TopicsContext";

type topicViewEntries = {
  subjectId: number;
  subjectName: string;
};

const TopicsView: FunctionComponent<topicViewEntries> = ({
  subjectId,
  subjectName,
}) => {
  const { setTopicsList, topics } = React.useContext(
    TopicsContext
  )! as TopicsContextType;
  const [isNewDialogTopicOpen, setIsNewDialogTopicOpen] =
    React.useState<boolean>(false);
  const [showTopics, setShowTopics] = React.useState<boolean>(true);

  function handleShowTopiccs() {
    setShowTopics(!showTopics);
  }

  function addtopicToView(newTopic: ITopic) {
    setTopicsList([...topics, newTopic]);
  }

  async function getTopics() {
    const topics = await getAllTopics(subjectId);
    let ordered = topics.sort(
      (a, b) =>
        b.totalCorrectQuestion / b.totalDoneQuestion -
        a.totalCorrectQuestion / a.totalDoneQuestion
    );
    setTopicsList(ordered);
  }

  function showStatusAccordin() {
    if (showTopics) return "V";
    return ">";
  }

  React.useEffect(() => {
    getTopics();
  }, []);

  return (
    <div>
      <Typography>
        <IconButton onClick={handleShowTopiccs}>
          {showStatusAccordin()}
        </IconButton>
        Topicos
        <IconButton onClick={() => setIsNewDialogTopicOpen(true)}>+</IconButton>
      </Typography>
      <Divider />
      {showTopics && (
        <div style={styles.TopicCardsContainer as React.CSSProperties}>
          {topics.map((topic) => (
            <TopicCard topicInfo={topic} />
          ))}
          <SimpleDialog
            open={isNewDialogTopicOpen}
            onClose={() => setIsNewDialogTopicOpen(false)}
            title={"Inserir Novo Tópico"}
            childComponent={
              <NewTopicForm
                subjectId={subjectId}
                closeParent={() => setIsNewDialogTopicOpen(false)}
                subjectName={subjectName}
                addtopicToView={addtopicToView}
              />
            }
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  TopicCardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

export default TopicsView;
