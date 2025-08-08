import { useMemo, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { courseDetailsData } from "../../data/courseDetails";
import { Link } from "react-router-dom";

type FlattenedLesson = {
  id: string;
  title: string;
  content: string;
  sectionId: string;
  sectionTitle: string;
};

function CourseDetails() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const lessonsFlat: FlattenedLesson[] = useMemo(() => {
    return courseDetailsData.sections.flatMap((section) =>
      section.lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        content: lesson.content,
        sectionId: section.id,
        sectionTitle: section.title,
      }))
    );
  }, []);

  const lessonIndexById: Record<string, number> = useMemo(() => {
    const indexMap: Record<string, number> = {};
    lessonsFlat.forEach((l, idx) => {
      indexMap[l.id] = idx;
    });
    return indexMap;
  }, [lessonsFlat]);

  const Sidebar = () => (
    <aside className="flex flex-col border border-obito-grey bg-white w-full h-full lg:w-[260px]">
      <div className="w-full pb-[20px] h-[280px] px-5 pt-5 flex flex-col gap-5">
        <ul>
          <li>
            <Link to="/course-catalog">
              <div className="flex items-center gap-2 py-[10px] px-[14px] rounded-full border border-obito-grey bg-white hover:border-obito-green transition-all duration-300">
                <img
                  src="/src/assets/images/icons/home-trend-up.svg"
                  alt="icon"
                  className="size-[20px] shrink-0"
                />
                <p>Back to Dashboard</p>
              </div>
            </Link>
          </li>
        </ul>
        <header className="flex flex-col gap-[12px]">
          <div className="flex justify-center items-center overflow-hidden w-full h-[100px] rounded-[14px]">
            <img
              src={courseDetailsData.thumbnailSrc}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-bold">{courseDetailsData.title}</h1>
        </header>
        <hr className="border-obito-grey" />
      </div>
      <div
        id="lessons-container"
        className="h-full overflow-y-auto [&::-webkit-scrollbar]:hidden w-full mt-2"
      >
        <nav className="px-5 pb-[33px] flex flex-col gap-5">
          <Accordion.Root type="multiple" className="flex flex-col gap-5">
            {courseDetailsData.sections.map((section) => (
              <>
                <Accordion.Item
                  key={section.id}
                  value={section.id}
                  className="lesson accordion flex flex-col gap-4"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between">
                      <h2 className="font-semibold">{section.title}</h2>
                      <img
                        src="/src/assets/images/icons/arrow-circle-down.svg"
                        alt="icon"
                        className="size-6 shrink-0 transition-all duration-300"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                    <ul className="flex flex-col gap-4 pt-2">
                      {section.lessons.map((lesson) => (
                        <li key={lesson.id} className="group">
                          <button
                            type="button"
                            onClick={() => {
                              const idx = lessonIndexById[lesson.id];
                              setSelectedIndex(idx);
                              setIsDrawerOpen(false);
                            }}
                            className="w-full text-left px-4 py-[10px] rounded-full border border-obito-grey hover:bg-obito-black hover:text-white transition-all duration-300"
                          >
                            <h3 className="font-semibold text-sm leading-[21px]">
                              {lesson.title}
                            </h3>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>

                {section.id !==
                  courseDetailsData.sections[
                    courseDetailsData.sections.length - 1
                  ].id && <hr className="border-[#EAECEE]" />}
              </>
            ))}
          </Accordion.Root>
        </nav>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-[#F8FAF9]">
      {/* Static sidebar on large screens */}
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>

      {/* Drawer opener on mobile/tablet */}
      <div className="lg:hidden fixed top-0 p-4 w-full left-0 z-40 bg-white">
        <button
          type="button"
          className="rounded-full border border-obito-grey bg-white px-4 py-2 text-sm font-semibold hover:border-obito-green transition-all duration-300"
          onClick={() => setIsDrawerOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* Drawer overlay */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-[300px] bg-white shadow-xl animate-[slideIn_0.2s_ease-out]">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-grow overflow-y-auto">
        <main className="pt-[60px] lg:pt-[6px] pb-[118px] px-4 md:px-6 lg:pl-[50px] lg:pr-4">
          <article>
            <div className="content-ebook">
              <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
                {lessonsFlat.map((l) => (
                  <TabPanel key={l.id}>
                    {/* <h1 className="mb-2 md:mb-4 lg:mb-5">{l.title}</h1> */}
                    <div className="">{l.content}</div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </article>
        </main>
        <nav className="fixed hidden lg:block bottom-0 left-auto right-0 z-30 mx-auto w-full lg:w-[calc(100%-260px)] pt-5 pb-[30px]">
          <div className="px-[30px]">
            <div className="content border border-obito-grey rounded-[20px] bg-white p-[12px] flex items-center justify-between">
              <p className="text-obito-text-secondary">
                Pelajari materi dengan baik, jika bingung maka tanya mentor
                kelas
              </p>
              <div className="buttons flex items-center gap-[12px]">
                <a
                  href="#"
                  className="rounded-full border border-obito-grey px-5 py-[10px] hover:border-obito-green transition-all duration-300"
                >
                  <span className="font-semibold">Ask Mentor</span>
                </a>
                <a
                  href="#"
                  className="rounded-full border bg-obito-green text-white px-5 py-[10px] hover:drop-shadow-effect transition-all duration-300"
                >
                  <span className="font-semibold">Next Lesson</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CourseDetails;
