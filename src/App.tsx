import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Admin from "@/pages/Admin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
