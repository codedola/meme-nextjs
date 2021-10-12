import { PostType } from "../pages";

export type TypeCurrentUser = {
  USERID: string;
  description: string;
  email: string;
  fullname: string;
  gender: string;
  permission: string;
  profilepicture: string;
  status: string;
};

export type TypePaging = {
  pagesize?: number;
  currPage: number;
  list: PostType[];
};

export type TypeCategory = {
  id: number;
  text: string;
};

// ---------------------------

// Type Initial State
export type TypeInitState = {
  currentUser: TypeCurrentUser | null;
  token: string;
  postPaging: TypePaging;
  categories: TypeCategory[];
};

// Type Action Object
export type TypeAction = {
  type: string;
  payload?: any;
};
