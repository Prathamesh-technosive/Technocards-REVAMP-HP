import { Link } from "react-router-dom";

const PolicyFooter = () => {
  return (
    <>
      <div className="absolute bottom-4 right-[20%] mx-auto max-w-xs text-center text-xs sm:right-[50%]">
        By signing up, you accept Technocard's{" "}
        <Link to="#" className="underline">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link to="#" className="underline">
          terms of use
        </Link>
        .
      </div>
    </>
  );
};

export default PolicyFooter;
