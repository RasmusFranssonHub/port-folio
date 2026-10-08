import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;