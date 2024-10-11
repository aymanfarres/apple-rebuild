import { twMerge } from "tailwind-merge"



type Props={
    children: React.ReactNode;
    className?: string
}
const Countainer = ({children, className}:Props) => {
  return (
    <div className={twMerge("mx-auto max-w-[] px-6  ", className)}>
      {children}
    </div>
  )
}

export default Countainer


