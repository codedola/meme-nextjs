import React, { useMemo } from "react";
import { PostType } from "../../pages";
import { useGlobalState } from "../../state";
import Link from "next/link";
import { PostItem } from "../PostItem";

type PropsType = {
  userPosts: PostType[];
};
const HomeSidebar: React.FC<PropsType> = ({ userPosts }) => {
  const [currentUser] = useGlobalState("currentUser");
  const recentPosts = useMemo(() => {
    if (userPosts.length > 0) {
      if (userPosts.length > 3) {
        return [userPosts[0], userPosts[1], userPosts[2]];
      } else {
        return userPosts;
      }
    }
    return [];
  }, []);
  return (
    <aside className="ass1-aside">
      <div className="ass1-content-head__t">
        <div>Bài viết gần đây.</div>
      </div>
      {currentUser ? (
        <>
          {recentPosts.map((post, index) => (
            <PostItem key={index} post={post} isShowFooter={false} />
          ))}
          {recentPosts.length === 0 && (
            <p>
              Bạn chưa tại bài viết.
              <Link href="/posts/create">
                <a>Tạo tại đây</a>
              </Link>
            </p>
          )}
        </>
      ) : (
        <div>
          Vui lòng đăng nhập để xem nội dung này
          <Link href="/login">
            <a>Đăng nhập</a>
          </Link>
        </div>
      )}
    </aside>
  );
};

export default HomeSidebar;
