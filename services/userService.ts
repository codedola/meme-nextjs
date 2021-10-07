import api from "./api";

const userService = {
  getUserByID: async (userId) => {
    return api.callJson(`/member/member.php?userid=${userId}`);
  },
};

export default userService;
