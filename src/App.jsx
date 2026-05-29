import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import SmartAdvisorDetail from "./pages/projectPage/SmartAdvisorDetail";
import QuizPlatformDetail from "./pages/projectPage/QuizPlatformDetail";
import Ceramic from "./pages/projectPage/Ceramic";
// import { ThemeToggle } from "./components/ThemeToggle";


function App() {
  return (
    <>
      <Toaster />
      {/* <ThemeToggle /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projects/smart-learning-advisor" element={<SmartAdvisorDetail />} />
          <Route path="/projects/quiz-platform" element={<QuizPlatformDetail />} />
          <Route path="/projects/ceramic" element={<Ceramic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
