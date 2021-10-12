import { createStore } from "react-hooks-global-state";
import { TypeInitState, TypeAction } from "./typeState";
import { LOGOUT, LOGIN } from "./userAction";
import { ACT_GET_POST_PAGING } from "./postAction";
import { GET_LIST_CATEGORY } from "./categoriesAction";
// Initial State
const initialState: TypeInitState = {
  // Authen
  currentUser: null,
  token: "",
  // posts
  postPaging: {
    currPage: 1,
    list: [],
  },
  // categories
  categories: [],
};

const reducer = (state: TypeInitState, action: TypeAction) => {
  switch (action.type) {
    case LOGIN: {
      const { token, currentUser } = action.payload;
      return { ...state, token, currentUser };
    }
    case LOGOUT: {
      return { ...state, token: "", currentUser: null };
    }
    case ACT_GET_POST_PAGING: {
      return {
        ...state,
        postPaging: {
          ...state.postPaging,
          list:
            action.payload.currPage === 1
              ? action.payload.list
              : [...state.postPaging.list, ...action.payload.list],
          currPage: action.payload.currPage,
        },
      };
    }

    case GET_LIST_CATEGORY: {
      return {
        ...state,
        categories: action.payload.list,
      };
    }
    default:
      return state;
  }
};

const { dispatch, useGlobalState } = createStore(reducer, initialState);

export { dispatch, useGlobalState };
