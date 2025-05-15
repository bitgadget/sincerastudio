import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinceraStudioLanding from "./SinceraStudioLanding";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SinceraStudioLanding />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}