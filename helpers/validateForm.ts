function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const handleError = (key: string, value: string, password?: string): string => {
  let error = "";
  if (value.trim().length === 0) {
    error = "Trường này là bắt buộc.";
    return error;
  }
  switch (key) {
    case "email":
      const isEmail = validateEmail(value);
      if (isEmail) error = "";
      else error = "Email không hợp lệ.";
      break;

    case "password":
      if (value.trim().length < 6) {
        error = "Mật khẩu quá ngắn";
      } else {
        error = "";
      }
      break;

    case "repassword":
      if (value !== password) {
        error = "Mật khẩu nhập lại không khớp";
      } else {
        error = "";
      }
      break;
    default:
      break;
  }

  return error;
};
export default handleError;
