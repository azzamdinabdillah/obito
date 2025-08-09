import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import * as Accordion from "@radix-ui/react-accordion";

function CourseDetails() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>("");

  const openVideo = () => {
    // Ganti ID video di bawah ini jika diperlukan
    setVideoSrc("https://www.youtube.com/embed/AmkkHXYM7eQ?si=Q1Tsl8sCc5mWB2hg");
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
  return (
    <div className="bg-[#F8FAF9] pt-[10rem] md:pt-[11rem] lg:pt-[12rem] px-4 md:px-6 lg:px-8 pb-10">
      <NavbarDashboard />
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
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
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
                className="flex items-center bg-custom-gradient gap-[6px] rounded-[14px] py-[6px] px-2 w-fit"
              >
                <img
                  src="/src/assets/images/icons/cup-white.svg"
                  className="w-5 flex shrink-0"
                  alt="icon"
                />
                <span className="font-semibold text-xs text-white">
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
                  <span className="font-semibold text-sm leading-[21px]">
                    Digital Marketing
                  </span>
                </p>
                <p className="flex items-center gap-[6px]">
                  <img
                    src="/src/assets/images/icons/menu-board-green.svg"
                    className="w-6 flex shrink-0"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm leading-[21px]">
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
                  <span className="font-semibold text-sm leading-[21px]">
                    Ready to Work
                  </span>
                </p>
                <p className="flex items-center gap-[6px]">
                  <img
                    src="/src/assets/images/icons/briefcase-green.svg"
                    className="w-6 flex shrink-0"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm leading-[21px]">
                    Beginner Level
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
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
          className="flex flex-col w-full max-w-[1000px] gap-4 mx-auto"
        >
          <h2 className="title-22">Upgrade Your Skills</h2>
          <div id="contents" className="flex flex-col gap-5">
            <Tabs>
              <TabList className="flex flex-wrap items-center gap-2 md:gap-3">
                <Tab
                  className="tab-btn group cursor-pointer"
                  selectedClassName="active"
                >
                  <p className="rounded-full border border-obito-grey py-2 px-4 hover:border-obito-green bg-white transition-all duration-300 group-[.active]:bg-obito-black">
                    <span className="font-semibold group-[.active]:text-white">
                      About
                    </span>
                  </p>
                </Tab>
                <Tab
                  className="tab-btn group cursor-pointer"
                  selectedClassName="active"
                >
                  <p className="rounded-full border border-obito-grey py-2 px-4 hover:border-obito-green bg-white transition-all duration-300 group-[.active]:bg-obito-black">
                    <span className="font-semibold group-[.active]:text-white">
                      Lessons
                    </span>
                  </p>
                </Tab>
                <Tab
                  className="tab-btn group cursor-pointer"
                  selectedClassName="active"
                >
                  <p className="rounded-full border border-obito-grey py-2 px-4 hover:border-obito-green bg-white transition-all duration-300 group-[.active]:bg-obito-black">
                    <span className="font-semibold group-[.active]:text-white">
                      Testimonials
                    </span>
                  </p>
                </Tab>
                <Tab
                  className="tab-btn group cursor-pointer"
                  selectedClassName="active"
                >
                  <p className="rounded-full border border-obito-grey py-2 px-4 hover:border-obito-green bg-white transition-all duration-300 group-[.active]:bg-obito-black">
                    <span className="font-semibold group-[.active]:text-white">
                      Portfolios
                    </span>
                  </p>
                </Tab>
                <Tab
                  className="tab-btn group cursor-pointer"
                  selectedClassName="active"
                >
                  <p className="rounded-full border border-obito-grey py-2 px-4 hover:border-obito-green bg-white transition-all duration-300 group-[.active]:bg-obito-black">
                    <span className="font-semibold group-[.active]:text-white">
                      Rewards
                    </span>
                  </p>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="flex flex-col gap-[30px]">
                  <div
                    id="description"
                    className="flex flex-col gap-4 leading-7 w-full max-w-[844px]"
                  >
                    <p>
                      Laravel 11 adalah framework PHP yang menjadi favorit para
                      developer karena kemudahan penggunaannya, fitur lengkap,
                      dan performa tinggi. Ebook ini dirancang khusus untuk
                      pemula yang ingin mempelajari Laravel dari dasar hingga
                      membangun aplikasi web pertama mereka.
                    </p>
                    <p>
                      Anda akan diajak memahami langkah-langkah penting dalam
                      pengembangan web menggunakan Laravel, mulai dari instalasi
                      hingga implementasi fitur lanjutan. Dalam ebook ini, Anda
                      akan mempelajari dasar-dasar Laravel, seperti cara kerja
                      routing, controller, dan Blade template engine untuk
                      membuat tampilan yang dinamis dan profesional.
                    </p>
                  </div>
                  <div id="what-you-learn" className="flex flex-col gap-4">
                    <h3 className="font-semibold text-lg">
                      What Will You Learn
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-[30px] w-full max-w-[700px]">
                      <div className="flex items-center gap-3">
                        <img
                          src="/src/assets/images/icons/tick-circle-green-fill.svg"
                          className="w-6 flex shrink-0"
                          alt="icon"
                        />
                        <p>
                          Laravel 11 adalah framework PHP yang menjadi favorit
                          para developer
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="/src/assets/images/icons/tick-circle-green-fill.svg"
                          className="w-6 flex shrink-0"
                          alt="icon"
                        />
                        <p>
                          Laravel 11 adalah framework PHP yang menjadi favorit
                          para developer
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="/src/assets/images/icons/tick-circle-green-fill.svg"
                          className="w-6 flex shrink-0"
                          alt="icon"
                        />
                        <p>
                          Laravel 11 adalah framework PHP yang menjadi favorit
                          para developer
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="/src/assets/images/icons/tick-circle-green-fill.svg"
                          className="w-6 flex shrink-0"
                          alt="icon"
                        />
                        <p>
                          Laravel 11 adalah framework PHP yang menjadi favorit
                          para developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="instructors"
                    className="flex flex-col w-full max-w-[900px] rounded-[20px] border border-obito-grey p-5 gap-4 bg-white"
                  >
                    <h3 className="font-semibold text-lg">
                      Course Instructors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="instructors-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-3">
                            <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                              <img
                                src="/src/assets/images/photos/anggaphoto.png"
                                className="w-full h-full object-cover"
                                alt="photo"
                              />
                            </div>
                            <div>
                              <p className="font-semibold">Angga Risky</p>
                              <p className="text-sm text-obito-text-secondary">
                                Full Stack Developer
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                          </div>
                        </div>
                        <hr className="border-obito-grey" />
                        <p className="leading-7">
                          Angga Risky Setiawan adalah seorang desainer UI
                          berpengalaman dengan lebih dari 7 tahun pengalaman di
                          industri ini. Ia memiliki keahlian mendalam dalam
                          menciptakan.
                        </p>
                      </div>
                      <div className="instructors-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-3">
                            <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                              <img
                                src="/src/assets/images/photos/sami.png"
                                className="w-full h-full object-cover"
                                alt="photo"
                              />
                            </div>
                            <div>
                              <p className="font-semibold">Angga Risky</p>
                              <p className="text-sm text-obito-text-secondary">
                                Full Stack Developer
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                          </div>
                        </div>
                        <hr className="border-obito-grey" />
                        <p className="leading-7">
                          Angga Risky Setiawan adalah seorang desainer UI
                          berpengalaman dengan lebih dari 7 tahun pengalaman di
                          industri ini. Ia memiliki keahlian mendalam dalam
                          menciptakan.
                        </p>
                      </div>
                      <div className="instructors-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-3">
                            <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                              <img
                                src="/src/assets/images/photos/3rdPerson.png"
                                className="w-full h-full object-cover"
                                alt="photo"
                              />
                            </div>
                            <div>
                              <p className="font-semibold">Angga Risky</p>
                              <p className="text-sm text-obito-text-secondary">
                                Full Stack Developer
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                            <img
                              src="/src/assets/images/icons/Star 1.svg"
                              className="w-5 flex shrink-0"
                              alt="icon"
                            />
                          </div>
                        </div>
                        <hr className="border-obito-grey" />
                        <p className="leading-7">
                          Angga Risky Setiawan adalah seorang desainer UI
                          berpengalaman dengan lebih dari 7 tahun pengalaman di
                          industri ini. Ia memiliki keahlian mendalam dalam
                          menciptakan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="w-full max-w-[650px]">
                  <Accordion.Root
                    type="single"
                    collapsible
                    defaultValue="WarmingUp"
                    className="flex flex-col gap-5"
                  >
                    <Accordion.Item
                      value="WarmingUp"
                      className="rounded-[20px] border border-obito-grey bg-white"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between p-5 group">
                          <p className="font-semibold text-lg">Warming Up</p>
                          <img
                            src="/src/assets/images/icons/arrow-circle-down.svg"
                            alt="icon"
                            className="size-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="radix-accordion-content overflow-hidden">
                        <div className="px-5 pb-5 flex flex-col gap-4">
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">Demo Project</p>
                          </div>
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">
                              Software Installation
                            </p>
                          </div>
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">
                              Download Source Code
                            </p>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item
                      value="NewProject"
                      className="rounded-[20px] border border-obito-grey bg-white"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between p-5 group">
                          <p className="font-semibold text-lg">
                            New Project Coming
                          </p>
                          <img
                            src="/src/assets/images/icons/arrow-circle-down.svg"
                            alt="icon"
                            className="size-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="radix-accordion-content overflow-hidden">
                        <div className="px-5 pb-5 flex flex-col gap-4">
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">Demo Project</p>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item
                      value="DeepDive"
                      className="rounded-[20px] border border-obito-grey bg-white"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between p-5 group">
                          <p className="font-semibold text-lg">
                            Deep Dive into coding
                          </p>
                          <img
                            src="/src/assets/images/icons/arrow-circle-down.svg"
                            alt="icon"
                            className="size-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="radix-accordion-content overflow-hidden">
                        <div className="px-5 pb-5 flex flex-col gap-4">
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">
                              AB Testing Heading Website
                            </p>
                          </div>
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">
                              Marketing AI Integration
                            </p>
                          </div>
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">
                              Get API Key Permissions
                            </p>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item
                      value="NewProject2"
                      className="rounded-[20px] border border-obito-grey bg-white"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between p-5 group">
                          <p className="font-semibold text-lg">
                            New Project Coming
                          </p>
                          <img
                            src="/src/assets/images/icons/arrow-circle-down.svg"
                            alt="icon"
                            className="size-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="radix-accordion-content overflow-hidden">
                        <div className="px-5 pb-5 flex flex-col gap-4">
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">Demo Project</p>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item
                      value="DeepDive2"
                      className="rounded-[20px] border border-obito-grey bg-white"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between p-5 group">
                          <p className="font-semibold text-lg">
                            Deep Dive into coding
                          </p>
                          <img
                            src="/src/assets/images/icons/arrow-circle-down.svg"
                            alt="icon"
                            className="size-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="radix-accordion-content overflow-hidden">
                        <div className="px-5 pb-5 flex flex-col gap-4">
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">
                              AB Testing Heading Website
                            </p>
                          </div>
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">
                              Marketing AI Integration
                            </p>
                          </div>
                          <div className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 bg-white">
                            <img
                              src="/src/assets/images/icons/menu-board.svg"
                              className="size-6 flex shrink-0"
                              alt="icon"
                            />
                            <p className="font-semibold">
                              Get API Key Permissions
                            </p>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  </Accordion.Root>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[860px] gap-4 md:gap-5">
                  <div className="testimonial-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                    <div className="flex items-center">
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                    </div>
                    <p className="leading-7">
                      Asik banget belajar di sini dapat contoh kasus sesuai
                      kebutuhan perusahaan saat ini proses adaptasi jadi lebih
                      cepat dan produktif.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                        <img
                          src="/src/assets/images/photos/sami.png"
                          className="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Angga Risky</p>
                        <p className="text-sm text-obito-text-secondary">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                    <div className="flex items-center">
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                    </div>
                    <p className="leading-7">
                      Asik banget belajar di sini dapat contoh kasus sesuai
                      kebutuhan perusahaan saat ini proses adaptasi jadi lebih
                      cepat dan produktif.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                        <img
                          src="/src/assets/images/photos/4thPerson.png"
                          className="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Angga Risky</p>
                        <p className="text-sm text-obito-text-secondary">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                    <div className="flex items-center">
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                    </div>
                    <p className="leading-7">
                      Asik banget belajar di sini dapat contoh kasus sesuai
                      kebutuhan perusahaan saat ini proses adaptasi jadi lebih
                      cepat dan produktif.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                        <img
                          src="/src/assets/images/photos/anggaphoto.png"
                          className="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Angga Risky</p>
                        <p className="text-sm text-obito-text-secondary">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                    <div className="flex items-center">
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                    </div>
                    <p className="leading-7">
                      Asik banget belajar di sini dapat contoh kasus sesuai
                      kebutuhan perusahaan saat ini proses adaptasi jadi lebih
                      cepat dan produktif.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                        <img
                          src="/src/assets/images/photos/sami.png"
                          className="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Angga Risky</p>
                        <p className="text-sm text-obito-text-secondary">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                    <div className="flex items-center">
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                    </div>
                    <p className="leading-7">
                      Asik banget belajar di sini dapat contoh kasus sesuai
                      kebutuhan perusahaan saat ini proses adaptasi jadi lebih
                      cepat dan produktif.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                        <img
                          src="/src/assets/images/photos/5thPerson.png"
                          className="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Angga Risky</p>
                        <p className="text-sm text-obito-text-secondary">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                    <div className="flex items-center">
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                    </div>
                    <p className="leading-7">
                      Asik banget belajar di sini dapat contoh kasus sesuai
                      kebutuhan perusahaan saat ini proses adaptasi jadi lebih
                      cepat dan produktif.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                        <img
                          src="/src/assets/images/photos/anggaphoto.png"
                          className="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Angga Risky</p>
                        <p className="text-sm text-obito-text-secondary">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card flex flex-col rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
                    <div className="flex items-center">
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                      <img
                        src="/src/assets/images/icons/Star 1.svg"
                        className="w-5 flex shrink-0"
                        alt="icon"
                      />
                    </div>
                    <p className="leading-7">
                      Asik banget belajar di sini dapat contoh kasus sesuai
                      kebutuhan perusahaan saat ini proses adaptasi jadi lebih
                      cepat dan produktif.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden">
                        <img
                          src="/src/assets/images/photos/3rdPerson.png"
                          className="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Angga Risky</p>
                        <p className="text-sm text-obito-text-secondary">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, sapiente?
                  </p>
                </div>
              </TabPanel>

              <TabPanel>
                <div>
                  <p>Rewards content coming soon.</p>
                </div>
              </TabPanel>
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
