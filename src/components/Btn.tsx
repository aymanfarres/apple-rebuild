import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Btn = ({ children, size = "md", className }: Props) => {
  const sizeClassName: { [key in "sm" | "md" | "lg"]: string } = {
    sm: "text-xs px-4 py-1",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-5"
  };

  return (
    <button className={twMerge("text-textBlack bg-white rounded-full", sizeClassName[size], className)}>
      {children}
    </button>
  );
};

export default Btn;
