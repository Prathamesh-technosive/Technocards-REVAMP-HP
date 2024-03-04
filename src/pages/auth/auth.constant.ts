export enum InValidInputErrors {
  loginIDInvalid = "Invalid Login ID",
  firstNameInvalid = "Invalid First Name",
  lastNameInvalid = "Invalid Last Name",
  emailInvalid = "Invalid Email",
  genderInvalid = "Invalid Gender",
  dateInvalid = "Invalid Date",
  mobileInvalid = "Invalid Mobile Number",
  onSubmitFormInvalid = "Invalid Credentials",
}

export enum UserSignUpFormName {
  LOGINID = "loginID",
  FIRSTNAME = "firstName",
  LASTNAME = "lastName",
  PASSWORD = "password",
  EMAIL = "email",
  GENDER = "gender",
  DOB = "dateOfBirth",
  MOBILE = "mobile",
}

export enum UserSignInFormName {
  PASSWORD = "password",
  EMAIL = "email",
}

export enum UserSignInRegex {
  EMAIL_REGEX = "",
  PASSWORD_REGEX = "",
}
