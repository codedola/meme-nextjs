import React from "react";
import { useRouter } from "next/router";
import HomeSidebar from "../../components/HomeSidebar/HomeSidebar";
import PostDetailContent from "../../components/PostDetailContent/PostDetailContent";
export default function PostDetail() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostDetailContent />
        </div>
        <div className="col-lg-4">
          <HomeSidebar />
        </div>
      </div>
    </div>
  );
}
