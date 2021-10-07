import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Avatar, Space, Modal, List } from "antd";
import { setGlobalState, useGlobalState } from "../../state";
import styles from "./Header.module.css";
import Cookies from "js-cookie";

interface IProps {}
export default function Header({}: IProps) {
  const [userInfo] = useGlobalState("currentUser");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const profilePicture = useMemo(() => {
    const avatar = (userInfo && userInfo.profilepicture) || "";
    if (!avatar || avatar === "" || avatar === "null") {
      return "/images/cat-1652822_1920.jpg";
    }
    return avatar;
  }, [userInfo]);

  function handleLogout() {
    Cookies.remove("token");
    setGlobalState("token", "");
    setGlobalState("currentUser", null);
    setIsModalVisible(false);
  }
  return (
    <header>
      <div className="ass1-header">
        <div className="container">
          <Link href="/">
            <a className="ass1-logo">ZendVn Meme</a>
          </Link>
          <nav>
            <ul className="ass1-header__menu">
              <li>
                <a href="#">Danh mục</a>
                <div className="ass1-header__nav" style={{ display: "none" }}>
                  <div className="container">
                    <ul>
                      <li>
                        <a href="index.html">Funny</a>
                      </li>
                      <li>
                        <a href="index.html">Animals</a>
                      </li>
                      <li>
                        <a href="index.html">Anime &amp; Mâng</a>
                      </li>
                      <li>
                        <a href="index.html">Awesome</a>
                      </li>
                      <li>
                        <a href="index.html">Basketball</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">Car</a>
                      </li>
                      <li>
                        <a href="index.html">Comic</a>
                      </li>
                      <li>
                        <a href="index.html">Cosplay</a>
                      </li>
                      <li>
                        <a href="index.html">Countryballs</a>
                      </li>
                      <li>
                        <a href="index.html">Classical Art Memes</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">Girl</a>
                      </li>
                      <li>
                        <a href="index.html">History</a>
                      </li>
                      <li>
                        <a href="index.html">K-POP</a>
                      </li>
                      <li>
                        <a href="index.html">V-POP</a>
                      </li>
                      <li>
                        <a href="index.html">Pokémon</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">School</a>
                      </li>
                      <li>
                        <a href="index.html">Star war</a>
                      </li>
                      <li>
                        <a href="index.html">Coder</a>
                      </li>
                      <li>
                        <a href="index.html">Travel</a>
                      </li>
                      <li>
                        <a href="index.html">Sport</a>
                      </li>
                    </ul>
                  </div>
                  <div className="ass1-header__menu-transition" />
                </div>
              </li>
              <li className="active">
                <a href="index.html">Hot</a>
                <div className="ass1-header__nav" style={{ display: "none" }}>
                  <div className="container">
                    <ul>
                      <li>
                        <a href="index.html">Funny</a>
                      </li>
                      <li>
                        <a href="index.html">Animals</a>
                      </li>
                      <li>
                        <a href="index.html">Anime &amp; Mâng</a>
                      </li>
                      <li>
                        <a href="index.html">Awesome</a>
                      </li>
                      <li>
                        <a href="index.html">Basketball</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">Car</a>
                      </li>
                      <li>
                        <a href="index.html">Comic</a>
                      </li>
                      <li>
                        <a href="index.html">Cosplay</a>
                      </li>
                      <li>
                        <a href="index.html">Countryballs</a>
                      </li>
                      <li>
                        <a href="index.html">Classical Art Memes</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">Girl</a>
                      </li>
                      <li>
                        <a href="index.html">History</a>
                      </li>
                      <li>
                        <a href="index.html">K-POP</a>
                      </li>
                      <li>
                        <a href="index.html">V-POP</a>
                      </li>
                      <li>
                        <a href="index.html">Pokémon</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="index.html">School</a>
                      </li>
                      <li>
                        <a href="index.html">Star war</a>
                      </li>
                      <li>
                        <a href="index.html">Coder</a>
                      </li>
                      <li>
                        <a href="index.html">Travel</a>
                      </li>
                      <li>
                        <a href="index.html">Sport</a>
                      </li>
                    </ul>
                  </div>
                  <div className="ass1-header__menu-transition" />
                </div>
              </li>
            </ul>
          </nav>
          <div className="ass1-header__search">
            <form action="#">
              <label>
                <input
                  type="search"
                  name="search-text"
                  className="form-control"
                  placeholder="Nhập từ khóa ..."
                />
                <i className="fa fa-search" aria-hidden="true"></i>
              </label>
            </form>
          </div>
          {/* /posts/create */}
          <Link href="/posts/create">
            <a className="ass1-header__btn-upload ass1-btn">
              <i className="fa fa-upload" /> Upload
            </a>
          </Link>

          {userInfo ? (
            <div className={styles.MainUserInfo}>
              <Space className={styles.WapperUser}>
                <Avatar src={profilePicture} />
                <span>{userInfo.fullname}</span>
              </Space>

              <div className={styles.UserMenu}>
                <div onClick={() => setIsModalVisible(true)} className={styles.UserMenuItem}>
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
      <Modal
        visible={isModalVisible}
        zIndex={100001}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={360}
        closable={false}
      >
        <List>
          <List.Item onClick={handleLogout} className={styles.ModalItemLogOut}>
            Đăng xuất
          </List.Item>
          <List.Item onClick={() => setIsModalVisible(false)} className={styles.ModalItemCancel}>
            Hủy
          </List.Item>
        </List>
      </Modal>
    </header>
  );
}
