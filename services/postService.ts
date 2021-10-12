import api from "./api";
export const PAGE_SIZE = 3;
const postService = {
  getPostPaging: async ({ pagesize = PAGE_SIZE, currPage = 1 } = {}) => {
    const params = `pagesize=${pagesize}&currPage=${currPage}`;
    const url = `/post/getListPagination.php?${params}`;
    return api.callJson(url, { method: "GET" });
  },
  getPostByUserID: async ({ userid, token }) => {
    if (!userid && !token) {
      return {
        status: 200,
        posts: [],
      };
    }
    const url = `/post/getListPostUserID.php?userid=${userid}`;
    return api.callJson(url, { token });
  },
  getPostSearch: async ({ query }) => {
    const url = `/post/search.php?query=${encodeURI(query)}`;
    return api.callJson(url);
  },
};

export default postService;
