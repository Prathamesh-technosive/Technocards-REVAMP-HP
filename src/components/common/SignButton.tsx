import React from "react";

interface SignUpButtonProps {
  text: string;
  onClick: () => void;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ onClick, text }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-md bg-gradient-to-b from-[#484848] to-[#0F0F0F] px-4 py-2.5 font-semibold text-white transition-all hover:from-[#0F0F0F] hover:to-[#484848]"
    >
      {text}
    </button>
  );
};

export default SignUpButton;
