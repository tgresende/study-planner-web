import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllSubjects } from "../api/SubjectsViewApi";
import { ISubject } from "../api/SubjectsViewApiInterface";
import SubjectCard from "../cards/SubjectCard";

function SubjectsView() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = React.useState<ISubject[] | []>([]);

  function navigateToCycleView() {
    navigate("/cycle");
  }

  async function getSubjects() {
    const sub = await getAllSubjects(1002);
    setSubjects(sub);
  }

  React.useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div>
      view de assuntos
      <Button onClick={navigateToCycleView}>Ciclos</Button>
      {subjects.map((subject) => (
        <SubjectCard subjectInfo={subject} />
      ))}
    </div>
  );
}

export default SubjectsView;
