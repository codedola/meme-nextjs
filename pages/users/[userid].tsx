import React, { useEffect, useState } from "react";
import { UserDetailInfo } from "../../components/UserDetailInfo";
import { UserDetailPosts } from "../../components/UserDetailPosts";
import { NextPage, NextPageContext } from "next";
import { TypeCurrentUser } from "../../state/typeState";
import { PostType } from "..";
import cookie from "cookie";
import { notification } from "antd";
import userService from "../../services/userService";
import postService from "../../services/postService";
import { useNotAuthen } from "../../helpers/hook/useNotAuthen";
import { useRouter } from "next/router";
import { QqOutlined } from "@ant-design/icons";
import { useGlobalState } from "../../state";
//
type PropsType = {
  userDetailInfo: TypeCurrentUser;
  userDetailPosts: PostType[];
};
//
const UserDetail: NextPage<PropsType> = () => {
  useNotAuthen();
  const [token] = useGlobalState("token");
  const [userDetailInfo, setUserDetailInfo] = useState(null);
  const [userDetailPosts, setUserDetailPosts] = useState([]);
  const router = useRouter();
  const userid = router.query.userid as string;

  useEffect(() => {
    async function getDataApi() {
      const userPromise = userService.getUserByID(userid);
      const postPromise = postService.getPostByUserID({ userid, token });
      const [userRes, postRes] = await Promise.all([userPromise, postPromise]);
      setUserDetailInfo(userRes.user || null);
      setUserDetailPosts(postRes.posts || []);
    }
    getDataApi();
  }, [userid]);

  return (
    <div className="container">
      <UserDetailInfo userDetailInfo={userDetailInfo} />
      <UserDetailPosts userDetailPosts={userDetailPosts} />
    </div>
  );
};

//
export default UserDetail;
