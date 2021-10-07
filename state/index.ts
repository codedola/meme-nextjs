import React from "react";
import { createGlobalState } from "react-hooks-global-state";
type TypeCurrentUser = {
  USERID: string;
  description: string;
  email: string;
  fullname: string;
  gender: string;
  permission: string;
  profilepicture: string;
  status: string;
};
type TypeInitState = {
  currentUser: TypeCurrentUser | null;
  token?: string;
};
const initialState = {
  currentUser: null,
  token: "",
};

const { useGlobalState, setGlobalState, getGlobalState } = createGlobalState(initialState);

export { useGlobalState, setGlobalState, getGlobalState };
/**



lastlogin: ""
password: ""


profileviews: "0"
status: "1"
username: ""
yourviewed: "0"
youviewed: "0"
 */
