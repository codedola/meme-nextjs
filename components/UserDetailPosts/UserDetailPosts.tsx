import React from "react";
import { PostType } from "../../pages";
import { PostItem } from "../PostItem";

type TypeProp = { userDetailPosts: PostType[] };
const UserDetailPosts: React.FC<TypeProp> = ({ userDetailPosts }) => {
  return (
    <div className="ass1-section__wrap row ass1-section__isotope-init">
      {userDetailPosts.map((post, index) => {
        return <PostItem post={post} key={index} classMoreEdit="col-lg-6" />;
      })}
    </div>
  );
};

export default UserDetailPosts;
