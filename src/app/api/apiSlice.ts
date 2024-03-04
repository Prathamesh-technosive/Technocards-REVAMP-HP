import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { StatusCodes } from "http-status-codes";
import { logOut, setCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3005",
  credentials: "include",
  prepareHeaders: (headers: any, { getState }: any) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === StatusCodes.FORBIDDEN) {
    console.log("Sending refresh token");

    const refreshResult = await baseQuery("/refreshToken", api, extraOptions);

    if (refreshResult?.data) {
      const user: any = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshResult.data, user } as any));

      result = await baseQuery(args, api, extraOptions);
    }
    {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
