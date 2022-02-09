import React from "react";
import { getAllSubjects } from "../api/SubjectsViewApi";
import { ISubject } from "../api/SubjectsViewApiInterface";
import SubjectCard from "../cards/SubjectCard";

function SubjectsView() {
  const [subjects, setSubjects] = React.useState<ISubject[] | []>([]);

  async function getSubjects() {
    const sub = await getAllSubjects(3);
    setSubjects(sub);
  }

  React.useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div>
      view de assuntos
      {subjects.map((subject) => (
        <SubjectCard subjectInfo={subject} />
      ))}
    </div>
  );
}

export default SubjectsView;
