import React, { useMemo } from "react";
import Link from "next/link";
import { Avatar, Space } from "antd";
import { useGlobalState, dispatch } from "../../state";
import { actLogout } from "../../state/userAction";
import styles from "./Header.module.scss";
import Cookies from "js-cookie";
import HeaderSearch from "./Header.Search";
import HeaderCategories from "./HeaderCategories";
interface IProps {}
export default function Header({}: IProps) {
  const [userInfo] = useGlobalState("currentUser");

  const profilePicture = useMemo(() => {
    const avatar = (userInfo && userInfo.profilepicture) || "";
    if (!avatar || avatar === "" || avatar === "null") {
      return "/images/cat-1652822_1920.jpg";
    }
    return avatar;
  }, [userInfo]);

  function handleLogout() {
    Cookies.remove("token");
    dispatch(actLogout());
  }
  return (
    <header>
      <div className="ass1-header">
        <div className="container">
          <Link href="/">
            <a className="ass1-logo" style={{ fontSize: 28 }}>
              SquidGame
            </a>
          </Link>

          <HeaderCategories />

          {/* Header Search */}
          <HeaderSearch />
          {/* /posts/create */}
          <Link href="/posts/create">
            <a className="ass1-header__btn-upload ass1-btn">
              <i className="fa fa-upload" /> Upload
            </a>
          </Link>

          {userInfo ? (
            <div className={styles.MainUserInfo}>
              <Link href={`/users/${userInfo.USERID}`}>
                <a>
                  <Space className={styles.WapperUser}>
                    <Avatar src={profilePicture} />
                    <span>{userInfo.fullname}</span>
                  </Space>
                </a>
              </Link>

              <div className={styles.UserMenu}>
                <div onClick={handleLogout} className={styles.UserMenuItem}>
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <a className="ass1-header__btn-upload ass1-btn">
                <i className="fa fa-sign-in"></i> Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
