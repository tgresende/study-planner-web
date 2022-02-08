import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./features/error/NotFound";
import Project from "./features/project/Project";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
