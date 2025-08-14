import React, { useState } from "react";

interface InputGroupProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  icon?: string;
  iconAlt?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}

export default function InputGroup({
  label,
  placeholder,
  type = "text",
  icon,
  iconAlt = "icon",
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  disabled = false,
  required = false,
  name,
  id,
  className = "",
  inputClassName = "",
  labelClassName = "",
}: InputGroupProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={id || name}
          className={`text-sm md:text-base font-medium ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative group">
        <input
          id={id || name}
          name={name}
          type={inputType}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          required={required}
          className={`
            appearance-none outline-none w-full rounded-full border 
            py-3 px-4 md:py-[14px] md:px-5 lg:py-4 lg:px-6 
            text-sm md:text-base font-semibold 
            placeholder:font-normal placeholder:text-obito-text-secondary 
            transition-all duration-300
            ${icon ? "pl-11 md:pl-12 lg:pl-14" : ""}
            ${isPasswordType ? "pr-10 md:pr-12 lg:pr-14" : ""}
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-obito-grey group-focus-within:border-obito-green"
            }
            ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
            ${inputClassName}
          `}
          placeholder={placeholder}
        />
        {icon && (
          <img
            src={icon}
            className="absolute size-5 md:size-6 flex shrink-0 transform -translate-y-1/2 top-1/2 left-4 md:left-5 lg:left-6"
            alt={iconAlt}
          />
        )}
        {isPasswordType && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            className="absolute size-5 md:size-6 flex shrink-0 transform -translate-y-1/2 top-1/2 right-4 md:right-5 lg:right-6 hover:opacity-70 transition-opacity disabled:opacity-50"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.639 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.639 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs md:text-sm lg:text-base mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
