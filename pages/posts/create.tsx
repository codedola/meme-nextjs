import React from "react";
import { PostDetailForm } from "../../components/PostDetailForm";
import { PostDetailSidebar } from "../../components/PostDetailSidebar";
import { useNotAuthen } from "../../helpers/hook/useNotAuthen";
export default function PostCreate() {
  useNotAuthen();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostDetailForm />
        </div>
        <div className="col-lg-4">
          <PostDetailSidebar />
        </div>
      </div>
    </div>
  );
}
