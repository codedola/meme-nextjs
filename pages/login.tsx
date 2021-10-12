import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { notification } from "antd";
import { useAuthen } from "../helpers/hook/useAuthen";
import Button from "../components/Button/Button";

//
interface IFormLogin {
  email: string;
  password: string;
}

const initFormData = {
  email: "",
  password: "",
};

export default function Login() {
  useAuthen();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IFormLogin>(initFormData);

  const errorString = router.query?.error;

  useEffect(() => {
    if (errorString) {
      notification.error({
        message: "Đăng nhập thất bại",
        description: "Email hoặc Password không chính xác",
        placement: "topRight",
        duration: 2,
        style: {
          borderRadius: 10,
        },
      });
      window.history.pushState({}, document.title, "/login");
    }
  }, [errorString]);

  const handleOnChangeDataForm = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          Cookies.set("token", data.token, { expires: 30 });
          // router.push("/");
        } else {
          // alert(data.error || "Error Login");
        }
      });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    if (isLoading === true) return;
    const formElement = e.target;

    // B1: validation form data

    // B2: Submit form
    setIsLoading(true);
    formElement.submit();
  };

  return (
    <div className="ass1-login">
      <div className="ass1-login__logo">
        <Link href="/">
          <a className="ass1-logo">ZendVn Meme</a>
        </Link>
      </div>
      <div className="ass1-login__content">
        <p>Đăng nhập</p>
        <div className="ass1-login__form">
          {/* <form action="" onSubmit={handleSubmitForm}> */}
          <form action="/api/login" method="POST" onSubmit={handleSubmitData}>
            <input
              name="email"
              // value={formData.email}
              // onChange={handleOnChangeDataForm}
              type="text"
              className="form-control"
              placeholder="Email"
              required
            />
            <div className="ass1-input-copy">
              <input
                name="password"
                // value={formData.password}
                // onChange={handleOnChangeDataForm}
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                required
              />
            </div>
            <div className="ass1-login__send">
              <Link href="/register">
                <a>Đăng ký một tài khoản</a>
              </Link>
              <Button type="submit" className="ass1-btn" isLoading={isLoading}>
                Đăng nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
