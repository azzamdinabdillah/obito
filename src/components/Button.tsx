import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "green" | "disabled";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "green",
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  const baseClasses =
    "rounded-full border transition-all duration-300 px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-[10px] text-sm md:text-base font-semibold flex items-center gap-2 md:gap-[10px]"

  const variantClasses = {
    outline:
      "border-obito-grey bg-white text-obito-black hover:border-obito-green",
    green: "bg-obito-green text-white hover:drop-shadow-effect",
    disabled: "bg-obito-grey text-obito-text-grey border-none",
  };

  const disabledClasses = disabled
    ? "cursor-not-allowed"
    : "cursor-pointer";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
