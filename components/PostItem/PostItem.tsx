import React from "react";
import Image from "next/dist/client/image";
import { PostFeelingIcon } from "../PostFeelingIcon";

type TProps = {
  isPostDetail?: boolean;
  isShowIconFeeling?: boolean;
  classMoreEdit?: string;
};

//
const PostItem: React.FC<TProps> = ({ isShowIconFeeling = false, classMoreEdit = "" }) => {
  const classItemPost = `ass1-section__item ${classMoreEdit}`;
  return (
    <div className={classItemPost.trim()}>
      <div className="ass1-section">
        <div className="ass1-section__head">
          <a href="bai-viet-chi-tiet.html" className="ass1-section__avatar ass1-avatar">
            <Image src="/images/avatar-02.png" alt="" width={30} height={30} layout="responsive" />
          </a>
          <div>
            <a href="bai-viet-chi-tiet.html" className="ass1-section__name">
              Thanos
            </a>
            <span className="ass1-section__passed">2 giờ trước</span>
          </div>
        </div>
        <div className="ass1-section__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
            deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto amet a
            ad suscipit laudantium unde quidem perferendis!
          </p>
          <div className="ass1-section__image">
            <a href="bai-viet-chi-tiet.html">
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
          <a href="#" className="ass1-section__btn-like ass1-btn-icon">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span>1,274</span>
          </a>
          <a href="#" className="ass1-section__btn-comment ass1-btn-icon">
            <i className="fa fa-comments-o" aria-hidden="true"></i>
            <span>982</span>
          </a>
        </div>

        {isShowIconFeeling ? <PostFeelingIcon /> : null}
      </div>
    </div>
  );
};
export default PostItem;
