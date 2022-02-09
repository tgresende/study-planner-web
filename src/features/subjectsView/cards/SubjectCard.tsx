import React, { FunctionComponent } from "react";
import { ISubject } from "../api/SubjectsViewApiInterface";

type subjectCardEntries = {
  subjectInfo: ISubject;
};

export const SubjectCard: FunctionComponent<subjectCardEntries> = ({
  subjectInfo,
}) => {
  const { name, subjectId } = subjectInfo;
  return (
    <div>
      {name} - {subjectId}
    </div>
  );
};

export default SubjectCard;
