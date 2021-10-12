import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPageContext, NextPage } from "next";
import { PostType } from ".";
import postService from "../services/postService";
import Masonry from "react-masonry-component";
import { PostItem } from "../components/PostItem";

//
type PropsType = {
  listPosts: PostType[];
};

const Search: NextPage<PropsType> = ({ listPosts }) => {
  const router = useRouter();
  const searchStr = router.query.q || "";
  useEffect(() => {
    if (!searchStr) {
      router.push("/");
    }
  }, [searchStr]);

  return (
    <div className="container ass1-section__list">
      {" "}
      <Masonry
        className={"ass1-section__wrap row ass1-section__isotope-init"} // default ''
      >
        {listPosts.map((post, index) => {
          return <PostItem post={post} key={index} classMoreEdit="col-lg-6" />;
        })}
      </Masonry>
    </div>
  );
};

Search.getInitialProps = async (context: NextPageContext) => {
  const query = context.query.q || "";
  const listPostRes = await postService.getPostSearch({ query });
  console.log("search result server", listPostRes);
  return {
    listPosts: listPostRes?.posts || [],
  };
};
export default Search;
