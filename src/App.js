import { Home } from "./components/home/home";
import { Routes, Route } from "react-router-dom";
import {ProjectDetail} from "./components/projectDetails/ProjectDetail"
import {NotFound} from './components/common/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<NotFound/>} />
        <Route path="/contact" element={<NotFound/>} />
        <Route path="/projects/:projectKey" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
