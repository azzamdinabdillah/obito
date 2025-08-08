import { type JSX } from "react";
import { Link } from "react-router-dom";

export type CardRoadmapProps = {
  href?: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  badgeIconSrc?: string;
  badgeText?: string;
  title: string;
  salaryText?: string;
  coursesCount?: number;
  className?: string;
};

function CardRoadmap({
  href = "#",
  thumbnailSrc,
  thumbnailAlt = "thumbnail",
  badgeIconSrc = "/src/assets/images/icons/cup.svg",
  badgeText,
  title,
  salaryText,
  coursesCount,
  className,
}: CardRoadmapProps): JSX.Element {
  return (
    <Link to={href} className={className}>
      <div className="roadmap-card flex flex-col md:flex-row items-start md:items-center rounded-[14px] md:rounded-[18px] lg:rounded-[20px] border border-obito-grey p-2.5 md:p-3 lg:p-[10px] md:pr-4 gap-3 md:gap-4 bg-white hover:border-obito-green transition-all duration-300">
        <div className="relative flex shrink-0 w-full h-[150px] md:w-[180px] xl:w-[240px] rounded-[10px] md:rounded-[12px] lg:rounded-[14px] overflow-hidden bg-obito-grey">
          <img
            src={thumbnailSrc}
            className="w-full h-full object-cover "
            alt={thumbnailAlt}
          />
          {badgeText ? (
            <p className="absolute flex m-2 md:m-2.5 lg:m-[10px] bottom-0 items-center gap-1 bg-white rounded-[10px] md:rounded-[12px] lg:rounded-[14px] py-1 px-2 md:py-[6px] md:px-2.5 lg:py-[6px] lg:px-2 w-fit">
              <img
                src={badgeIconSrc}
                className="flex shrink-0 w-4 md:w-5"
                alt="icon"
              />
              <span className="font-semibold text-xs md:text-xs leading-[18px]">
                {badgeText}
              </span>
            </p>
          ) : null}
        </div>
        <div className="flex flex-col p-1 pt-0 gap-2 md:gap-2.5 lg:gap-3 mt-0">
          <h3 className="font-bold text-base md:text-lg line-clamp-2">
            {title}
          </h3>
          {salaryText ? (
            <p className="flex items-center gap-1.5 md:gap-[6px]">
              <img
                src="/src/assets/images/icons/briefcase-green.svg"
                className="flex shrink-0 w-4 md:w-5"
                alt="icon"
              />
              <span className="text-xs md:text-sm text-obito-text-secondary">
                {salaryText}
              </span>
            </p>
          ) : null}
          {typeof coursesCount === "number" ? (
            <p className="flex items-center gap-1.5 md:gap-[6px]">
              <img
                src="/src/assets/images/icons/menu-board-green.svg"
                className="flex shrink-0 w-4 md:w-5"
                alt="icon"
              />
              <span className="text-xs md:text-sm text-obito-text-secondary">
                {coursesCount.toLocaleString("en-US")} Courses
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export default CardRoadmap;
