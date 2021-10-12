import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPageContext, NextPage } from "next";
import { PostType } from "../";
import Masonry from "react-masonry-component";
import { PostItem } from "../../components/PostItem";
import categoryService from "../../services/categoryService";

type PropsType = {
  listPosts: PostType[];
};

const Category: NextPage<PropsType> = ({ listPosts }) => {
  const router = useRouter();
  const categoryId = router.query.cateid || null;
  //
  useEffect(() => {
    if (categoryId === null) {
      router.push("/");
    }
  }, [categoryId]);

  return (
    <div className="container ass1-section__list">
      hello world
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

Category.getInitialProps = async (context: NextPageContext) => {
  const query = context.query.cateid as string;
  const listPostRes = await categoryService.getListPostsByCategory({ tagIndex: query });

  return {
    listPosts: listPostRes?.posts || [],
  };
};
export default Category;
