import React, { useMemo } from "react";
import Image from "next/image";
import { TypeCurrentUser } from "../../state/typeState";
import Link from "next/link";
import { useGlobalState } from "../../state";
type TypeProps = {
  userDetailInfo: TypeCurrentUser;
};
const UserDetailInfo: React.FC<TypeProps> = ({ userDetailInfo }) => {
  const [currUser] = useGlobalState("currentUser");
  if (userDetailInfo === null) return null;
  const { USERID, description, email, fullname, gender, permission, profilepicture, status } =
    userDetailInfo;
  const renderAvatar = function () {
    const isHttp = profilepicture.includes("http://");
    const isHttps = profilepicture.includes("https://");
    if (isHttp || isHttps) {
      return profilepicture;
    }
    return "/images/avatar-02.png";
  };
  return (
    <div className="ass1-head-user">
      <div className="ass1-head-user__content">
        <div className="ass1-head-user__image">
          <div style={{ position: "relative", width: "100%", height: "172px" }}>
            <Image src={renderAvatar()} alt="avatar" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="ass1-head-user__info">
          <div className="ass1-head-user__info-head">
            <div className="ass1-head-user__name">
              <span>{fullname}</span>
              <i>
                <Image src="/emotion/svg/Verified.svg" alt="" width={16} height={16} />
              </i>
            </div>
            <div className="w-100" />
            <Link href="/users/password">
              <a className="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</a>
            </Link>
            <Link href="/users/profile">
              <a className="ass1-head-user__btn-follow ass1-btn">Profile</a>
            </Link>
          </div>
          <div className="ass1-head-user__info-statistic">
            <div className="ass1-btn-icon">
              <i className="fa fa-book" aria-hidden="true"></i>
              <span>Bài viết: 9999</span>
            </div>
            <div className="ass1-btn-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
              <span>Theo dõi: 99999</span>
            </div>
            <div className="ass1-btn-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
              <span>Đang theo dõi: 999</span>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailInfo;
