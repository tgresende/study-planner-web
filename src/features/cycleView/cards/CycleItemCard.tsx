import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";
import { ICycleItem } from "../../../context/SubjectTasksContext";

type cycleItemCardEntries = {
  subjectInfo: ICycleItem;
  onClickFn: () => void;
};

export const CycleItemCard: FunctionComponent<cycleItemCardEntries> = ({
  subjectInfo,
  onClickFn,
}) => {
  const { subjectName, minutesStudy } = subjectInfo;
  const navigate = useNavigate();

  function navigateToSubjectManagement() {
    navigate("/subjectManagement", { state: { subject: subjectInfo } });
  }

  return (
    <Card style={{ padding: 8, margin: 8 }}>
      <Typography onClick={navigateToSubjectManagement}>
        {subjectName} - tempo (min):{minutesStudy}
      </Typography>
      <Button onClick={onClickFn}>finalizar</Button>
    </Card>
  );
};

export default CycleItemCard;
