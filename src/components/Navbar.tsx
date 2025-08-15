import { useState, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Navbar(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = (): void => {
    setIsDrawerOpen(false);
  };

  interface MenuItem {
    href: string;
    label: string;
    isActive: boolean;
  }

  const menuItems: MenuItem[] = [
    { href: "/", label: "Home", isActive: location.pathname === "/" },
    {
      href: "/pricing",
      label: "Pricing",
      isActive: location.pathname === "/pricing",
    },
    {
      href: "/features",
      label: "Features",
      isActive: location.pathname === "/features",
    },
    {
      href: "/testimonials",
      label: "Testimonials",
      isActive: location.pathname === "/testimonials",
    },
  ];

  return (
    <>
      <nav
        id="nav-guest"
        className="flex fixed top-0 left-0 w-full bg-white border-b border-obito-grey z-50"
      >
        <div className="flex px-4 w-full lg:max-w-[1280px] lg:px-[75px] py-5 items-center justify-between mx-auto">
          <div className="flex items-center gap-[50px]">
            <Link to="/" className="flex shrink-0">
              <img
                src="/src/assets/images/logos/logo.svg"
                className="flex shrink-0"
                alt="logo"
              />
            </Link>
            <ul className="items-center gap-10 hidden lg:flex">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`hover:font-semibold transition-all duration-300 ${
                    item.isActive ? "font-semibold" : ""
                  }`}
                >
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-5 justify-end">
            <a href="#" className="flex shrink-0">
              <img
                src="/src/assets/images/icons/device-message.svg"
                className="flex shrink-0"
                alt="icon"
              />
            </a>
            <div className="h-[50px] flex shrink-0 bg-obito-grey w-px" />
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/signin">
                <Button variant="outline" className="lg:!py-3">
                  Sign In
                </Button>
              </Link>
              <Link to="/course/catalog">
                <Button variant="green" className="lg:!py-3">
                  My Account
                </Button>
              </Link>
            </div>

            <button
              onClick={toggleDrawer}
              className="flex lg:hidden items-center justify-center p-2 rounded-md hover:bg-obito-grey/30 transition-all duration-200"
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transition-transform duration-300 ${
                  isDrawerOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line
                  x1="4"
                  y1="7"
                  x2="20"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="4"
                  y1="17"
                  x2="20"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
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
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    onClick={closeDrawer}
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                      item.isActive
                        ? "bg-obito-green text-white font-semibold"
                        : "hover:bg-obito-grey/30 hover:font-semibold"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-obito-grey flex gap-4 flex-col">
            <Link to="/signin">
              <Button
                variant="outline"
                className="py-3 px-5 !text-base w-full flex-center"
              >
                Sign In
              </Button>
            </Link>

            <Link to="/course/catalog">
              <Button
                variant="green"
                className="py-3 px-5 !text-base w-full flex-center"
              >
                My Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
