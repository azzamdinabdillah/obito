import { type JSX } from "react";
import { Link } from "react-router-dom";

export interface Course {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  rating: number;
  lessons: number;
  status: string;
  categoryIcon: string;
  lessonsIcon: string;
  statusIcon: string;
  ratingIcon: string;
}

export interface CourseCategory {
  id: string;
  label: string;
  courses: Course[];
}

function CourseCard({ course }: { course: Course }): JSX.Element {
  return (
    <div className="h-full">
      <Link to={`/course/details`} className="card h-full">
        <div className="course-card h-full flex flex-col rounded-[16px] md:rounded-[18px] lg:rounded-[20px] border border-obito-grey hover:border-obito-green transition-all duration-300 bg-white overflow-hidden">
          <div className="thumbnail-container p-2.5 md:p-3 lg:p-[10px]">
            <div className="relative w-full h-[110px] md:h-[130px] lg:h-[150px] rounded-[10px] md:rounded-[12px] lg:rounded-[14px] overflow-hidden bg-obito-grey">
              <img
                src={course.thumbnail}
                className="w-full h-full object-cover"
                alt="thumbnail"
              />
              <p className="absolute top-2.5 right-2.5 md:top-3 md:right-3 lg:top-[10px] lg:right-[10px] z-10 w-fit h-fit flex flex-col items-center rounded-[10px] md:rounded-[12px] lg:rounded-[14px] py-1.5 px-2.5 md:py-1.5 md:px-2.5 lg:py-[6px] lg:px-[10px] bg-white gap-0.5">
                <img
                  src={course.ratingIcon}
                  className="w-4 h-4 md:w-5 md:h-5"
                  alt="icon"
                />
                <span className="font-semibold text-xs">{course.rating}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 md:p-4 !pt-0 gap-2.5 md:gap-3 lg:gap-[13px]">
            <h3 className="font-bold text-base md:text-lg line-clamp-2">
              {course.title}
            </h3>
            <p className="flex items-center gap-1.5 md:gap-[6px]">
              <img
                src={course.categoryIcon}
                className="flex shrink-0 w-4 md:w-5"
                alt="icon"
              />
              <span className="text-xs md:text-sm text-obito-text-secondary">
                {course.category}
              </span>
            </p>
            <p className="flex items-center gap-1.5 md:gap-[6px]">
              <img
                src={course.lessonsIcon}
                className="flex shrink-0 w-4 md:w-5"
                alt="icon"
              />
              <span className="text-xs md:text-sm text-obito-text-secondary">
                {course.lessons} Lessons
              </span>
            </p>
            <p className="flex items-center gap-1.5 md:gap-[6px]">
              <img
                src={course.statusIcon}
                className="flex shrink-0 w-4 md:w-5"
                alt="icon"
              />
              <span className="text-xs md:text-sm text-obito-text-secondary">
                {course.status}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CourseCard;
