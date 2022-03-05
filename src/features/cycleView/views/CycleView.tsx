import { Button } from "@mui/material";
import React from "react";
import {
  SubjectTasksContext,
  SubjectTasksContextType,
} from "../../../context/SubjectTasksContext";
import {
  finalizeSubjectTaskService,
  generateNewCycle,
  getActiveSubjectTasks,
} from "../api/CycleViewApi";
import CycleItemCard from "../cards/CycleItemCard";

function CycleView() {
  const { setSubjectTasksList, subjectTasks, deleteSubjectTask } =
    React.useContext(SubjectTasksContext)! as SubjectTasksContextType;

  const projectId = 1002;

  async function getCycleItems() {
    const sub = await getActiveSubjectTasks(projectId);
    setSubjectTasksList(sub);
  }

  React.useEffect(() => {
    getCycleItems();
  }, []);

  const deleteTask = (subjectTaskId: number): void => {
    deleteSubjectTask(subjectTaskId);
    finalizeSubjectTaskService(subjectTaskId);
  };

  const generateCycle = async (): Promise<void> => {
    await generateNewCycle(projectId);
    await getCycleItems();
  };

  return (
    <div>
      view do cycle
      <Button onClick={generateCycle}>gerar ciclo</Button>
      {subjectTasks.map((subject) => (
        <CycleItemCard
          subjectInfo={subject}
          onClickFn={() => deleteTask(subject.subjectTaskId)}
        />
      ))}
    </div>
  );
}

export default CycleView;
