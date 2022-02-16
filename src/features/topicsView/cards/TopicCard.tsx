import { Card, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { ITopic } from "../../../context/TopicsContext";

type topicCardEntries = {
  topicInfo: ITopic;
};

export const TopicCard: FunctionComponent<topicCardEntries> = ({
  topicInfo,
}) => {
  const { topicName, totalDoneQuestion, totalCorrectQuestion } = topicInfo;

  function printScoreIndicator() {
    const score = (totalCorrectQuestion * 100) / totalDoneQuestion;

    if (score >= 80) return showIconButtion("green", "A");
    if (score >= 60) return showIconButtion("yellow", "B");
    return showIconButtion("red", "C");
  }

  function showIconButtion(color: string, value: string) {
    return (
      <div
        style={{
          borderRadius: 18,
          width: 36,
          height: 36,
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <text style={{ color: "white" }}>{value}</text>
      </div>
    );
  }

  function percentual() {
    return Math.round((totalCorrectQuestion * 100) / totalDoneQuestion);
  }

  return (
    <Card style={styles.root}>
      <div>
        <Typography>{topicName}</Typography>
        <Typography>
          {`${totalCorrectQuestion}/${totalDoneQuestion} - ${percentual()}%`}
        </Typography>
      </div>
      <div>{printScoreIndicator()}</div>
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
    alignItems: "center",
  },
};

export default TopicCard;
