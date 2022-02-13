import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./features/error/NotFound";
import ProjectView from "./features/projectView/views/ProjectView";
import SubjectManagement from "./features/subjectManagement/SubjectManagement";
import SubjectsView from "./features/subjectsView/views/SubjectsView";

function App() {
  return (
      <div className="App">
        <div className="App">
          <Routes>
            <Route path="/" element={<SubjectsView />} />
            <Route path="/project" element={<ProjectView />} />
            <Route path="/subject" element={<SubjectsView />} />
            <Route path="/subjectManagement" element={<SubjectManagement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
