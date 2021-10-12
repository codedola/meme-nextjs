import React, { useMemo, useEffect } from "react";
import { PostListItem } from "../components/PostListItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import HomeSidebar from "../components/HomeSidebar/HomeSidebar";
import cookie from "cookie";
import { parseJwt } from "../helpers";
import postService from "../services/postService";
import { dispatch } from "../state";
import { actGetPostPaging } from "../state/postAction";
import { useGlobalState } from "../state";
type HomeProps = React.FC<InferGetServerSidePropsType<typeof getServerSideProps>>;
export type PostType = {
  USERID: string;
  profilepicture: string;
  fullname: string;
  PID: string;
  url_image: string;
  post_content: string;
  time_added: string;
  status: string;
  count: string;
};

type HomeDataProps = {
  listPosts: PostType[];
  userPosts: PostType[];
};
const Home: HomeProps = ({ listPosts, userPosts }) => {
  const [postPaging] = useGlobalState("postPaging");

  useMemo(function () {
    dispatch(
      actGetPostPaging({
        list: listPosts,
        currPage: 1,
      })
    );
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostListItem />
        </div>
        <div className="col-lg-4">
          <HomeSidebar userPosts={userPosts} />
        </div>
      </div>
    </div>
  );
};
type TUserToken = {
  id?: string;
  email?: string;
};

export const getServerSideProps: GetServerSideProps<HomeDataProps> = async (context) => {
  const tokenStr = context.req.headers.cookie;
  const token = cookie.parse(String(tokenStr)).token || "";
  const userToken: TUserToken | null = parseJwt(token);
  const userid = userToken?.id;

  const listPostsPromise = postService.getPostPaging();
  const userPostPromise = postService.getPostByUserID({ userid, token });

  const [listPostRes, userPostRes] = await Promise.all([listPostsPromise, userPostPromise]);

  const props = {
    listPosts: listPostRes?.posts || [],
    userPosts: userPostRes?.posts || [],
  };

  return {
    props,
  };
};

export default Home;
