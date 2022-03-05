import React from "react";

export interface ICycleItem {
  subjectName: string;
  subjectId: number;
  weight: number;
  subjectTaskId: number;
  ponderatedWeightScore: number;
  minutesStudy: number;
  internalOrder: number;
}

export type SubjectTasksContextType = {
  subjectTasks: ICycleItem[];
  setSubjectTasksList: (list: any[]) => void;
  updateSubjectTask: (cycleItem: ICycleItem) => void;
  deleteSubjectTask: (subjectTaskId: number) => void;
};

const defaultState = {
  subjectTasks: [],
  setSubjectTasksList: () => null,
  updateSubjectTask: () => null,
  deleteSubjectTask: () => null,
};

export const SubjectTasksContext =
  React.createContext<SubjectTasksContextType>(defaultState);

const SubjectTasksProvider: React.FC = ({ children }) => {
  const [subjectTasks, setSubjectTasks] = React.useState<ICycleItem[]>([]);

  const setSubjectTasksList = (list: ICycleItem[]) => {
    setSubjectTasks(list);
  };

  const updateSubjectTask = (topicTask: ICycleItem) => {
    const topicTaskIndex = subjectTasks.findIndex(
      (item) => item.subjectTaskId === topicTask.subjectTaskId
    );
    let newsubjectTasks = [...subjectTasks];
    newsubjectTasks[topicTaskIndex] = topicTask;

    setSubjectTasks(newsubjectTasks);
  };

  const deleteSubjectTask = (subjectTaskId: number) => {
    const newsubjectTasks = subjectTasks.filter(
      (item) => item.subjectTaskId !== subjectTaskId
    );
    setSubjectTasks(newsubjectTasks);
  };

  return (
    <SubjectTasksContext.Provider
      value={{
        subjectTasks: subjectTasks,
        setSubjectTasksList: setSubjectTasksList,
        updateSubjectTask: updateSubjectTask,
        deleteSubjectTask: deleteSubjectTask,
      }}
    >
      {children}
    </SubjectTasksContext.Provider>
  );
};

export default SubjectTasksProvider;
