import React from "react";
import { PostItem } from "../PostItem";

export default function UserDetailPosts() {
  return (
    <div className="ass1-section__wrap row ass1-section__isotope-init">
      <PostItem classMoreEdit="col-lg-6" />
      <PostItem classMoreEdit="col-lg-6" />
      <PostItem classMoreEdit="col-lg-6" />
      <PostItem classMoreEdit="col-lg-6" />
    </div>
  );
}
