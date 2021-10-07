import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function PostDetailForm() {
  return (
    <div className="ass1-section ass1-section__edit-post">
      <div className="ass1-section__content">
        <form action="#">
          <div className="form-group">
            <input type="text" className="form-control ttg-border-none" placeholder="https://" />
          </div>
          <div className="form-group">
            <textarea
              className="form-control ttg-border-none"
              placeholder="Mô tả ..."
              defaultValue={""}
            />
          </div>
        </form>
        <div className="ass1-section__image">
          <a href="#">
            <div style={{ position: "relative", width: "100%", height: "500px" }}>
              <Image
                src="/images/no_image_available.jpg"
                alt="default"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </div>
        <a
          href="https://memeful.com/"
          target="_blank"
          className="ass1-btn ass1-btn-meme"
          rel="noreferrer"
        >
          Chế ảnh từ meme
        </a>
        <a href="#" className="ass1-btn ass1-btn-meme">
          Đăng ảnh từ máy tính
        </a>
      </div>
    </div>
  );
}
