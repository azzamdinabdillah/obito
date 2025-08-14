import * as Accordion from "@radix-ui/react-accordion";
import { courseDetailsData } from "../../../data/courseLearning";

export default function Lessons() {
  return (
    <div className="w-full max-w-[650px]">
      <Accordion.Root
        type="single"
        collapsible
        defaultValue={courseDetailsData.sections[0]?.id}
        className="flex flex-col gap-4 md:gap-5"
      >
        {courseDetailsData.sections.map((section) => (
          <Accordion.Item
            key={section.id}
            value={section.id}
            className="rounded-[20px] border border-obito-grey bg-white"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 md:p-5 group">
                <p className="font-semibold text-base md:text-lg">
                  {section.title}
                </p>
                <img
                  src="/src/assets/images/icons/arrow-circle-down.svg"
                  alt="icon"
                  className="size-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="radix-accordion-content overflow-hidden">
              <div className="px-4 md:px-5 pb-4 md:pb-5 flex flex-col gap-3 md:gap-4">
                {section.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center rounded-[50px] gap-[10px] border border-obito-grey py-3 px-4 md:px-5 bg-white"
                  >
                    <img
                      src="/src/assets/images/icons/menu-board.svg"
                      className="size-6 flex shrink-0"
                      alt="icon"
                    />
                    <p className="font-semibold">{lesson.title}</p>
                  </div>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
