import jwt_decode from "jwt-decode";
interface TypeUserToken {
  id: string;
  email: string;
}

const parseJwt = (token: string | undefined) => {
  try {
    // Library
    if (token) {
      let result: TypeUserToken = jwt_decode(token);
      return result;
    }

    return null;

    //  let base64Url = token.split(".")[1];
    //  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    // Server
    // let result = Buffer.from(base64, "base64").toString("ascii");

    // Client
    // let result: string = atob(base64)
    //   .split("")
    //   .map(function (c) {
    //     return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    //   })
    //   .join("");

    // let jsonPayload = decodeURIComponent(result);

    // return JSON.parse(result);
  } catch (error) {
    return null;
  }
};

export default parseJwt;
