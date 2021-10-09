import React, { useState, useMemo } from "react";
import Link from "next/link";
import sytles from "../styles/Register.module.scss";
import { validateForm } from "../helpers";
import { notification } from "antd";
import userService from "../services/userService";
import { setGlobalState } from "../state";
import cookie from "js-cookie";
import { useAuthen } from "../helpers/hook/useAuthen";
import Button from "../components/Button/Button";
const initRegisterData = {
  email: {
    value: "",
    error: "",
  },
  fullname: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  repassword: {
    value: "",
    error: "",
  },
};

export default function register() {
  useAuthen();
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState(initRegisterData);
  //

  const isValidate = useMemo((): boolean => {
    for (let key in registerData) {
      const error = registerData[key].error;
      if (error !== "") {
        return false;
      }
    }
    return true;
  }, [registerData]);

  const onChangeDataRegister = (keyField: string) => {
    return (e: any) => {
      const value = e.target.value;
      const password = registerData.password.value;
      const error = validateForm(keyField, value, password);

      setRegisterData({
        ...registerData,
        [keyField]: {
          value,
          error,
        },
      });
    };
  };

  const renderErrorElement = (error: string) => {
    if (error !== "") {
      return (
        <span className={sytles.FormError}>
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
          {error}
        </span>
      );
    } else {
      return null;
    }
  };

  const onSubmitFormRegister = (e: any) => {
    e.preventDefault();
    if (isLoading === true) return;
    setIsLoading(true);
    if (!isValidate) {
      notification.error({
        message: "Dữ liệu không hợp lệ!",
        description: "Xin kiểm tra lại thông tin khi đăng ký",
        placement: "bottomLeft",
        duration: 2,
        style: {
          borderRadius: 10,
        },
      });
      return;
    }

    const fullname = registerData.fullname.value;
    const email = registerData.email.value;
    const password = registerData.password.value;
    const repassword = registerData.repassword.value;

    const data = {
      fullname,
      email,
      password,
      repassword,
    };

    userService
      .register(data)
      .then((res) => {
        if (res.status === 200) {
          notification.success({
            message: "Đăng ký thành công",
            placement: "bottomLeft",
            duration: 2,
            style: {
              borderRadius: 10,
            },
          });
          setGlobalState("currentUser", res.user);
          setGlobalState("token", res.token);
          cookie.set("token", res.token);
        } else {
          notification.error({
            message: "Có lỗi xảy ra",
            description: "Xin kiểm tra lại thông tin đăng ký",
            placement: "bottomLeft",
            duration: 2,
            style: {
              borderRadius: 10,
            },
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="ass1-login">
      <div className="ass1-login__logo">
        <Link href="/">
          <a className="ass1-logo">ZendVn Meme</a>
        </Link>
      </div>
      <div className="ass1-login__content">
        <div className="ass1-login__form">
          <form action="#" onSubmit={onSubmitFormRegister}>
            {/* fullname */}
            <div className={sytles.FormGroup}>
              <input
                type="text"
                value={registerData.fullname.value}
                onChange={onChangeDataRegister("fullname")}
                className="form-control"
                placeholder="Tên hiển thị"
                required
              />
              {renderErrorElement(registerData.fullname.error)}
            </div>
            {/* email */}
            <div className={sytles.FormGroup}>
              <input
                type="email"
                value={registerData.email.value}
                onChange={onChangeDataRegister("email")}
                className="form-control"
                placeholder="Email"
                required
              />
              {renderErrorElement(registerData.email.error)}
            </div>
            {/* password */}
            <div className={sytles.FormGroup}>
              <input
                type="password"
                value={registerData.password.value}
                onChange={onChangeDataRegister("password")}
                className="form-control"
                placeholder="Mật khẩu"
                required
              />
              {renderErrorElement(registerData.password.error)}
            </div>
            {/* repassword */}
            <div className={sytles.FormGroup}>
              <input
                type="password"
                value={registerData.repassword.value}
                onChange={onChangeDataRegister("repassword")}
                className="form-control"
                placeholder="Nhập lại mật khẩu"
                required
              />
              {renderErrorElement(registerData.repassword.error)}
            </div>

            <div className="ass1-login__send">
              <Link href="/login">
                <a>Đăng nhập</a>
              </Link>

              <Button type="submit" className="ass1-btn" isLoading={isLoading}>
                Đăng ký
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
