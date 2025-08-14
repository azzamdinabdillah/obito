import Navbar from "../../components/Navbar";
import InputGroup from "../../components/form/InputGroup";

export default function SignUp() {
  return (
    <section className="relative lg:flex flex-1 w-full h-full min-h-dvh px-4">
      <Navbar />
      <div className="flex flex-1 w-full items-center justify-center pt-[7rem] md:pt-[11rem] lg:pt-[12rem]">
        <form
          action="signin.html"
          className="flex flex-col h-fit w-full max-w-[510px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white"
        >
          <h1 className="font-bold text-[22px] leading-[33px]">
            Upgrade Your Skills
          </h1>
          <label className="relative flex items-center gap-3">
            <button
              id="upload-photo"
              type="button"
              className="relative w-[90px] h-[90px] flex rounded-full overflow-hidden border border-obito-grey focus:ring-obito-green transition-all duration-300"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-semibold text-sm">
                Add <br />
                Photo
              </span>
              <img
                id="photo-preview"
                src=""
                className="w-full h-full object-cover hidden"
                alt="photo"
              />
            </button>
            <button
              id="delete-photo"
              type="button"
              className="rounded-full w-fit py-[6px] px-[10px] bg-obito-light-red font-bold text-xs text-obito-red hidden"
            >
              DELETE PHOTO
            </button>
            <input
              id="hidden-input"
              type="file"
              accept="image/*"
              className="absolute -z-10 opacity-0"
            />
          </label>

          <InputGroup
            label="Complete Name"
            placeholder="Type your complete name"
            type="text"
            icon="/src/assets/images/icons/profile.svg"
            iconAlt="profile icon"
            name="completeName"
            required
          />

          <InputGroup
            label="Occupation"
            placeholder="Type your occupation"
            type="text"
            icon="/src/assets/images/icons/briefcase.svg"
            iconAlt="briefcase icon"
            name="occupation"
            required
          />

          <InputGroup
            label="Email Address"
            placeholder="Type your valid email address"
            type="email"
            icon="/src/assets/images/icons/sms.svg"
            iconAlt="email icon"
            name="email"
            required
          />

          <InputGroup
            label="Password"
            placeholder="Type your password"
            type="password"
            icon="/src/assets/images/icons/shield-security.svg"
            iconAlt="security icon"
            name="password"
            required
          />

          <InputGroup
            label="Confirm Password"
            placeholder="Type your password"
            type="password"
            icon="/src/assets/images/icons/shield-security.svg"
            iconAlt="security icon"
            name="confirmPassword"
            required
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-[10px] rounded-full py-[14px] px-5 bg-obito-green hover:drop-shadow-effect transition-all duration-300"
          >
            <span className="font-semibold text-white">Create My Account</span>
          </button>
        </form>
      </div>
      <div className="relative w-1/2 shrink-0 hidden lg:flex">
        <div
          id="background-banner"
          className="absolute flex w-full h-full overflow-hidden"
        >
          <img
            src="/src/assets/images/backgrounds/banner-subscription.png"
            className="w-full h-full object-cover"
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
}
