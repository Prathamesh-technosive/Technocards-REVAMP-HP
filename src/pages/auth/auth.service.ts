import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { ErrorPopUp, SuccessPopUp } from "../../components/common/PopUpMessage";
import routes from "../../routes/route.json";
import { ISignUpRequest, UserSignUpRegex } from "./auth.model";

export const UserInputValidations = {
  validateUsername: (username: string) => {
    return (
      !validator.isEmpty(username) &&
      validator.matches(username, UserSignUpRegex.username)
    );
  },
  validateNames: (firstName: string) => {
    return (
      !validator.isEmpty(firstName) &&
      validator.matches(firstName, UserSignUpRegex.nameValidation)
    );
  },
  validateGender: (gender: string) => {
    return (
      !validator.isEmpty(gender) && validator.isIn(gender, ["m", "f", "o"])
    );
  },
  validateEmail: (email: string) => {
    return !validator.isEmpty(email) && validator.isEmail(email);
  },
  validateDate: (date: string) => {
    return !validator.isEmpty(date) && validator.isDate(date);
  },
  validateMobileNumber: (number: string) => {
    return !validator.isEmpty(number) && validator.isMobilePhone(number);
  },
};

export const SignUpUser = (
  body: ISignUpRequest,
  navigate: ReturnType<typeof useNavigate>,
) => {
  const modifiedBody = { ...body };

  Object.keys(modifiedBody).forEach((key) => {
    const typedKey = key as keyof ISignUpRequest; // Assert that key is a keyof ISignUpRequest
    if (
      modifiedBody[typedKey] === "device" ||
      modifiedBody[typedKey] === "consent"
    ) {
      modifiedBody[typedKey] = JSON.stringify(modifiedBody[typedKey]) as any;
    }
  });

  return axios
    .post(`https://backend.tac-world.com/v1/auth/signup`, modifiedBody, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      if (response.status === 201) {
        SuccessPopUp("Please Verify your Email Before Logging in", 20000);
        navigate(`/${routes.LOGIN}`);
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        ErrorPopUp("User already exists with this Email");
      } else if (error.request) {
        // The request was made but no response was received
        if (error.request.status === 0 || error.request.readyState === 0) {
          ErrorPopUp("Unable to access the server. Please try again later");
        }
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error message:", error.message);
      }
    });
};
