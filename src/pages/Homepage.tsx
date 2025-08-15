import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F8FAF9] pt-20 md:pt-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[500px_1fr] gap-10 items-center py-8 md:py-12 lg:py-[70px] lg:max-w-[1240px] mx-auto md:max-w-[900px] lg:px-[75px]">
          <div className="w-full px-4 lg:px-0 flex gap-[77px] justify-between items-center">
            <div className="flex flex-col max-w-[500px] gap-[20px] md:gap-[30px] lg:gap-[50px]">
              <div className="flex flex-col gap-[10px] md:gap-[30px]">
                <p className="flex items-center gap-2 md:gap-[6px] w-fit rounded-full py-2 px-[14px] bg-obito-light-green">
                  <img
                    src="/src/assets/images/icons/crown-green.svg"
                    className="flex shrink-0 w-4 md:w-5"
                    alt="icon"
                  />
                  <span className="font-bold text-[10px] md:text-sm">
                    TRUSTED BY 500 FORTUNE ANGGA COMPANIES
                  </span>
                </p>
                <div>
                  <h1 className="font-extrabold text-4xl md:text-5xl lg:text-[50px] leading-[130%]">
                    Upgrade Skills, <br />
                    Get Higher Salary
                  </h1>
                  <p className="leading-[175%] mt-4 md:mt-[10px] text-obito-text-secondary ">
                    Materi terbaru disusun oleh professional dan perusahaan
                    besar agar lebih sesuai kebutuhan dan anda lorem dolorsi.
                  </p>
                </div>
                <div className="flex items-stretch sm:items-center gap-2 sm:gap-[18px] w-full">
                  <Link to="/course/catalog" className="">
                    <Button
                      variant="green"
                      className="text-base md:text-lg lg:px-[30px] md:h-[60px] lg:h-[67px] px-5 md:px-8 h-12"
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/course/catalog" className="">
                    <Button
                      variant="outline"
                      className="text-base md:text-lg lg:px-[30px] md:h-[60px] lg:h-[67px] px-5 md:px-8 h-12"
                    >
                      <img
                        src="/src/assets/images/icons/play-circle-fill.svg"
                        className="w-7 h-7 md:w-8 md:h-8 flex shrink-0"
                        alt="icon"
                      />
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-[14px]">
                <img
                  src="/src/assets/images/photos/group.png"
                  className="flex shrink-0 h-[40px] md:h-[50px] lg:h-[60px]"
                  alt="group photo"
                />
                <div>
                  <div className="flex gap-1 items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <img
                          key={idx}
                          src="/src/assets/images/icons/Star 1.svg"
                          className="flex shrink-0 w-4 md:w-5 lg:w-6"
                          alt="star"
                        />
                      ))}
                    </div>
                    <span className="font-bold text-xs md:text-base">5.0</span>
                  </div>
                  <p className="font-bold mt-1 text-xs md:text-base">
                    Join Millions Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pl-4 lg:pl-0 overflow-visible shrink-0 w-full h-full md:max-h-[590px] md:max-w-[666px] justify-end">
            <img
              src="/src/assets/images/backgrounds/hero-image.png"
              alt="hero-image"
              className="w-full h-full object-cover overflow-visible md:translate-x-[20%] lg:translate-x-[0%] lg:object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
