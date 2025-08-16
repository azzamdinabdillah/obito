import NavbarDashboard from "../../components/NavbarDashboard";
import CourseCard from "../../components/CourseCard";
import { coursesData } from "../../data/courses";

export default function SearchCourse() {
  // Filter JavaScript-related courses first, then other programming courses
  const javascriptCourses = coursesData.filter(
    (course) =>
      course.title.toLowerCase().includes("javascript") ||
      course.title.toLowerCase().includes("js") ||
      course.title.toLowerCase().includes("react") ||
      course.title.toLowerCase().includes("node")
  );

  // If not enough JavaScript courses, add other programming courses
  const selectedCourses =
    javascriptCourses.length >= 7
      ? javascriptCourses.slice(0, 7)
      : [
          ...javascriptCourses,
          ...coursesData
            .filter(
              (course) =>
                course.category === "Programming" &&
                !javascriptCourses.includes(course)
            )
            .slice(0, 7 - javascriptCourses.length),
        ];
  return (
    <div>
      <NavbarDashboard breadcrump />
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-[58px] pb-6 md:pb-8 lg:pb-10 mt-[11rem] md:mt-[13rem] lg:mt-[13rem]">
        <div className="flex flex-col items-center gap-2 md:gap-[10px] max-w-[350px] md:max-w-[500px] w-full mx-auto px-4 md:px-6 lg:px-0">
          <p className="flex items-center gap-1 md:gap-[4px] lg:gap-[6px] w-fit rounded-full py-1.5 md:py-1.5 lg:py-2 px-3 md:px-[12px] lg:px-[14px] bg-obito-light-green">
            <img
              src="/obito/assets/images/icons/crown-green.svg"
              className="flex shrink-0 w-4 md:w-4.5 lg:w-5"
              alt="icon"
            />
            <span className="font-bold text-xs md:text-sm">GROW CAREER</span>
          </p>
          <h1 className="font-bold text-xl md:text-2xl lg:text-[28px] leading-[30px] md:leading-[36px] lg:leading-[42px] text-center">
            Explore Our Greatest Courses
          </h1>
          <form action="search-course.html" className="relative w-full">
            <label className="group">
              <input
                type="text"
                name=""
                id=""
                className="appearance-none outline-none ring-1 ring-obito-grey rounded-full w-full md:w-[450px] lg:w-[500px] py-3 md:py-[12px] lg:py-[14px] px-4 md:px-4 lg:px-5 bg-white font-bold placeholder:font-normal placeholder:text-obito-text-secondary group-focus-within:ring-obito-green transition-all duration-300 pr-[45px] md:pr-[48px] lg:pr-[50px]"
                placeholder="Search course by name"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 h-[44px] -translate-y-1/2 md:h-[48px] lg:h-[52px] w-[44px] md:w-[48px] lg:w-[52px] flex shrink-0 items-center justify-center"
              >
                <img
                  src="/obito/assets/images/icons/search-normal-green-fill.svg"
                  className="flex shrink-0 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                  alt=""
                />
              </button>
            </label>
          </form>
        </div>
        <section
          id="result"
          className="flex flex-col w-full max-w-[1280px] px-4 md:px-8 lg:px-[75px] gap-4 md:gap-4 lg:gap-5 mx-auto"
        >
          <h2 className="font-bold text-lg md:text-xl lg:text-[22px] leading-[26px] md:leading-[30px] lg:leading-[33px]">
            Search Result: JavaScript
          </h2>
          <div
            id="result-list"
            className="tab-content grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {selectedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
