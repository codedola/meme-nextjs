import React, { useState } from "react";
import { PostItem } from "../PostItem";
import { PostType } from "../../pages/index";
import postService, { PAGE_SIZE } from "../../services/postService";
import { Button } from "../Button";
import { useGlobalState, dispatch } from "../../state";
import { actGetPostPaging } from "../../state/postAction";

const PostListItem: React.FC = () => {
  const [loading, setloading] = useState(false);
  const [isHasPost, setIsHasPost] = useState(true);
  const [postPaging] = useGlobalState("postPaging");
  const listPosts = postPaging.list;
  const currentPage = postPaging.currPage;
  //

  const handleLoaderMore = () => {
    if (loading === true) return;
    setloading(true);
    postService
      .getPostPaging({ currPage: currentPage + 1 })
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            actGetPostPaging({
              list: res.posts,
              currPage: currentPage + 1,
            })
          );

          if (res.posts.length < PAGE_SIZE) {
            setIsHasPost(false);
          }
        }
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <div className="ass1-section__list">
      {listPosts.map((post, index) => {
        return <PostItem post={post} key={index} isShowIconFeeling={true} />;
      })}
      {isHasPost ? (
        <Button className="load-more ass1-btn" isLoading={loading} onClick={handleLoaderMore}>
          <span>Xem thêm</span>
        </Button>
      ) : null}
    </div>
  );
};
export default PostListItem;
