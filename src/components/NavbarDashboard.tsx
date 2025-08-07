import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarDashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = (): void => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav
        id="nav-guest"
        className="flex fixed top-0 left-0 w-full bg-white border-b border-obito-grey"
      >
        <div className="flex px-4 w-full lg:max-w-[1280px] lg:px-[75px] py-5 items-center justify-between mx-auto">
          <div className="flex items-center gap-4 lg:gap-[50px] w-full md:w-auto justify-between md:justify-start">
            <Link to="/" className="flex shrink-0">
              <img
                src="/src/assets/images/logos/logo-64.png"
                className="flex shrink-0 w-10 h-10 lg:hidden"
                alt="logo"
              />
              <img
                src="/src/assets/images/logos/logo.svg"
                className="shrink-0 hidden lg:block"
                alt="logo"
              />
            </Link>
            <form action="" className="relative flex-grow">
              <label className="group block w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  className="appearance-none outline-none ring-1 ring-obito-grey rounded-full w-full min-w-0 md:w-[300px] lg:w-[400px] py-2.5 px-3 xs:py-2 xs:px-4 sm:py-[14px] sm:px-5 bg-white font-bold placeholder:font-normal placeholder:text-obito-text-secondary group-focus-within:ring-obito-green transition-all duration-300 pr-12 xs:pr-10 sm:pr-[50px] text-sm sm:text-base"
                  placeholder="Search course by name"
                />
                <button
                  type="submit"
                  className="absolute h-7 w-7 xs:h-10 xs:w-10 sm:h-[52px] sm:w-[52px] top-1/2 -translate-y-1/2 right-2"
                >
                  <img
                    src="/src/assets/images/icons/search-normal-green-fill.svg"
                    className="flex shrink-0"
                    alt=""
                  />
                </button>
              </label>
            </form>

            <button
              onClick={toggleDrawer}
              className="flex lg:hidden items-center justify-center rounded-full hover:bg-obito-grey/30 transition-all duration-200 md:hidden"
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <span className="block w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/src/assets/images/photos/sami.png"
                  className="w-full h-full object-cover"
                  alt="photo"
                />
              </span>
            </button>
          </div>
          <div className="flex items-center gap-5 justify-end">
            <div className="items-center gap-5 hidden md:flex">
              <a href="#" className="flex shrink-0">
                <img
                  src="/src/assets/images/icons/device-message.svg"
                  className="flex shrink-0"
                  alt="icon"
                />
              </a>
              <a href="catalog-v2.html" className="flex shrink-0">
                <img
                  src="/src/assets/images/icons/category.svg"
                  className="flex shrink-0"
                  alt="icon"
                />
              </a>
              <a href="#" className="flex shrink-0">
                <img
                  src="/src/assets/images/icons/notification.svg"
                  className="flex shrink-0"
                  alt="icon"
                />
              </a>
            </div>

            <div className="h-[50px] shrink-0 bg-obito-grey w-px hidden md:flex" />
            <div className="items-center gap-5 hidden md:flex">
              <div
                id="profile-dropdown"
                className="relative flex items-center gap-[14px]"
              >
                <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="/src/assets/images/photos/sami.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">Tamara Utami</p>
                  <p className="text-sm text-obito-text-secondary">
                    Programmer UI
                  </p>
                </div>
                <button id="dropdown-opener" className="flex shrink-0 w-6 h-6">
                  <img
                    src="/src/assets/images/icons/arrow-circle-down.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </button>
                <div
                  id="dropdown"
                  className="absolute top-full right-0 mt-[7px] w-[170px] h-fit bg-white rounded-xl border border-obito-grey py-4 px-5 shadow-[0px_10px_30px_0px_#B8B8B840] z-10 hidden"
                >
                  <ul className="flex flex-col gap-[14px]">
                    <li className="hover:text-obito-green transition-all duration-300">
                      <a href="#">My Courses</a>
                    </li>
                    <li className="hover:text-obito-green transition-all duration-300">
                      <a href="my-subscriptions.html">Subscriptions</a>
                    </li>
                    <li className="hover:text-obito-green transition-all duration-300">
                      <a href="index.html">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-50 z-40 lg:hidden"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-obito-grey">
            <Link to="/" onClick={closeDrawer}>
              <img
                src="/src/assets/images/logos/logo.svg"
                className="h-8"
                alt="logo"
              />
            </Link>
            <button
              onClick={closeDrawer}
              className="p-2 rounded-md hover:bg-obito-grey/30 transition-all duration-200"
              aria-label="Close navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Menu Items */}
          <div className="flex-1 p-6">
            <ul className="space-y-6"></ul>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-obito-grey space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden bg-obito-grey">
                <img
                  src="/src/assets/images/photos/sami.png"
                  className="w-full h-full object-cover"
                  alt="photo"
                />
              </div>
              <div>
                <p className="font-semibold text-lg">Tamara Utami</p>
                <p className="text-sm text-obito-text-secondary">
                  Programmer UI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
