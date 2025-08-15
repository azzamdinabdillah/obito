import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import About from "../../components/pages/course-details/About";
import Lessons from "../../components/pages/course-details/Lessons";
import Testimonials from "../../components/pages/course-details/Testimonials";
import Portfolios from "../../components/pages/course-details/Portfolios";
import Rewards from "../../components/pages/course-details/Rewards";

// TypeScript interface for tab data
interface TabData {
  id: string;
  label: string;
  component: React.ComponentType;
}

function CourseDetails() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>("");

  const openVideo = () => {
    // Ganti ID video di bawah ini jika diperlukan
    setVideoSrc(
      "https://www.youtube.com/embed/AmkkHXYM7eQ?si=Q1Tsl8sCc5mWB2hg"
    );
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoSrc("");
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  // JSON data for tabs
  const tabData: TabData[] = [
    {
      id: "about",
      label: "About",
      component: About,
    },
    {
      id: "lessons",
      label: "Lessons",
      component: Lessons,
    },
    {
      id: "testimonials",
      label: "Testimonials",
      component: Testimonials,
    },
    {
      id: "portfolios",
      label: "Portfolios",
      component: Portfolios,
    },
    {
      id: "rewards",
      label: "Rewards",
      component: Rewards,
    },
  ];

  return (
    <div className="bg-[#F8FAF9] pt-[10rem] md:pt-[11rem] lg:pt-[12rem] px-4 md:px-6 lg:px-8 pb-10">
      <NavbarDashboard breadcrump />
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-[30px]">
        <header className="flex flex-col md:flex-row text-obito-black items-start md:items-center w-full max-w-[1000px] rounded-[20px] border border-obito-grey p-4 md:p-5 gap-4 md:gap-6 lg:gap-[30px] bg-white mx-auto">
          <div
            id="thumbnail-container"
            className="flex relative w-full h-[220px] md:w-[40%] md:h-[300px] lg:w-[500px] lg:h-[350px] shrink-0 rounded-[14px] overflow-hidden bg-obito-grey"
          >
            <img
              src="/src/assets/images/thumbnails/thumbnail-5.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
            <p className="absolute bottom-[10px] left-[10px] w-fit h-fit flex flex-col items-center rounded-[14px] py-[6px] px-[10px] bg-white gap-0.5 z-10">
              <img
                src="/src/assets/images/icons/like.svg"
                className="w-5 h-5"
                alt="icon"
              />
              <span className="font-semibold text-xs">4.8</span>
            </p>
            <button
              type="button"
              aria-label="Play preview video"
              onClick={openVideo}
              className="absolute hover:scale-110 transition cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
            >
              <img
                src="/src/assets/images/icons/video-circle-green-fill.svg"
                className="flex w-12 h-12 md:w-[60px] md:h-[60px] shrink-0 animate-pulse"
                alt="icon"
              />
            </button>
          </div>
          <div
            id="course-info"
            className="flex flex-col justify-center gap-4 md:gap-6 lg:gap-[30px]"
          >
            <div className="flex flex-col gap-[10px]">
              <p
                id="badge"
                className="flex items-center bg-custom-gradient gap-[6px] rounded-[14px] py-[6px] px-2 md:py-2 md:px-3 w-fit"
              >
                <img
                  src="/src/assets/images/icons/cup-white.svg"
                  className="w-5 flex shrink-0"
                  alt="icon"
                />
                <span className="font-semibold text-xs md:text-sm text-white">
                  This Course is Popular This Year
                </span>
              </p>
              <h1 className="font-bold text-[20px] leading-[30px] md:text-[24px] md:leading-[36px] lg:text-[28px] lg:leading-[42px] line-clamp-2">
                Data Science Pipelines Marketing Decisions
              </h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                <p className="flex items-center gap-[6px]">
                  <img
                    src="/src/assets/images/icons/crown-green.svg"
                    className="w-6 flex shrink-0"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base leading-[21px] md:leading-6">
                    Digital Marketing
                  </span>
                </p>
                <p className="flex items-center gap-[6px]">
                  <img
                    src="/src/assets/images/icons/menu-board-green.svg"
                    className="w-6 flex shrink-0"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base leading-[21px] md:leading-6">
                    182 Lessons
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                <p className="flex items-center gap-[6px]">
                  <img
                    src="/src/assets/images/icons/briefcase-green.svg"
                    className="w-6 flex shrink-0"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base leading-[21px] md:leading-6">
                    Ready to Work
                  </span>
                </p>
                <p className="flex items-center gap-[6px]">
                  <img
                    src="/src/assets/images/icons/briefcase-green.svg"
                    className="w-6 flex shrink-0"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base leading-[21px] md:leading-6">
                    Beginner Level
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
              <Link to="/course-learning" className="w-full md:w-auto">
                <Button className="w-full flex-center" variant="green">
                  Start Learning Now
                </Button>
              </Link>
              <Link to="/course-learning" className="w-full md:w-auto">
                <Button className="w-full flex-center" variant="outline">
                  Add to Bookmark
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <section
          id="details"
          className="flex flex-col w-full max-w-[1000px] gap-4 md:gap-6 mx-auto"
        >
          <h2 className="title-22">Upgrade Your Skills</h2>
          <div id="contents" className="flex flex-col gap-5">
            <Tabs>
              <TabList className="flex flex-wrap items-center gap-2 md:gap-3">
                {tabData.map((tab) => (
                  <Tab
                    key={tab.id}
                    className="tab-btn group cursor-pointer"
                    selectedClassName="active"
                  >
                    <p className="rounded-full border border-obito-grey py-2 px-4 md:py-3 md:px-5 hover:border-obito-green bg-white transition-all duration-300 group-[.active]:bg-obito-black">
                      <span className="font-semibold text-sm md:text-base group-[.active]:text-white">
                        {tab.label}
                      </span>
                    </p>
                  </Tab>
                ))}
              </TabList>

              {tabData.map((tab) => (
                <TabPanel key={tab.id}>
                  <tab.component />
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </section>
      </div>

      {isVideoOpen && (
        <div
          onClick={closeVideo}
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              type="button"
              onClick={closeVideo}
              aria-label="Close video"
              className="absolute -top-3 -right-3 md:top-0 md:right-0 z-10 rounded-full bg-white text-obito-black w-8 h-8 flex items-center justify-center shadow hover:bg-obito-black hover:text-white transition"
            >
              ×
            </button>
            <div
              className="w-full bg-black rounded-xl overflow-hidden shadow-lg"
              style={{ aspectRatio: "16 / 9" }}
            >
              {videoSrc && (
                <iframe
                  className="w-full h-full"
                  src={videoSrc}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;
