import React from "react";

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`flex flex-col gap-2 md:gap-3 lg:gap-4 ${className}`}>
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
          type={type}
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
            ${icon ? "pl-10 md:pl-12 lg:pl-14" : ""}
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
            className="absolute size-4 md:size-5 lg:size-6 flex shrink-0 transform -translate-y-1/2 top-1/2 left-3 md:left-5 lg:left-6"
            alt={iconAlt}
          />
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
