export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";

//
export const actLogout = () => {
  return {
    type: LOGOUT,
  };
};

export const actLogin = ({ token, currentUser }) => {
  return {
    type: LOGIN,
    payload: {
      token,
      currentUser,
    },
  };
};
