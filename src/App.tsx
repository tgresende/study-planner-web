import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./features/error/NotFound";
import ProjectView from "./features/projectView/views/ProjectView";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<ProjectView />} />
          <Route path="/project" element={<ProjectView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
