interface BadgeStatusProps {
  status: "ACTIVE" | "EXPIRED" | "PENDING";
  className?: string;
  children?: React.ReactNode;
}

export default function BadgeStatus({
  status,
  className = "",
  children,
}: BadgeStatusProps) {
  const getStatusStyle = (status: string) => {
    const baseStyle =
      "font-bold text-xs badge w-fit rounded-full py-[6px] px-[10px] gap-[6px]";

    switch (status) {
      case "ACTIVE":
        return `${baseStyle} text-obito-green bg-obito-light-green`;
      case "EXPIRED":
        return `${baseStyle} text-obito-red bg-obito-light-red`;
      case "PENDING":
        return `${baseStyle} text-yellow-600 bg-yellow-100`;
      default:
        return `${baseStyle} text-obito-green bg-obito-light-green`;
    }
  };

  return (
    <span className={`${getStatusStyle(status)} ${className}`}>
      {children || status}
    </span>
  );
}
