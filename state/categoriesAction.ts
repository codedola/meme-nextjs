import { TypeCategory } from "./typeState";
export const GET_LIST_CATEGORY = "GET_LIST_CATEGORY";

export const actGetListCategory = (list: TypeCategory[]) => {
  return {
    type: GET_LIST_CATEGORY,
    payload: {
      list,
    },
  };
};
