import api from "./api";

const categoryService = {
  getList() {
    const url = "/categories/index.php";
    return api.callJson(url);
  },
  getListPostsByCategory({ tagIndex = "", pagesize = 10, currPage = 1 } = {}) {
    if (!tagIndex) {
      return null;
    }
    const paramsString = `pagesize=${pagesize}&tagIndex=${tagIndex}&currPage=${currPage}`;
    const url = `/post/getListByCategory.php?${paramsString}`;
    return api.callJson(url);
  },
};

export default categoryService;
