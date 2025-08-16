import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import InputGroup from "../../components/form/InputGroup";

export default function SignIn() {
  return (
    <section className="relative lg:flex flex-1 w-full h-full min-h-dvh px-4 overflow-x-hidden pb-20 lg:pb-0">
      <Navbar />
      <div className="flex flex-1 w-full items-center justify-center pt-[7rem] md:pt-[11rem] lg:pt-[6rem]">
        <form className="flex flex-col h-fit w-full max-w-[510px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white">
          <h1 className="font-bold text-[22px] leading-[33px]">
            Welcome Back,
            <br />
            Let’s Upgrade Skills
          </h1>

          <InputGroup
            label="Email Address"
            placeholder="Type your valid email address"
            type="email"
            icon="/assets/images/icons/sms.svg"
            iconAlt="email icon"
            name="email"
            required
          />

          <InputGroup
            label="Password"
            placeholder="Type your password"
            type="password"
            icon="/assets/images/icons/shield-security.svg"
            iconAlt="security icon"
            name="password"
            required
          />

          <Link to="/signup" className="w-full">
            <p className="text-sm text-[#2F6A62] underline">
              Don't have an account? Sign Up
            </p>
          </Link>

          <Link to="/" className="w-full">
            <Button
              type="submit"
              variant="green"
              className="flex-center w-full"
            >
              Sign In to My Account
            </Button>
          </Link>
        </form>
      </div>
      <div className="relative w-1/2 shrink-0 hidden lg:flex">
        <div
          id="background-banner"
          className="absolute flex w-full h-full overflow-hidden"
        >
          <img
            src="/assets/images/backgrounds/banner-subscription.png"
            className="w-full h-full object-cover"
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
}
