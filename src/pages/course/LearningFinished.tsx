import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function LearningFinished() {
  return (
    <div className="relative flex justify-center pb-10">
      <div id="backgroundImage" className="absolute top-0 left-0 right-0">
        <img
          src="/assets/images/backgrounds/learning-finished.png"
          alt="image"
          className="h-[400px] sm:h-[600px] md:h-[777px] object-cover object-bottom w-full"
        />
      </div>
      <main className="relative mt-[100px] sm:mt-[150px] md:mt-[178px] flex flex-col gap-[20px] sm:gap-[25px] md:gap-[30px] p-[20px] sm:p-[25px] md:p-[30px] w-[90%] sm:w-[500px] md:w-[560px] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] border bg-white border-obito-grey">
        <img
          src="/assets/images/icons/cup-green-fill.svg"
          alt="icon"
          className="size-[50px] sm:size-[55px] md:size-[60px] shrink-0 mx-auto"
        />
        <div className="mx-auto flex w-full flex-col gap-[8px] sm:gap-[10px] items-center">
          <h1 className="text-center font-bold text-[22px] sm:text-[25px] md:text-[28px] leading-[32px] sm:leading-[36px] md:leading-[42px]">
            What a Day! Now
            <br />
            You're Ready to Work
          </h1>
          <p className="text-center text-obito-text-secondary text-[14px] sm:text-[16px] md:text-base leading-[22px] sm:leading-[24px] md:leading-[28px]">
            Anda telah menyelesaikan materi kelas dengan baik selanjutnya dapat
            membuat portfolio dan mengikuti magang
          </p>
        </div>
        <div
          id="card"
          className="flex flex-col sm:flex-row items-center pt-[10px] pb-[10px] pl-[10px] pr-4 border border-obito-grey rounded-[15px] sm:rounded-[18px] md:rounded-[20px] gap-3 sm:gap-4"
        >
          <div className="flex justify-center items-center overflow-hidden shrink-0 w-full sm:w-[160px] md:w-[180px] h-[100px] sm:h-[120px] md:h-[130px] rounded-[12px] sm:rounded-[14px]">
            <img
              src="/assets/images/thumbnails/thumbnail-9.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[8px] sm:gap-[10px] w-full sm:w-auto">
            <h2 className="font-bold text-[16px] md:text-base">
              Data Science Pipelines Building Marketing Decision
            </h2>
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/crown-green.svg"
                alt="icon"
                className="size-4 sm:size-5 shrink-0"
              />
              <p className="text-xs sm:text-sm leading-[18px] sm:leading-[21px] text-obito-text-secondary">
                Digital Marketing
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/menu-board-green.svg"
                alt="icon"
                className="size-4 sm:size-5 shrink-0"
              />
              <p className="text-xs sm:text-sm leading-[18px] sm:leading-[21px] text-obito-text-secondary">
                182 Lessons
              </p>
            </div>
          </div>
        </div>
        <div className="buttons grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-[12px]">
          <Link to={"/"}>
            <Button className="w-full flex-center" variant="outline">
              Get My Certificate
            </Button>
          </Link>
          <Link to={"/course/catalog"}>
            <Button className="w-full flex-center" variant="green">
              Explore Courses
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
