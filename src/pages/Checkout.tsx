import NavbarDashboard from "../components/NavbarDashboard";

export default function Checkout() {
  return (
    <section className="flex flex-1 justify-center py-5 items-center">
      <NavbarDashboard breadcrump />
      <div className="mt-[10rem] md:mt-[8rem] lg:mt-[11rem] flex w-[1000px] !h-fit rounded-[20px] border border-obito-grey gap-[40px] bg-white items-center p-5">
        <form
          id="checkout-details"
          action="success-checkout.html"
          className="w-full flex flex-col gap-5"
        >
          <h1 className="font-bold text-[22px] leading-[33px]">Checkout Pro</h1>
          <section id="give-access-to" className="flex flex-col gap-2">
            <h2 className="font-semibold">Give Access to</h2>
            <div className="flex items-center justify-between rounded-[20px] border border-obito-grey p-[14px]">
              <div className="profile flex items-center gap-[14px]">
                <div className="flex justify-center items-center overflow-hidden size-[50px] rounded-full">
                  <img
                    src="/src/assets/images/photos/sami.png"
                    alt="image"
                    className="size-full object-cover"
                  />
                </div>
                <div className="desc flex flex-col gap-[3px]">
                  <h3 className="font-semibold">Tamara Utami</h3>
                  <p className="text-sm leading-[21px] text-obito-text-secondary">
                    Programmer UI
                  </p>
                </div>
              </div>
              <a href="#">
                <p className="text-sm leading-[21px] hover:underline text-obito-green">
                  Change Account
                </p>
              </a>
            </div>
          </section>
          <section
            id="transaction-details"
            className="flex flex-col gap-[12px]"
          >
            <h2 className="font-semibold">Transaction Details</h2>
            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/src/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-5 shrink-0"
                  />
                  <p>Subscription Package</p>
                </div>
                <strong className="font-semibold">Rp 1.899.000</strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/src/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-5 shrink-0"
                  />
                  <p>Access Duration</p>
                </div>
                <strong className="font-semibold">3 Months</strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/src/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-5 shrink-0"
                  />
                  <p>Started At</p>
                </div>
                <strong className="font-semibold">19 December 2024</strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/src/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-5 shrink-0"
                  />
                  <p>Ended At</p>
                </div>
                <strong className="font-semibold">19 March 2025</strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/src/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-5 shrink-0"
                  />
                  <p>PPN 11%</p>
                </div>
                <strong className="font-semibold">Rp 189.000</strong>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/src/assets/images/icons/note.svg"
                    alt="icon"
                    className="size-5 shrink-0"
                  />
                  <p className="whitespace-nowrap">Grand Total</p>
                </div>
                <strong className="font-bold text-[22px] leading-[33px] text-obito-green">
                  Rp 28.583.481
                </strong>
              </div>
            </div>
          </section>
          <div className="grid grid-cols-2 gap-[14px]">
            <a href="pricing.html">
              <div className="flex border border-obito-grey rounded-full items-center justify-center py-[10px] hover:border-obito-green transition-all duration-300">
                <p className="font-semibold">Cancel</p>
              </div>
            </a>
            <button
              type="submit"
              className="flex text-white bg-obito-green rounded-full items-center justify-center py-[10px] hover:drop-shadow-effect transition-all duration-300"
            >
              <p className="font-semibold">Pay Now</p>
            </button>
          </div>
          <hr className="border-obito-grey" />
          <p className="text-sm leading-[21px] text-center hover:underline text-obito-text-secondary">
            Pahami Terms &amp; Conditions Platform Kami
          </p>
        </form>
        <div
          id="benefits"
          className="bg-[#F8FAF9] rounded-[20px] overflow-hidden shrink-0 w-[420px]"
        >
          <section
            id="thumbnails"
            className="relative flex justify-center h-[250px] items-center overflow-hidden rounded-t-[14px] w-full"
          >
            <img
              src="/src/assets/images/thumbnails/checkout.png"
              alt="image"
              className="size-full object-cover"
            />
          </section>
          <section
            id="points"
            className="pt-[61px] relative flex flex-col gap-4 px-5 pb-5"
          >
            <div className="card absolute -top-[47px] left-[30px] right-[30px] flex items-center p-4 gap-[14px] border border-obito-grey rounded-[20px] bg-white shadow-[0px_10px_30px_0px_#B8B8B840]">
              <img
                src="/src/assets/images/icons/cup-green-fill.svg"
                alt="icon"
                className="size-[50px] shrink-0"
              />
              <div>
                <h3 className="font-bold text-[18px] leading-[27px]">
                  Pro Talent
                </h3>
                <p className="text-obito-text-secondary">3 months duration</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-6 shrink-0"
              />
              <p className="font-semibold">Access 1500+ Online Courses</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-6 shrink-0"
              />
              <p className="font-semibold">Get Premium Certifications</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-6 shrink-0"
              />
              <p className="font-semibold">High Quality Work Portfolio</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-6 shrink-0"
              />
              <p className="font-semibold">Career Consultation 2025</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/images/icons/tick-circle-green-fill.svg"
                alt="icon"
                className="size-6 shrink-0"
              />
              <p className="font-semibold">Support learning 24/7</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
