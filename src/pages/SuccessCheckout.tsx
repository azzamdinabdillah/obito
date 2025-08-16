import { Link } from "react-router-dom";
import Button from "../components/Button";
import NavbarDashboard from "../components/NavbarDashboard";

export default function SuccessCheckout() {
  return (
    <div>
      <NavbarDashboard breadcrump />
      <section className="flex justify-center py-3 md:py-4 lg:py-5 flex-1 items-center px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-[320px] md:max-w-[450px] lg:max-w-[500px] flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px] mt-[10rem] md:mt-[13rem]">
          <div className="flex flex-col gap-[8px] md:gap-[10px]">
            <div className="rounded-full !w-fit mx-auto py-1.5 md:py-2 px-[10px] md:px-[14px] bg-obito-light-green flex items-center gap-[4px] md:gap-[6px]">
              <img
                src="/obito/assets/images/icons/crown-green.svg"
                alt="icon"
                className="size-[16px] md:size-[18px] lg:size-[20px] shrink-0"
              />
              <p className="font-bold text-xs md:text-sm leading-[18px] md:leading-[21px]">
                PRO UNLOCKED
              </p>
            </div>
            <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] leading-[30px] md:leading-[36px] lg:leading-[42px] text-center">
              Payment Successful
            </h1>
            <p className="text-center leading-[22px] md:leading-[24px] lg:leading-[28px] text-obito-text-secondary text-sm md:text-base">
              Anda telah memiliki akses kelas materi terbaru sebagai persiapan
              bekerja di era digital industri saat ini, yay!
            </p>
          </div>
          <section
            id="card"
            className="relative rounded-[16px] md:rounded-[18px] lg:rounded-[20px] border border-obito-grey p-[8px] md:p-[10px] flex items-center gap-3 md:gap-4 bg-white"
          >
            <div className="flex items-center justify-center rounded-[12px] md:rounded-[14px] overflow-hidden w-[120px] md:w-[150px] lg:w-[180px] h-[90px] md:h-[110px] lg:h-[130px] shrink-0">
              <img
                src="/obito/assets/images/thumbnails/succes-checkout.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[8px] md:gap-[10px]">
              <h2 className="font-bold text-sm md:text-base lg:text-lg line-clamp-2">
                Subscription Active: Pro Talent Digital Era 2025
              </h2>
              <div className="flex items-center gap-[4px] md:gap-[6px]">
                <img
                  src="/obito/assets/images/icons/calendar-green.svg"
                  alt="icon"
                  className="size-[16px] md:size-[18px] lg:size-[20px] shrink-0"
                />
                <p className="text-obito-text-secondary text-xs md:text-sm leading-[18px] md:leading-[21px]">
                  3 Months Access
                </p>
              </div>
              <div className="flex items-center gap-[4px] md:gap-[6px]">
                <img
                  src="/obito/assets/images/icons/briefcase-green.svg"
                  alt="icon"
                  className="size-[16px] md:size-[18px] lg:size-[20px] shrink-0"
                />
                <p className="text-obito-text-secondary text-xs md:text-sm leading-[18px] md:leading-[21px]">
                  Job-Ready Skills
                </p>
              </div>
            </div>
            <img
              src="/obito/assets/images/icons/cup-green-fill.svg"
              alt="icon"
              className="hidden md:block absolute top-1/2 right-0 size-[35px] md:size-[42px] lg:size-[50px] shrink-0 -translate-y-1/2 translate-x-1/2"
            />
          </section>
          <div className="grid grid-cols-2 justify-center items-center gap-[10px] md:gap-[14px] mx-auto w-full md:max-w-[380px]">
            <Link to="/subscription" className="w-full md:w-auto">
              <Button variant="outline" className="w-full flex-center">
                My Transactions
              </Button>
            </Link>
            <Link to="/course/learning" className="w-full md:w-auto">
              <Button className="w-full flex-center">Start Learning</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
