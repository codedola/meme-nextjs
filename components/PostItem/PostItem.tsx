import React, { useMemo } from "react";
import Image from "next/dist/client/image";
import { PostFeelingIcon } from "../PostFeelingIcon";
import { PostType } from "../../pages";
import Link from "next/link";
import parseTime from "../../helpers/parseTime";
import styles from "./PostItem.module.scss";
import { useRouter } from "next/router";
import { Typography } from "antd";
import Highlighter from "react-highlight-words";
const { Text } = Typography;

type TProps = {
  isPostDetail?: boolean;
  isShowIconFeeling?: boolean;
  classMoreEdit?: string;
  post: PostType;
  isShowFooter?: boolean;
};

//
const PostItem: React.FC<TProps> = ({
  isShowIconFeeling = false,
  classMoreEdit = "",
  post,
  isShowFooter = true,
}) => {
  const router = useRouter();
  const querySearch = String(router.query.q || "");

  const {
    PID,
    USERID,
    count,
    fullname,
    post_content,
    profilepicture,
    status,
    time_added,
    url_image,
  } = post;
  const classItemPost = `ass1-section__item ${classMoreEdit}`;

  const renderAvatar = useMemo(
    function () {
      const isHttp = profilepicture.includes("http://");
      const isHttps = profilepicture.includes("https://");
      if (isHttp || isHttps) {
        return profilepicture;
      }
      return "/images/avatar-02.png";
    },
    [profilepicture]
  );

  const renderImge = useMemo(() => {
    const isHttp = url_image.includes("http://");
    const isHttps = url_image.includes("https://");
    if (isHttp || isHttps) {
      return url_image;
    }
    return "/images/frog-1530803_960_720.jpg";
  }, []);

  return (
    <div className={classItemPost.trim()}>
      <div className="ass1-section">
        <div className="ass1-section__head">
          <Link href="/users/[userid]" as={`/users/${USERID}`}>
            <a className="ass1-section__avatar ass1-avatar">
              <Image src={renderAvatar} alt="avatar" width={30} height={30} layout="responsive" />
            </a>
          </Link>

          <div>
            <Link href="/users/[userid]" as={`/users/${USERID}`}>
              <a className="ass1-section__name">
                {" "}
                <p>
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[querySearch]}
                    autoEscape={true}
                    textToHighlight={fullname}
                  />
                </p>
              </a>
            </Link>

            <span className={`ass1-section__passed ${styles.PostDayTime}`}>
              <span className={styles.DayTime}>{parseTime(time_added)}</span>
              <span className={styles.DotIcon}></span>
              <i className={`fa fa-${status === "1" ? "globe" : "lock"}`} aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="ass1-section__content">
          {/* {renderContent} */}
          <p>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[querySearch]}
              autoEscape={true}
              textToHighlight={post_content}
            />
          </p>

          <div className="ass1-section__image">
            <Link href="/posts/[postid]" as={"/posts/" + PID}>
              <a>
                <div className={styles.WapperImage}>
                  <Image src={renderImge} alt="" layout="fill" objectFit="fill" />
                </div>
              </a>
            </Link>
          </div>
        </div>
        {isShowFooter ? (
          <div className="ass1-section__footer">
            <span className="ass1-section__btn-upvote ass1-btn-icon">
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </span>
            <span className="ass1-section__btn-downvote ass1-btn-icon">
              <i className="fa fa-thumbs-down" aria-hidden="true"></i>
            </span>
            <span className="ass1-section__btn-like ass1-btn-icon">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span>1,274</span>
            </span>
            <span className="ass1-section__btn-comment ass1-btn-icon">
              <i className="fa fa-comments-o" aria-hidden="true"></i>
              <span>{count || 0}</span>
            </span>
          </div>
        ) : null}

        {isShowIconFeeling ? <PostFeelingIcon /> : null}
      </div>
    </div>
  );
};
export default PostItem;
