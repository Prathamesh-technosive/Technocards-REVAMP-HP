import React from "react";

interface UserInputErrorMessageProps {
  error: string;
}

const UserInputErrorMessage: React.FC<UserInputErrorMessageProps> = ({
  error,
}) => {
  return error ? <p className="h-[1.5rem] text-red-500">{error}</p> : null;
};

export default UserInputErrorMessage;
