import { Link } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Button from "../components/Button";

export default function Checkout() {
  return (
    <section className="flex flex-1 justify-center py-3 md:py-4 lg:py-5 items-center !pb-10 md:!pb-20">
      <NavbarDashboard breadcrump />
      <div className="mt-[10rem] md:mt-[11rem] lg:mt-[11rem] mx-4 md:mx-6 lg:mx-8 flex w-full max-w-[1000px] !h-fit rounded-[12px] md:rounded-[16px] lg:rounded-[20px] border border-obito-grey gap-[20px] md:gap-[30px] lg:gap-[40px] bg-white items-center p-3 md:p-4 lg:p-5 flex-col lg:flex-row">
        <form
          id="checkout-details"
          className="w-full flex flex-col gap-4 md:gap-5"
        >
          <h1 className="font-bold text-[20px] md:text-[22px] leading-[27px] md:leading-[30px] lg:leading-[33px]">
            Checkout Pro
          </h1>
          <section id="give-access-to" className="flex flex-col gap-1 md:gap-2">
            <h2 className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
              Give Access to
            </h2>
            <div className="flex items-center justify-between rounded-[12px] md:rounded-[16px] lg:rounded-[20px] border border-obito-grey p-[10px] md:p-[12px] lg:p-[14px]">
              <div className="profile flex items-center gap-[10px] md:gap-[12px] lg:gap-[14px]">
                <div className="flex justify-center items-center overflow-hidden size-[40px] md:size-[45px] lg:size-[50px] rounded-full">
                  <img
                    src="/obito/assets/images/photos/sami.png"
                    alt="image"
                    className="size-full object-cover"
                  />
                </div>
                <div className="desc flex flex-col gap-[2px] md:gap-[3px]">
                  <h3 className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
                    Tamara Utami
                  </h3>
                  <p className="text-xs md:text-sm leading-[18px] md:leading-[21px] text-obito-text-secondary">
                    Programmer UI
                  </p>
                </div>
              </div>
              <a href="#">
                <p className="text-xs md:text-sm leading-[18px] md:leading-[21px] hover:underline text-obito-green">
                  Change Account
                </p>
              </a>
            </div>
          </section>
          <section
            id="transaction-details"
            className="flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px]"
          >
            <h2 className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
              Transaction Details
            </h2>
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                  <img
                    src="/obito/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-4.5 md:size-5 shrink-0"
                  />
                  <p className="text-sm md:text-base">Subscription Package</p>
                </div>
                <strong className="font-semibold text-sm md:text-base">
                  Rp 1.899.000
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                  <img
                    src="/obito/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-4.5 md:size-5 shrink-0"
                  />
                  <p className="text-sm md:text-base">Access Duration</p>
                </div>
                <strong className="font-semibold text-sm md:text-base">
                  3 Months
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                  <img
                    src="/obito/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-4.5 md:size-5 shrink-0"
                  />
                  <p className="text-sm md:text-base">Started At</p>
                </div>
                <strong className="font-semibold text-sm md:text-base">
                  19 December 2024
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                  <img
                    src="/obito/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-4.5 md:size-5 shrink-0"
                  />
                  <p className="text-sm md:text-base">Ended At</p>
                </div>
                <strong className="font-semibold text-sm md:text-base">
                  19 March 2025
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                  <img
                    src="/obito/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-4.5 md:size-5 shrink-0"
                  />
                  <p className="text-sm md:text-base">PPN 11%</p>
                </div>
                <strong className="font-semibold text-sm md:text-base">
                  Rp 189.000
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2">
                  <img
                    src="/obito/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-4.5 md:size-5 shrink-0"
                  />
                  <p className="whitespace-nowrap text-sm md:text-base">
                    Grand Total
                  </p>
                </div>
                <strong className="font-bold text-[18px] md:text-[20px] lg:text-[22px] leading-[27px] md:leading-[30px] lg:leading-[33px] text-obito-green">
                  Rp 28.583.481
                </strong>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-2 gap-[10px] md:gap-[12px] lg:gap-[14px]">
            <Link to="/pricing">
              <Button variant="outline" className="w-full flex-center">
                Cancel
              </Button>
            </Link>
            <Link to="/pricing/checkout/success">
              <Button className="w-full flex-center">Pay Now</Button>
            </Link>
          </div>
          <hr className="border-obito-grey" />
          <p className="text-xs md:text-sm leading-[18px] md:leading-[21px] text-center hover:underline text-obito-text-secondary">
            Pahami Terms &amp; Conditions Platform Kami
          </p>
        </form>
        <div
          id="benefits"
          className="bg-[#F8FAF9] rounded-[12px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden shrink-0 w-full md:w-[380px] lg:w-[420px]"
        >
          <section
            id="thumbnails"
            className="relative flex justify-center h-[180px] md:h-[220px] lg:h-[250px] items-center overflow-hidden rounded-t-[10px] md:rounded-t-[12px] lg:rounded-t-[14px] w-full"
          >
            <img
              src="/obito/assets/images/thumbnails/checkout.png"
              alt="image"
              className="size-full object-cover"
            />
          </section>
          <section
            id="points"
            className="pt-[55px] md:pt-[61px] relative flex flex-col gap-3 md:gap-4 px-3 md:px-4 lg:px-5 pb-3 md:pb-4 lg:pb-5"
          >
            <div className="card absolute -top-[30px] md:-top-[40px] lg:-top-[47px] left-[15px] md:left-[20px] lg:left-[30px] right-[15px] md:right-[20px] lg:right-[30px] flex items-center p-3 md:p-4 gap-[10px] md:gap-[12px] lg:gap-[14px] border border-obito-grey rounded-[12px] md:rounded-[16px] lg:rounded-[20px] bg-white shadow-[0px_10px_30px_0px_#B8B8B840]">
              <img
                src="/obito/assets/images/icons/cup-green-fill.svg"
                alt="icon"
                className="size-[40px] md:size-[45px] lg:size-[50px] shrink-0"
              />
              <div>
                <h3 className="font-bold text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[27px]">
                  Pro Talent
                </h3>
                <p className="text-obito-text-secondary text-sm md:text-base">
                  3 months duration
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <img
                src="/obito/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-5 md:size-6 shrink-0"
              />
              <p className="font-semibold text-sm md:text-base">
                Access 1500+ Online Courses
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <img
                src="/obito/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-5 md:size-6 shrink-0"
              />
              <p className="font-semibold text-sm md:text-base">
                Get Premium Certifications
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <img
                src="/obito/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-5 md:size-6 shrink-0"
              />
              <p className="font-semibold text-sm md:text-base">
                High Quality Work Portfolio
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <img
                src="/obito/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-5 md:size-6 shrink-0"
              />
              <p className="font-semibold text-sm md:text-base">
                Career Consultation 2025
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <img
                src="/obito/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-5 md:size-6 shrink-0"
              />
              <p className="font-semibold text-sm md:text-base">
                Support learning 24/7
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
