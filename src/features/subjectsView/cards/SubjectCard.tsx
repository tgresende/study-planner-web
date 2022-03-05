import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { ISubject } from "../api/SubjectsViewApiInterface";

type subjectCardEntries = {
  subjectInfo: ISubject;
};

export const SubjectCard: FunctionComponent<subjectCardEntries> = ({
  subjectInfo,
}) => {
  const { name, weight, score } = subjectInfo;
  const navigate = useNavigate();

  function navigateToSubjectManagement() {
    navigate("/subjectManagement", { state: { subject: subjectInfo } });
  }

  return (
    <Card
      style={{ padding: 8, margin: 8 }}
      onClick={navigateToSubjectManagement}
    >
      {name} - {weight} - score:{score}
    </Card>
  );
};

export default SubjectCard;
