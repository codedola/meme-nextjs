import { TypePaging } from "./typeState";
export const ACT_GET_POST_PAGING = "ACT_GET_POST_PAGING";

export const actGetPostPaging = ({ list, currPage }: TypePaging) => {
  return {
    type: ACT_GET_POST_PAGING,
    payload: {
      list,
      currPage,
    },
  };
};
