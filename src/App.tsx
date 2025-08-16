import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Testimonials from "./pages/Testimonials";
import CourseCatalog from "./pages/course/CourseCatalog";
import CourseLearning from "./pages/course/CourseLearning";
import LearningFinished from "./pages/course/LearningFinished";
import CourseDetails from "./pages/course/CourseDetails";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Checkout from "./pages/Checkout";
import SuccessCheckout from "./pages/SuccessCheckout";
import SearchCourse from "./pages/course/SearchCourse";
import Subscription from "./pages/subscription/Subscription";
import SubscriptionDetails from "./pages/subscription/SubscriptionDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pricing">
        <Route index element={<Pricing />} />
        <Route path="checkout">
          <Route index element={<Checkout />} />
          <Route path="success" element={<SuccessCheckout />} />
        </Route>
      </Route>
      <Route path="/features" element={<Features />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/course">
        <Route index element={<CourseCatalog />} />
        <Route path="catalog" element={<CourseCatalog />} />
        <Route path="learning" element={<CourseLearning />} />
        <Route path="details" element={<CourseDetails />} />
        <Route path="search" element={<SearchCourse />} />
        <Route path="learning-finished" element={<LearningFinished />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/subscription">
        <Route index element={<Subscription />} />
        <Route path="details" element={<SubscriptionDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
