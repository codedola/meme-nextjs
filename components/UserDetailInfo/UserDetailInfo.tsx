import React from "react";
import Image from "next/image";
export default function UserDetailInfo() {
  return (
    <div className="ass1-head-user">
      <div className="ass1-head-user__content">
        <div className="ass1-head-user__image">
          <div style={{ position: "relative", width: "100%", height: "172px" }}>
            <Image
              src="/images/cat-1634369_1920.jpg"
              alt="avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="ass1-head-user__info">
          <div className="ass1-head-user__info-head">
            <div className="ass1-head-user__name">
              <span>Trần Công Lực</span>
              <i>
                <Image src="/emotion/svg/Verified.svg" alt="" width={16} height={16} />
              </i>
            </div>
            <div className="w-100" />
            <a href="#" className="ass1-head-user__btn-follow ass1-btn">
              Theo dõi
            </a>
            <a href="thay-doi-password.html" className="ass1-head-user__btn-follow ass1-btn">
              Đổi mật khẩu
            </a>
            <a href="profile.html" className="ass1-head-user__btn-follow ass1-btn">
              Profile
            </a>
            {/* <a href="#" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> */}
          </div>
          <div className="ass1-head-user__info-statistic">
            <div className="ass1-btn-icon">
              <i className="icon-Post" />
              <span>Bài viết: 9999</span>
            </div>
            <div className="ass1-btn-icon">
              <i className="icon-Followers" />
              <span>Theo dõi: 99999</span>
            </div>
            <div className="ass1-btn-icon">
              <i className="icon-Following" />
              <span>Đang theo dõi: 999</span>
            </div>
            {/* <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> */}
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
