import React from "react";
import Image from "next/image";

export default function PostCommentList() {
  return (
    <div className="ass1-comments">
      <div className="ass1-comments__head">
        <div className="ass1-comments__title">214 Bình luận</div>
        <div className="ass1-comments__options">
          <span>Sắp xếp theo:</span>
          <a href="#" className="ass1-comments__btn-upvote ass1-btn-icon">
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
          </a>
          <a href="#" className="ass1-comments__btn-down ass1-btn-icon">
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
          </a>
          <a href="#" className="ass1-comments__btn-expand ass1-btn-icon">
            <i className="fa fa-expand" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      {/*comment*/}
      <div className="ass1-comments__section">
        <a href="#" className="ass1-comments__avatar ass1-avatar">
          <Image src="/images/avatar-02.png" alt="" height={50} width={50} />
        </a>
        <div className="ass1-comments__content">
          <a href="#" className="ass1-comments__name">
            Tây Tạng
          </a>
          <span className="ass1-comments__passed">12 giờ trước</span>
          <p>
            Scratch off globe, for when you want to wipe out any country that displeases you but
            lack the weaponry to do so.
          </p>
          <div className="ass1-comments__info">
            <a href="#" className="ass1-comments__btn-upvote ass1-btn-icon">
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              <span>901</span>
            </a>
            <a href="#" className="ass1-comments__btn-down ass1-btn-icon">
              <i className="fa fa-thumbs-down" aria-hidden="true"></i>
              <span>36</span>
            </a>
          </div>
        </div>
      </div>
      {/*comment*/}
      <div className="ass1-comments__section">
        <a href="#" className="ass1-comments__avatar ass1-avatar">
          <Image src="/images/avatar-11.png" alt="" height={50} width={50} />
        </a>
        <div className="ass1-comments__content">
          <a href="#" className="ass1-comments__name">
            Monster{" "}
          </a>
          <span className="ass1-comments__passed">3 giờ trước</span>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores officiis,
            ducimus veritatis voluptatibus alias quos, magnam sed non quo hic mollitia perferendis
            nostrum? Commodi reprehenderit nesciunt saepe, libero et.
          </p>
          <div className="ass1-comments__info">
            <a href="#" className="ass1-comments__btn-upvote ass1-btn-icon">
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              <span>901</span>
            </a>
            <a href="#" className="ass1-comments__btn-down ass1-btn-icon">
              <i className="fa fa-thumbs-down" aria-hidden="true"></i>
              <span>36</span>
            </a>
          </div>
          {/*comment*/}
          <div className="ass1-comments__section">
            <a href="#" className="ass1-comments__avatar ass1-avatar">
              <Image src="/images/avatar-10.png" alt="" height={50} width={50} />
            </a>
            <div className="ass1-comments__content">
              <a href="#" className="ass1-comments__name">
                Bầu trời
              </a>
              <span className="ass1-comments__passed">1 hour ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim debitis cumque
                nostrum blanditiis iusto amet illo necessitatibus, ea quibusdam quidem quod,
                doloribus, voluptatem est saepe nulla ex optio ut quas.
              </p>
              <div className="ass1-comments__info">
                <a href="#" className="ass1-comments__btn-upvote ass1-btn-icon">
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                  <span>901</span>
                </a>
                <a href="#" className="ass1-comments__btn-down ass1-btn-icon">
                  <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                  <span>36</span>
                </a>
              </div>
            </div>
          </div>
          {/*comment*/}
          <div className="ass1-comments__section">
            <a href="#" className="ass1-comments__avatar ass1-avatar">
              <Image src="/images/avatar-10.png" alt="" height={50} width={50} />
            </a>
            <div className="ass1-comments__content">
              <a href="#" className="ass1-comments__name">
                Nguyễn A
              </a>
              <span className="ass1-comments__passed">39 mins ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptatibus
                distinctio possimus qui, incidunt illum nesciunt ad! Cum hic pariatur, velit,
                dignissimos ratione necessitatibus natus neque sed esse, voluptatum ipsum.
              </p>
              <div className="ass1-comments__info">
                <a href="#" className="ass1-comments__btn-upvote ass1-btn-icon">
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                  <span>901</span>
                </a>
                <a href="#" className="ass1-comments__btn-down ass1-btn-icon">
                  <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                  <span>36</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*comment*/}
      <div className="ass1-comments__section">
        <a href="#" className="ass1-comments__avatar ass1-avatar">
          <Image src="/images/avatar-14.png" alt="" height={50} width={50} />
        </a>
        <div className="ass1-comments__content">
          <a href="#" className="ass1-comments__name">
            Minh Minh
          </a>
          <span className="ass1-comments__passed">2 giờ trước</span>
          <p>
            Do not cook on the colorful fire!!! It is copper and will kill you if you use for
            cooking!!!
          </p>
          <div className="ass1-comments__info">
            <a href="#" className="ass1-comments__btn-upvote ass1-btn-icon">
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              <span>901</span>
            </a>
            <a href="#" className="ass1-comments__btn-down ass1-btn-icon">
              <i className="fa fa-thumbs-down" aria-hidden="true"></i>
              <span>36</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
