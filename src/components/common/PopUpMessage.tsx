import toast from "react-hot-toast";

export const SuccessPopUp = (text: string, duration?: number) => {
  toast.success(text, {
    duration: duration ? duration : 2000,
    position: "top-center",
  });
};

export const ErrorPopUp = (text: string, duration?: number) => {
  toast.error(text, {
    duration: duration ? duration : 2000,
    position: "top-center",
  });
};
