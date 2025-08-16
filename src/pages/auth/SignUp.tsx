import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import InputGroup from "../../components/form/InputGroup";
import { useState, useRef } from "react";
import type { ChangeEvent } from "react";

export default function SignUp() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert("File size must be less than 5MB");
        return;
      }

      setPhotoFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeletePhoto = () => {
    setSelectedPhoto(null);
    setPhotoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Here you can access the photo file via photoFile state
    // and other form data for submission
    console.log("Photo file:", photoFile);

    // Add your form submission logic here
  };

  return (
    <section className="relative lg:flex flex-1 w-full h-full min-h-dvh px-4 overflow-x-hidden">
      <Navbar />
      <div className="flex flex-1 w-full items-center justify-center pt-[7rem] md:pt-[11rem] lg:pt-[8rem]">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col h-fit w-full max-w-[510px] shrink-0 rounded-[20px] border border-obito-grey p-5 gap-4 bg-white mb-20"
        >
          <h1 className="font-bold text-[22px] leading-[33px]">
            Upgrade Your Skills
          </h1>
          <label className="relative flex items-center gap-3">
            <button
              type="button"
              onClick={handleUploadClick}
              className="relative w-[90px] h-[90px] flex rounded-full overflow-hidden border border-obito-grey focus:ring-obito-green transition-all duration-300 hover:border-obito-green"
            >
              {selectedPhoto ? (
                <img
                  src={selectedPhoto}
                  className="w-full h-full object-cover"
                  alt="profile photo"
                />
              ) : (
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-semibold text-sm text-center">
                  Add <br />
                  Photo
                </span>
              )}
            </button>
            {selectedPhoto && (
              <button
                type="button"
                onClick={handleDeletePhoto}
                className="rounded-full w-fit py-[6px] px-[10px] bg-obito-light-red font-bold text-xs text-obito-red hover:bg-obito-red hover:text-white transition-colors duration-200"
              >
                DELETE PHOTO
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="absolute -z-10 opacity-0"
            />
          </label>

          <InputGroup
            label="Complete Name"
            placeholder="Type your complete name"
            type="text"
            icon="/assets/images/icons/profile.svg"
            iconAlt="profile icon"
            name="completeName"
            required
          />

          <InputGroup
            label="Occupation"
            placeholder="Type your occupation"
            type="text"
            icon="/assets/images/icons/briefcase.svg"
            iconAlt="briefcase icon"
            name="occupation"
            required
          />

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

          <InputGroup
            label="Confirm Password"
            placeholder="Type your password"
            type="password"
            icon="/assets/images/icons/shield-security.svg"
            iconAlt="security icon"
            name="confirmPassword"
            required
          />

          <p className="text-sm text-[#2F6A62] underline">
            <Link to="/signin" className="text-obito-green">
              Already have an account? Sign In
            </Link>
          </p>

          <Link to="/" className="w-full">
            <Button
              type="submit"
              variant="green"
              className="flex-center w-full"
            >
              Create My Account
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
