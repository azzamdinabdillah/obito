import Navbar from "../components/Navbar";

export default function Pricing() {
  return (
    <div className="">
      <Navbar />
      <section
        id="pricing"
        className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 pt-[7rem] md:pt-[8rem] lg:pt-[9rem] pb-20 px-4 md:px-6"
      >
        <div className="flex flex-col items-center gap-2 md:gap-3 max-w-[500px] w-full">
          <p className="flex items-center gap-1 md:gap-2 w-fit rounded-full py-2 px-[14px] bg-obito-light-green">
            <img
              src="/src/assets/images/icons/crown-green.svg"
              className="flex shrink-0 w-4 md:w-5"
              alt="icon"
            />
            <span className="font-bold text-xs md:text-sm">
              UNLOCK PRO JOURNEY
            </span>
          </p>
          <h1 className="font-bold text-2xl md:text-[28px] leading-8 md:leading-[42px] text-center">
            Pricing For Everyone
          </h1>
          <p className="text-sm md:text-base leading-6 md:leading-[28px] text-obito-text-secondary text-center">
            Harga yang kami tetapkan tergolong murah namun mentor tetap
            memberikan kualitas standard internasional
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:items-center md:max-w-[776px] lg:max-w-[982px] mx-auto">
          <div className="price-card-reguler flex flex-col h-fit w-full rounded-[20px] p-4 md:p-5 border border-obito-grey gap-4 md:gap-5 bg-white">
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src="/src/assets/images/icons/award-black-fill.svg"
                className="flex w-10 md:w-[60px] shrink-0"
                alt="icon"
              />
              <h2 className="font-bold text-lg md:text-[22px] leading-7 md:leading-[33px]">
                Beasiswa
              </h2>
            </div>
            <div className="price">
              <p className="font-bold text-2xl md:text-[28px] lg:text-[32px] leading-8 md:leading-[42px] lg:leading-[48px]">
                Rp 0
              </p>
              <p className="mt-[6px] text-sm md:text-base text-obito-text-secondary">
                3 months duration
              </p>
            </div>
            <hr className="border-obito-grey" />
            <div className="flex flex-col gap-3 md:gap-4">
              <p className="flex items-center gap-2 md:gap-3">
                <img
                  src="/src/assets/images/icons/tick-circle-green-fill.svg"
                  className="flex shrink-0 w-4 md:w-5"
                  alt="icon"
                />
                <span className="font-semibold text-sm md:text-base">
                  Access 100+ Online Courses
                </span>
              </p>
              <p className="flex items-center gap-2 md:gap-3">
                <img
                  src="/src/assets/images/icons/tick-circle-green-fill.svg"
                  className="flex shrink-0 w-4 md:w-5"
                  alt="icon"
                />
                <span className="font-semibold text-sm md:text-base">
                  Get Premium Certifications
                </span>
              </p>
            </div>
            <hr className="border-obito-grey" />
            <a className="w-full h-10 md:h-11 rounded-full pt-[10px] px-5 bg-obito-grey text-center">
              <span className="font-semibold text-sm md:text-base text-obito-text-grey">
                Sold Out
              </span>
            </a>
          </div>
          <div className="price-card-popular flex flex-col h-fit w-full rounded-[20px] border-2 border-obito-green gap-4 md:gap-5 bg-white overflow-hidden md:order-2 lg:order-none">
            <p className="popular-badge text-center font-semibold text-white py-[6px] bg-obito-green text-sm md:text-base">
              Most Popular Package
            </p>
            <div className="flex flex-col gap-4 md:gap-5 p-4 md:p-5 pt-0">
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src="/src/assets/images/icons/cup-green-fill.svg"
                  className="flex w-10 md:w-[60px] shrink-0"
                  alt="icon"
                />
                <h2 className="font-bold text-lg md:text-[22px] leading-7 md:leading-[33px]">
                  Pro Talent
                </h2>
              </div>
              <div className="price">
                <p className="font-bold text-2xl md:text-[28px] lg:text-[32px] leading-8 md:leading-[42px] lg:leading-[48px]">
                  Rp 1.899.000
                </p>
                <p className="mt-[6px] text-sm md:text-base text-obito-text-secondary">
                  3 months duration
                </p>
              </div>
              <hr className="border-obito-grey" />
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/src/assets/images/icons/tick-circle-green-fill.svg"
                    className="flex shrink-0 w-4 md:w-5"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base">
                    Access 1500+ Online Courses
                  </span>
                </p>
                <p className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/src/assets/images/icons/tick-circle-green-fill.svg"
                    className="flex shrink-0 w-4 md:w-5"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base">
                    Get Premium Certifications
                  </span>
                </p>
                <p className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/src/assets/images/icons/tick-circle-green-fill.svg"
                    className="flex shrink-0 w-4 md:w-5"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base">
                    High Quality Work Portfolio
                  </span>
                </p>
                <p className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/src/assets/images/icons/tick-circle-green-fill.svg"
                    className="flex shrink-0 w-4 md:w-5"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base">
                    Career Consultation 2025
                  </span>
                </p>
                <p className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/src/assets/images/icons/tick-circle-green-fill.svg"
                    className="flex shrink-0 w-4 md:w-5"
                    alt="icon"
                  />
                  <span className="font-semibold text-sm md:text-base">
                    Support learning 24/7
                  </span>
                </p>
              </div>
              <hr className="border-obito-grey" />
              <a
                href="checkout.html"
                className="w-full h-10 md:h-11 rounded-full py-[10px] px-5 bg-obito-green text-center hover:drop-shadow-effect transition-all duration-300"
              >
                <span className="font-semibold text-sm md:text-base text-white">
                  Get Pro
                </span>
              </a>
            </div>
          </div>
          <div className="price-card-reguler flex flex-col h-fit w-full rounded-[20px] p-4 md:p-5 border border-obito-grey gap-4 md:gap-5 bg-white">
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src="/src/assets/images/icons/buildings-green-fill.svg"
                className="flex w-10 md:w-[60px] shrink-0"
                alt="icon"
              />
              <h2 className="font-bold text-lg md:text-[22px] leading-7 md:leading-[33px]">
                Business
              </h2>
            </div>
            <hr className="border-obito-grey" />
            <div className="price">
              <p className="font-bold text-base md:text-lg leading-6 md:leading-[27px]">
                Customizing easily without paying too much money
              </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <p className="text-sm md:text-base leading-6 md:leading-7 text-obito-text-secondary">
                Kami bantu siapkan materi ajar sesuai kebutuhan pertumbuhan
                perusahaan anda saat ini.
              </p>
            </div>
            <hr className="border-obito-grey" />
            <a
              href="#"
              className="w-full h-10 md:h-11 rounded-full pt-[10px] px-5 bg-white text-center border border-obito-grey hover:border-obito-green transition-all duration-300"
            >
              <span className="font-semibold text-sm md:text-base">
                Contact Sales
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mt-[50px] w-full pb-[66px]">
        <div
          id="testimonial-slide"
          className="w-full flex flex-nowrap overflow-x-hidden"
        >
          <div className="slide-container flex gap-5 pl-5 flex-nowrap animate-[slide_50s_linear_infinite]">
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/anggaphoto.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/sami.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/3rdPerson.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/anggaphoto.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/sami.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/3rdPerson.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
          <div className="slide-container flex gap-5 pl-5 flex-nowrap animate-[slide_50s_linear_infinite]">
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/anggaphoto.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/sami.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/3rdPerson.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/anggaphoto.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/sami.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
            <div className="testimonial-card flex flex-col w-[359px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
              <div className="flex">
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
                <img
                  src="assets/images/icons/Star 1.svg"
                  className="flex shrink-0 w-5"
                  alt="star"
                />
              </div>
              <p className="leading-7">
                Asik banget belajar di sini dapat contoh kasus sesuai kebutuhan
                perusahaan saat ini proses adaptasi jadi lebih cepat dan
                produktif.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex w-[50px] h-[50px] shrink-0 rounded-full overflow-hidden bg-obito-grey">
                  <img
                    src="assets/images/photos/3rdPerson.png"
                    className="w-full h-full object-cover"
                    alt="photo profile"
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
        </div>
      </section>
    </div>
  );
}
