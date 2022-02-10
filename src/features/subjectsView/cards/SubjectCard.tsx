import { Card } from "@mui/material";
import { FunctionComponent } from "react";
import { ISubject } from "../api/SubjectsViewApiInterface";

type subjectCardEntries = {
  subjectInfo: ISubject;
};

export const SubjectCard: FunctionComponent<subjectCardEntries> = ({
  subjectInfo,
}) => {
  const { name, weight } = subjectInfo;
  return (
    <Card style={{padding: 8, margin: 8}}>
      {name} - {weight}
    </Card>
  );
};

export default SubjectCard;
