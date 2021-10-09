import api from "./api";

interface IDataRegister {
  fullname: string;
  email: string;
  password: string;
  repassword: string;
}
const userService = {
  getUserByID: async (userId: string | number) => {
    return api.callJson(`/member/member.php?userid=${userId}`);
  },
  register: async (data: IDataRegister) => {
    return api.callJson(`/member/register.php`, { method: "POST", data });
  },
};

export default userService;
