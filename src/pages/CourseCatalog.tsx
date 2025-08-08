import NavbarDashboard from "../components/NavbarDashboard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import type { Course, CourseCategory } from "../components/CourseCard";
import CourseCard from "../components/CourseCard";
import { coursesData } from "../data/courses";

// Function to filter courses by category
const getCoursesByCategory = (category: string): Course[] => {
  return coursesData.filter((course: Course) => course.category === category);
};

// Categories with courses
const courseCategories: CourseCategory[] = [
  {
    id: "programming",
    label: "Programming",
    courses: getCoursesByCategory("Programming"),
  },
  {
    id: "networking",
    label: "Networking",
    courses: getCoursesByCategory("Networking"),
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    courses: getCoursesByCategory("Digital Marketing"),
  },
  {
    id: "product-design",
    label: "Product Design",
    courses: getCoursesByCategory("Product Design"),
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    courses: getCoursesByCategory("Entrepreneurship"),
  },
];

export default function CourseCatalog() {
  return (
    <div>
      <NavbarDashboard />
      <div className="pt-[10rem] lg:pt-[12rem] pb-6 md:pb-10 bg-[#F8FAF9]">
        <section
          id="catalog"
          className="container-max-w-1280 container-padding-x flex flex-col w-full gap-3 lg:gap-4"
        >
          <h1 className="font-bold leading-normal text-lg md:text-xl lg:text-[22px]">
            Course Catalog
          </h1>

          <Tabs>
            <TabList className="flex gap-2 overflow-x-auto no-scrollbar">
              {courseCategories.map((category: CourseCategory) => (
                <Tab key={category.id}>
                  <div className="rounded-full border border-obito-grey py-1.5 px-3 text-sm md:py-2 md:px-4 md:text-base hover:border-obito-green mb-[2px] bg-white transition-all duration-300">
                    <span className="w-full whitespace-nowrap">
                      {category.label}
                    </span>
                  </div>
                </Tab>
              ))}
            </TabList>

            {courseCategories.map((category: CourseCategory) => (
              <TabPanel key={category.id}>
                <div className="flex gap-2 md:gap-4 lg:gap-5 items-stretch overflow-x-auto no-scrollbar lg:grid lg:grid-cols-4">
                  {category.courses.map((course: Course) => (
                    <div className="w-[200px] md:w-[250px] flex-shrink-0 lg:w-full h-full">
                      <CourseCard key={course.id} course={course} />
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </section>
      </div>
    </div>
  );
}
