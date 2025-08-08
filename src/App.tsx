import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Testimonials from "./pages/Testimonials";
import CourseCatalog from "./pages/course/CourseCatalog";
import CourseDetails from "./pages/course/CourseDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/course-catalog" element={<CourseCatalog />} />
      <Route path="/course-details" element={<CourseDetails />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App;
