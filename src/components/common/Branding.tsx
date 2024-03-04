import Logo from "../../assets/logo.svg";
import { cn } from "../../lib/utils";

type FontVariants = {
  [key: string]: string;
};

const fontVariants: FontVariants = {
  "1xl": "text-1xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
};

const Branding = ({
  fontSize,
  className,
}: {
  fontSize: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      <div className="">
        <img src={Logo} alt="logo" width="100" />
      </div>
      <div className={`font-bold  ${fontVariants[fontSize]}`}>
        <span>Technocards</span>
      </div>
    </div>
  );
};

export default Branding;
