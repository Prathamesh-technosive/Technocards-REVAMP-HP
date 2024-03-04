import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import routes from "../../routes/route.json";
// import {
//   InValidInputErrors,
//   UserSignInFormName,
// } from "../../pages/auth/auth.constant";
// import { ISignInFormData } from "../../pages/auth/auth.model";
// import { UserInputValidations } from "../../pages/auth/auth.service";
// import routes from "../../routes/route.json";
// import Branding from "../common/Branding";
// import PolicyFooter from "../common/PolicyFooter";
// import SignUpButton from "../common/SignButton";
// import UserInput from "../common/UserInput";
// import UserInputErrorMessage from "../common/UserInputErrorMessage";
import { setCredentials } from "../../features/auth/authSlice";

const SignInForm = () => {
  const userRef: any = useRef();
  const errRef: any = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate(`/${routes.DASHBOARD}`);
    } catch (err: any) {
      console.log(err);
      errRef.current.focus();
    }
  };

  const handleUserInput = (e: any) => {
    setUser(e.target.value);
  };
  const handlePwdInput = (e: any) => {
    setPwd(e.target.value);
  };

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="login">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-label="Error"
      ></p>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          ref={userRef}
          value={user}
          autoComplete="off"
          required
          onChange={handleUserInput}
        />
        <label htmlFor="password"> Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={pwd}
          autoComplete="off"
          required
          onChange={handlePwdInput}
        />
        <button>Sign in</button>
      </form>
    </section>
  );

  return content;

  /**
  // const [formData, setFormData] = useState<ISignInFormData>({
  //   email: "",
  //   password: "",
  // });

  // const [formErrors, setFormErrors] = useState({
  //   emailError: "",
  //   passwordError: "",
  // });
  // const [submitError, setSubmitError] = useState("");

  // const emailValidation = UserInputValidations.validateEmail(formData.email);
  // const passwordValidation = UserInputValidations.validatePassword(
  //   formData.password,
  // );

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));

  //   switch (name) {
  //     case UserSignInFormName.EMAIL:
  //       const emailValidation = UserInputValidations.validateEmail(value);
  //       setFormErrors((prevErrors) => ({
  //         ...prevErrors,
  //         emailError: emailValidation ? "" : InValidInputErrors.emailInvalid,
  //       }));
  //       setSubmitError("");
  //       break;

  //     case UserSignInFormName.PASSWORD:
  //       const passwordValidation = UserInputValidations.validatePassword(value);
  //       setFormErrors((prevErrors) => ({
  //         ...prevErrors,
  //         passwordError: passwordValidation
  //           ? ""
  //           : InValidInputErrors.passwordInvalid,
  //       }));
  //       setSubmitError("");
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // const navigate = useNavigate();
  // const handleFormSubmit = () => {
  //   if (emailValidation && passwordValidation) {
  //     setSubmitError("");
  //     navigate(`/${routes.DASHBOARD}`);
  //   } else {
  //     setSubmitError(InValidInputErrors.onSubmitFormInvalid);
  //   }
  // };

  // return (
  //   <>
  //     <div className="flex min-h-screen w-full flex-col items-center justify-center lg:w-[50%] lg:p-0">
  //       <Branding
  //         fontSize="3xl"
  //         className="sm:top-18 absolute top-8 lg:hidden"
  //       />
  //       <div className="mb-8">
  //         <h2 className="text-center text-3xl font-bold">Sign In</h2>
  //       </div>
  //       <form className="w-[80%] space-y-4 lg:w-[50%]">
  //         <UserInput
  //           name={UserSignInFormName.EMAIL}
  //           type="email"
  //           placeholder="Work Email"
  //           onChange={handleChange}
  //         />
  //         <UserInputErrorMessage error={formErrors.emailError} />
  //         <UserInput
  //           name={UserSignInFormName.PASSWORD}
  //           type="password"
  //           placeholder="Password"
  //           onChange={handleChange}
  //         />
  //         <UserInputErrorMessage error={formErrors.passwordError} />
  //         <UserInputErrorMessage error={submitError} />
  //         <SignUpButton text="Sign Up" onClick={handleFormSubmit} />
  //       </form>
  //       <div className="mt-4">
  //         <span>
  //           Don't have an account?{" "}
  //           <Link to="/signup" className="text-center text-blue-800 underline">
  //             Sign Up
  //           </Link>
  //         </span>
  //       </div>
  //     </div>
  //   </>
  // );
   */
};

export default SignInForm;
