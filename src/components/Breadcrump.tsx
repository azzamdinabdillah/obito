import { Link, useLocation } from "react-router-dom";

export default function Breadcrump() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Function to format route name
  const formatRouteName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Generate breadcrumb items
  const breadcrumbItems = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;
    const label = formatRouteName(name);

    return {
      label,
      routeTo,
      isLast,
    };
  });

  return (
    <div
      id="path"
      className="flex w-full bg-white border-b border-obito-grey py-4 md:py-[14px]"
    >
      <div className="flex items-center w-full max-w-[1280px] px-4 md:px-[75px] mx-auto gap-3 md:gap-5 overflow-x-auto no-scrollbar">
        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-obito-green hover:bg-obito-green/80 transition-colors cursor-pointer shrink-0"
          aria-label="Kembali"
          type="button"
        >
          {/* Simple left arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              d="M15 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
        <div className="h-6 md:h-10 w-px bg-obito-grey" />

        {breadcrumbItems.map((item, index) => (
          <div key={item.routeTo} className="flex items-center">
            {index > 0 && (
              <span className="text-obito-grey text-sm md:text-base mr-3 md:mr-5">
                /
              </span>
            )}
            {item.isLast ? (
              <span className="text-sm md:text-base font-semibold">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.routeTo}
                className="text-sm md:text-base hover:text-obito-green hover:underline transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
