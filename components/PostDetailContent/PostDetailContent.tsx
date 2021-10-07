import React from "react";
import Image from "next/image";
import { PostCommentList } from "../PostCommentList";
import { PostFeelingIcon } from "../PostFeelingIcon";
import PostCommentForm from "../PostCommentForm/PostCommentForm";
export default function PostDetailContent() {
  return (
    <div className="ass1-section__list">
      <div className="ass1-section">
        <div className="ass1-section__head">
          <a href="#" className="ass1-section__avatar ass1-avatar">
            <Image src="/images/avatar-02.png" alt="avatar" width={50} height={50} />
          </a>
          <div>
            <a href="#" className="ass1-section__name">
              Nguyễn Chính 9
            </a>
            <span className="ass1-section__passed">2 giờ trước</span>
          </div>
          <a href="#" className="ass1-section__link ass1-btn-icon">
            <i className="icon-Link" />
          </a>
        </div>
        <div className="ass1-section__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas voluptates magnam,
            odit quae aut vel accusantium. Alias pariatur quidem, minus eaque officiis, sed ea
            repellendus tenetur ipsa inventore est earum.
          </p>
          <div className="ass1-section__image">
            <a href="#">
              <div style={{ position: "relative", width: "100%", height: "360px" }}>
                <Image
                  src="/images/frog-1530803_960_720.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </a>
          </div>
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
        {/* Post Icon Feeling */}
        <PostFeelingIcon />
      </div>
      {/* Post Comment Form */}
      <PostCommentForm />
      {/* List Comment List */}
      <PostCommentList />
    </div>
  );
}
