import _ from "lodash";

export interface IMasks {
  username: RegExp;
  email: RegExp;
  password: RegExp;
}

// export interface ISignUpFormData {
//   username: string;
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   gender: string;
//   mobileNumber: string;
// }

export const UserSignUpRegex = {
  username: new RegExp("^[a-zA-Z0-9_.-]*$"),
  nameValidation: new RegExp("^[a-zA-Z]*$"),
  email: new RegExp(""),
  password: new RegExp(""),
};

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface Gender {
  m: string;
  f: string;
  o: string;
}

export interface IDevicePayload {
  info: DeviceInfo | IFingerPrint;
  location: object;
  network: object;
  contacts?: Array<object>;
}

export declare type OperatingSystem =
  | "ios"
  | "android"
  | "windows"
  | "mac"
  | "unknown";

export interface DeviceInfo {
  /**
   * Note: this property is iOS only.
   * The name of the device. For example, "John's iPhone"
   */
  name?: string;
  /**
   * The device model. For example, "iPhone"
   */
  model: string;
  /**
   * The device platform (lowercase).
   */
  platform: "ios" | "android" | "electron" | "web";
  /**
   * The UUID of the device as available to the app. This identifier may change
   * on modern mobile platforms that only allow per-app install UUIDs.
   */
  uuid: string;
  /**
   * The current bundle verison of the app
   */
  appVersion: string;
  /**
   * The current bundle build of the app
   */
  appBuild: string;
  /**
   * The bundle id of the app
   */
  appId: string;
  /**
   * The display name of the app
   */
  appName: string;
  /**
   * The operating system of the device
   */
  operatingSystem: OperatingSystem;
  /**
   * The version of the device OS
   */
  osVersion: string;
  /**
   * The manufacturer of the devicef
   */
  manufacturer: string;
  /**
   * Whether the app is running in a simulator/emulator
   */
  isVirtual: boolean;
  /**
   * Approximate memory used by the current app, in bytes. Divide by
   * 1048576 to get the number of MBs used.
   */
  memUsed?: number;
  /**
   * How much free disk space is available on the normal data storage
   * path for the os, in bytes
   */
  diskFree?: number;
  /**
   * The total size of the normal data storage path for the OS, in bytes
   */
  diskTotal?: number;
}

export interface IFingerPrint {
  uuid: Array<any>;
  platform: string;
  isMobile: boolean;
}

export interface ISignUpRequest {
  eid?: string | null;
  loginID: string | null;
  firstName: string | null;
  lastName: string | null;
  country: object | null;
  gender: string | null;
  dateOfBirth: string | null;
  email: string | null;
  mobile: string | null;
  hash?: string | null;
  consent: object | null;
  language: string | null;
  flags?: Array<string> | null;
  device: object | null;
  requestTime: number | null;
}

export const UserSignupRequest = (
  signupReq: ISignUpRequest,
): ISignUpRequest => {
  const data: ISignUpRequest = {
    eid: _.get(signupReq, "eid", null),
    loginID: _.get(signupReq, "loginID", null),
    firstName: _.get(signupReq, "firstName", null),
    lastName: _.get(signupReq, "lastName", null),
    country: _.get(signupReq, "country", null),
    gender: _.get(signupReq, "gender", null),
    dateOfBirth: _.get(signupReq, "dateOfBirth", null),
    email: _.get(signupReq, "email", null),
    mobile: _.get(signupReq, "mobile", null),
    hash: _.get(signupReq, "hash", null),
    consent: _.get(signupReq, "consent", null),
    language: _.get(signupReq, "language", null),
    flags: _.get(signupReq, "flags", null),
    device: _.get(signupReq, "device", null),
    requestTime: _.get(signupReq, "requestTime", null),
  };
  return data;
};
