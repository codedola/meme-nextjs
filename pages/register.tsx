import React from "react";
import Link from "next/link";

export default function register() {
  return (
    <div className="ass1-login">
      <div className="ass1-login__logo">
        <Link href="/">
          <a className="ass1-logo">ZendVn Meme</a>
        </Link>
      </div>
      <div className="ass1-login__content">
        <p>Đăng ký một tài khoản</p>
        <div className="ass1-login__form">
          <form action="#">
            <input type="text" className="form-control" placeholder="Tên hiển thị" required />
            <input type="email" className="form-control" placeholder="Email" required />
            <input type="password" className="form-control" placeholder="Mật khẩu" required />
            <input
              type="password"
              className="form-control"
              placeholder="Nhập lại mật khẩu"
              required
            />
            <div className="ass1-login__send">
              <Link href="/login">
                <a>Đăng nhập</a>
              </Link>
              <button type="submit" className="ass1-btn">
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
