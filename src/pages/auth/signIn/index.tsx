import SignInForm from "../../../components/SignIn";
import SignImage from "../../../components/common/SignImage";

const SignIn = () => {
  return (
    <div className="flex flex-row">
      <SignImage />
      <SignInForm />
    </div>
  );
};

export default SignIn;
