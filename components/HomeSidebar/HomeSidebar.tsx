import React from "react";
import Image from "next/image";
export default function HomeSidebar() {
  return (
    <aside className="ass1-aside">
      <div className="ass1-content-head__t">
        <div>Bài viết gần đây.</div>
      </div>
      <div className="ass1-section">
        <div className="ass1-section__head">
          <a href="#" className="ass1-section__avatar ass1-avatar">
            <Image src="/images/avatar-03.png" alt="avatar" width={50} height={50} />
          </a>
          <div>
            <a href="#" className="ass1-section__name">
              Trần Văn A
            </a>
            <span className="ass1-section__passed">20 phút trước</span>
          </div>
          {/* <a href="#" class="ass1-section__link ass1-btn-icon"><i class="icon-Link"></i></a> */}
        </div>
        <div className="ass1-section__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tempore recusandae, nemo
            consequuntur rem pariatur ducimus dolorem aperiam nesciunt dolore, ratione aut, corporis
            laborum? Numquam ad magnam consectetur labore quam?
          </p>
        </div>
        <div className="ass1-section__footer">
          <a href="#" className="ass1-section__btn-upvote ass1-btn-icon">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </a>
          <a href="#" className="ass1-section__btn-downvote ass1-btn-icon">
            <i className="fa fa-thumbs-down" aria-hidden="true"></i>
          </a>
          {/* <a href="#" class="ass1-section__btn-repost ass1-btn-icon"><i class="icon-Repost"></i></a> */}
          <a href="#" className="ass1-section__btn-like ass1-btn-icon">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span>1,274</span>
          </a>
          <a href="#" className="ass1-section__btn-comment ass1-btn-icon">
            <i className="fa fa-comments-o" aria-hidden="true"></i>
            <span>982</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
