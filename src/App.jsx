import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinceraStudioLanding from "./SinceraStudioLanding";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";

export default function App() {
  return (
    <div className="bg-neutral-900 text-white font-sans min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<SinceraStudioLanding />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </Router>
    </div>
  );
}