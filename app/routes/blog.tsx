import { Outlet } from "@remix-run/react";

const posts = import.meta.glob("./*.mdx");

export default function PostsLayout() {
  return (
    <div>
      <div>
        Witam na moim blogu. Postów tyle
        <div>
          Number of posts: {Object.keys(posts).length}
        </div>
      </div>

      <Outlet />      
    </div>
  );
}
