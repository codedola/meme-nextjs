import Link from "next/link";
import { PostListItem } from "../components/PostListItem";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostListItem />
        </div>
        <div className="col-lg-4">
          <aside className="ass1-aside">
            <div className="ass1-content-head__t">
              <div>Bài viết gần đây của bạn.</div>
            </div>
            <div>
              Vui lòng đăng nhập để xem nội dung này
              <Link href="/login">
                <a>Đăng nhập</a>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
